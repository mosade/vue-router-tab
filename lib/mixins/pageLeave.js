import { emptyObj, getComponentOptions } from '../util'
import { getAlivePage, getCurrentTabs } from '../util/tabs'

// 路由导航守卫
export const leaveGuard = () => (to, from, next) => {
  const $tabs = getCurrentTabs()

  if (!$tabs) {
    next()
    return
  }

  const fromId = $tabs.getRouteKey(from)
  const toId = $tabs.getRouteKey(to)
  const { $alive } = $tabs
  const fromCache = $alive && $alive.cache[fromId]
  const { alivePath } = ($alive && $alive.cache[toId]) || emptyObj
  const matched = $tabs.matchRoute(to)

  let id, type

  if (alivePath && alivePath !== matched.alivePath) {
    // 页签地址被替换：to 存在缓存但缓存路由不一致
    type = 'replace'
    id = toId
  } else if ($alive && $alive.basePath !== matched.basePath) {
    // 离开页签组件：to 不在当前页签组件路由下
    type = 'leave'
    id = $tabs.activeTabId
  } else if (!fromCache && fromId !== toId) {
    // 当前组件未缓存时离开页签
    type = 'leave'
    id = $tabs.activeTabId
  }

  if (type) {
    $tabs
      .leavePage(id, type)
      .then(next)
      .catch(() => next(false))
  } else {
    next()
  }
}

// 页面离开
export default {
  created() {
    const { $router } = this

    if ($router._RouterTabInit) return

    // 初始化路由导航守卫
    $router.beforeEach(leaveGuard())
    $router._RouterTabInit = true
  },

  methods: {
    // 页面离开 Promise
    async leavePage(id, type) {
      const tab = this.items.find(item => item.id === id) // 当前页签
      const vm =
        (this.$alive && this.$alive.getPageVm(id)) ||
        (this.activeTabId === id ? getAlivePage(id) : null)

      if (!vm || !tab) return

      const pageLeave = getComponentOptions(vm).beforePageLeave

      if (typeof pageLeave === 'function') {
        // 页签关闭前
        return pageLeave.bind(vm)(tab, type)
      }
    }
  }
}
