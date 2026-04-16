import { emptyObj, getComponentOptions } from '../util'
import { clearAlivePage, setAlivePage } from '../util/tabs'

// 浏览器窗口关闭或者刷新
const beforeunload = ($tabs, tabId, beforePageLeave) => e => {
  if (!$tabs) return

  const tab = $tabs.items.find(item => item.id === tabId)
  if (!tab) return

  const msg = beforePageLeave(tab, 'unload')

  if (msg && typeof msg === 'string') {
    e.preventDefault()
    e.returnValue = msg

    // 非当前页签则切换
    if ($tabs.activeTabId !== tabId) {
      $tabs.open(tab.to, false, false)
    }

    return msg
  }
}

/** 更新页签 */
function updateTab(info) {
  const tab = typeof info === 'string' ? { title: info } : info
  const { activeTab } = this.$tabs || emptyObj

  if (tab && activeTab) {
    for (const key in tab) {
      if (!['id', 'to'].includes(key)) {
        activeTab[key] = tab[key]
      }
    }
  }
}

function syncAlivePage(vm) {
  const { $tabs } = vm
  const tabId = $tabs && $tabs.activeTabId
  const isRoutePage = vm.$el?.classList?.contains('router-tab-page')

  if (tabId && isRoutePage) {
    setAlivePage(tabId, vm)
  }
}

// 路由页面混入
export default {
  watch: {
    // 监听 routerTab 字段，更新页签信息
    routeTab: {
      handler(val) {
        if (!val) return
        updateTab.call(this, val)
      },
      deep: true,
      immediate: true
    }
  },

  // 创建前记录缓存
  mounted() {
    const { $tabs } = this
    const { beforePageLeave } = getComponentOptions(this) || emptyObj

    // 页面离开确认
    if ($tabs && beforePageLeave) {
      window.addEventListener(
        'beforeunload',
        (this._beforeunload = beforeunload(
          $tabs,
          $tabs.activeTabId,
          beforePageLeave.bind(this)
        ))
      )
    }

    syncAlivePage(this)
  },

  // 页签激活时更新页签
  activated() {
    this.routeTab && updateTab.call(this, this.routeTab)
    syncAlivePage(this)
  },

  unmounted() {
    const tabId = this.$tabs && this.$tabs.getRouteKey(this.$route)

    if (this._beforeunload) {
      window.removeEventListener('beforeunload', this._beforeunload)
    }

    clearAlivePage(tabId, this)
  }
}
