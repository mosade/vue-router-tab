<template>
  <div class="router-alive">
    <router-view v-slot="{ Component }">
      <transition
        v-bind="pageTrans"
        appear
        @after-enter="onTrans"
        @after-leave="onTrans"
      >
        <keep-alive ref="alive" :max="keepAliveMax">
          <router-alive-page
            v-if="Component && alive && !onRefresh"
            :key="key"
            :component="Component"
            :cache-key="key"
            :alive-path="alivePath"
            :full-path="$route.fullPath"
            :page-class="pageClass"
            cached
            @page-hook="onPageHook"
            @page-loaded="onPageLoaded"
          />
        </keep-alive>
      </transition>

      <transition
        v-bind="pageTrans"
        appear
        @after-enter="onTrans"
        @after-leave="onTrans"
      >
        <router-alive-page
          v-if="Component && !alive && !onRefresh"
          :key="key"
          :component="Component"
          :cache-key="key"
          :alive-path="alivePath"
          :full-path="$route.fullPath"
          :page-class="pageClass"
          @page-loaded="onPageLoaded"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { h, inject } from 'vue'
import { viewDepthKey } from 'vue-router'
import {
  mapGetters,
  getTransOpt,
  getCtorId,
  getComponentOptions
} from '../util'
import RouteMatch from '../util/RouteMatch'

const RouterAlivePage = {
  name: 'RouterAlivePage',
  inheritAttrs: false,

  props: {
    component: {
      type: [Object, Function],
      required: true
    },
    cacheKey: {
      type: String,
      required: true
    },
    alivePath: {
      type: String,
      required: true
    },
    fullPath: {
      type: String,
      required: true
    },
    pageClass: {
      type: [Array, Object, String],
      default: 'router-alive-page'
    },
    cached: Boolean
  },

  emits: ['page-hook', 'page-loaded'],

  created() {
    this.emitHook('created')
  },

  mounted() {
    this.emitHook('mounted')
  },

  activated() {
    this.emitHook('activated')
  },

  deactivated() {
    this.emitHook('deactivated')
  },

  unmounted() {
    this.emitHook('unmounted')
  },

  methods: {
    getPageVm() {
      const page = this.$refs.page
      return Array.isArray(page) ? page[0] : page
    },

    emitHook(name) {
      if (!this.cached) return

      this.$emit('page-hook', {
        name,
        key: this.cacheKey,
        alivePath: this.alivePath,
        fullPath: this.fullPath,
        vm: this.getPageVm()
      })
    },

    onPageLoaded() {
      this.$emit('page-loaded')
    }
  },

  render() {
    return h(this.component, {
      ref: 'page',
      class: this.pageClass,
      onPageLoaded: this.onPageLoaded
    })
  }
}

/**
 * 路由缓存控件
 */
export default {
  name: 'RouterAlive',
  components: { RouterAlivePage },

  provide() {
    // 提供实例给子组件调用
    return {
      RouterAlive: this
    }
  },

  props: {
    // 默认是否开启缓存
    keepAlive: {
      type: Boolean,
      default: false
    },

    // 是否复用路由组件
    reuse: {
      type: Boolean,
      default: false
    },

    // 最大缓存数，0 则不限制
    max: {
      type: Number,
      default: 0
    },

    // 页面 class
    pageClass: {
      type: [Array, Object, String],
      default: 'router-alive-page'
    },

    // 页面滚动元素选择器
    pageScroller: {
      type: String,
      default: ''
    },

    // 过渡效果
    transition: {
      type: [String, Object]
    }
  },

  setup() {
    const parentViewDepth = inject(viewDepthKey, 0)

    return {
      routeIndex: parentViewDepth + 1
    }
  },

  data() {
    // 缓存记录
    this.cache = {}

    return {
      // 路由匹配信息
      routeMatch: new RouteMatch(this),

      // 是否正在更新
      onRefresh: false
    }
  },

  computed: {
    // 从 this.routeMatch 提取计算属性
    ...mapGetters('routeMatch', [
      'key',
      'meta',
      'nest',
      'alive',
      'reusable',
      'basePath',
      'alivePath'
    ]),

    keepAliveMax() {
      return this.max > 0 ? this.max : undefined
    },

    // 页面过渡
    pageTrans() {
      return getTransOpt(this.transition)
    }
  },

  watch: {
    // 监听路由
    $route: {
      handler($route, old) {
        // 组件就绪
        if (!old) this.$emit('ready', this)

        if (!$route.matched.length) return

        const { key, alive, reusable, alivePath, nest } = this
        const cacheItem = this.cache[key] || {}
        let {
          alivePath: cacheAlivePath,
          fullPath: cacheFullPath,
          vm: cacheVM
        } = cacheItem

        // 不复用且路由改变则清理组件缓存
        if (cacheAlivePath && !reusable && cacheAlivePath !== alivePath) {
          cacheAlivePath = ''
          this.refresh(key)
        }

        // 嵌套路由，地址跟缓存不一致
        if (nest && cacheVM && $route.fullPath !== cacheFullPath) {
          const oldKey = this.matchRoute(old).key
          if (oldKey !== key) {
            this.nestForceUpdate = true
          }
        }

        // 类型：更新或者新建缓存
        const type = cacheAlivePath ? 'update' : 'create'

        this.$emit('change', type, this.routeMatch)

        // 更新缓存路径
        if (alive) {
          cacheItem.fullPath = $route.fullPath
        }
      },

      immediate: true
    }
  },

  // 销毁后清理
  unmounted() {
    this.cache = null
    this.routeMatch = null
    this._match = null
  },

  methods: {
    // 移除缓存
    remove(key = this.key) {
      const cacheItem = this.cache[key]

      // 清理 RouterAlive 缓存记录
      if (cacheItem) {
        cacheItem.vm = null
        this.cache[key] = null
      }

      // 清理 keepAlive 缓存记录
      this.pruneKeepAliveCache(key)
    },

    // 刷新
    refresh(key = this.key) {
      this.remove(key)

      // 非当前缓存，直接移除
      if (key === this.key) {
        this.reload()
      }
    },

    // 重新加载
    reload() {
      if (this.onRefresh) return

      this.onRefresh = true
    },

    getPageVm(key = this.key) {
      const cacheItem = this.cache && this.cache[key]
      return (cacheItem && cacheItem.vm) || null
    },

    pruneKeepAliveCache(key) {
      const keepAlive = this.$refs.alive
      const keepAliveInstance = keepAlive && keepAlive.$
      const cache = keepAliveInstance && keepAliveInstance.__v_cache
      const prune = keepAliveInstance?.ctx?.pruneCacheEntry

      if (!cache) return
      if (typeof prune === 'function') {
        prune(key)
      } else if (typeof cache.delete === 'function') {
        cache.delete(key)
      }
    },

    // 缓存页面组件钩子
    onPageHook(payload) {
      const handler = this[`pageHook:${payload.name}`]
      if (typeof handler === 'function') handler(payload)
    },

    // 页面创建
    'pageHook:created'({ key, alivePath, fullPath }) {
      this.cache[key] = {
        alivePath,
        fullPath
      }
    },

    // 页面挂载
    'pageHook:mounted'({ key, vm }) {
      this.cache[key].vm = vm

      // 重置初始滚动位置
      this.resetScrollPosition()
    },

    // 页面激活
    'pageHook:activated'({ vm: pageVm }) {
      // 热重载更新
      if (this.checkHotReloading()) return

      // 嵌套路由缓存导致页面不匹配时强制更新
      if (this.nestForceUpdate) {
        delete this.nestForceUpdate
        pageVm && pageVm.$forceUpdate()
      }

      // 还原滚动位置
      this.restoreScrollPosition()
    },

    // 页面失活
    'pageHook:deactivated'() {
      if (this.checkHotReloading()) return

      // 保存滚动位置
      this.saveScrollPosition()
    },

    // 页面销毁后清理 cache
    async 'pageHook:unmounted'({ key, vm }) {
      await this.$nextTick()

      if (!this.cache) return
      const cacheItem = this.cache[key]

      if (cacheItem && (!vm || cacheItem.vm === vm)) {
        this.cache[key] = null
      }
    },

    // 页面过渡后结束刷新状态
    onTrans() {
      if (this.onRefresh) {
        this.onRefresh = false
        this.$emit('change', 'create', this.routeMatch)
      }
    },

    // 匹配路由信息
    matchRoute($route) {
      const matched = this._match

      // 当前路由
      if (
        $route === this.$route ||
        $route.fullPath === this.$route.fullPath ||
        $route === this.$route.fullPath
      ) {
        return this.routeMatch
      }

      if (matched) {
        matched.$route = $route
        return matched
      }

      return (this._match = new RouteMatch(this, $route))
    },

    // 检测热重载
    checkHotReloading() {
      const pageVm = this.getPageVm()

      if (!pageVm) return false
      const lastCid = pageVm._lastCtorId
      const cid = (pageVm._lastCtorId = getCtorId(pageVm))

      // 热重载更新
      if (lastCid && lastCid !== cid) {
        this.refresh()
        return true
      }

      return false
    },

    // 获取滚动元素
    getScroller(selector) {
      return selector.startsWith('$')
        ? document.querySelector(selector.replace(/^\$/, ''))
        : this.$el.querySelector(selector)
    },

    // 保存滚动位置
    saveScrollPosition() {
      const pageVm = this.getPageVm()

      if (!pageVm) return
      // 页面内部配置的滚动元素
      let { pageScroller } = getComponentOptions(pageVm)

      if (typeof pageScroller === 'string' && pageScroller.length) {
        pageScroller = pageScroller.split(/\s?,\s?/)
      }

      if (!Array.isArray(pageScroller)) {
        pageScroller = []
      }

      // 默认保存页面根节点位置
      pageScroller.push('.' + this.pageClass)

      // 添加全局的滚动元素配置
      // 组件外部选择器使用 $ 前缀区分
      if (this.pageScroller) {
        pageScroller.push('$' + this.pageScroller)
      }

      // 记录位置
      const position = pageScroller.reduce((pos, selector) => {
        const el = this.getScroller(selector)

        if (el) {
          pos[selector] = {
            left: el.scrollLeft,
            top: el.scrollTop
          }
        }

        return pos
      }, {})

      pageVm._pageScrollPosition = position
    },

    // 还原滚动位置
    restoreScrollPosition() {
      const pageVm = this.getPageVm()
      const position = pageVm?._pageScrollPosition

      if (!position) return
      Object.entries(position).forEach(([selector, pos]) => {
        const el = this.getScroller(selector)
        if (el) {
          el.scrollLeft = pos.left
          el.scrollTop = pos.top
        }
      })
    },

    // 重置全局滚动位置
    resetScrollPosition() {
      if (!this.pageScroller) return

      const el = this.getScroller('$' + this.pageScroller)

      if (!el) return
      el.scrollLeft = 0
      el.scrollTop = 0
    },

    // 页面数据加载成功
    async onPageLoaded() {
      await this.$nextTick()
      // 页面数据加载成功后还原滚动位置
      this.restoreScrollPosition()
    }
  }
}
</script>
