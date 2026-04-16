import { Comment, h, resolveComponent, Text } from 'vue'
import { mapGetters } from '../util'

// 拖拽传输数据前缀
const TRANSFER_PREFIX = 'RouterTabDragSortIndex:'

// 排序拖拽数据
// 用以解决双核浏览器兼容模式下无法通过 dataTransfer.getData 获取数据
let dragSortData = null

function hasSlotContent(nodes) {
  return (
    Array.isArray(nodes) &&
    nodes.some(node => {
      if (!node || node.type === Comment) return false
      if (node.type === Text) {
        return String(node.children || '').trim().length > 0
      }
      return true
    })
  )
}

// 页签项
// @vue/component
export default {
  name: 'TabItem',
  inject: ['$tabs'],

  props: {
    // 页签原始数据，方便 slot 插槽自定义数据
    data: {
      type: Object,
      required: true
    },

    // 页签项索引
    index: Number
  },

  emits: ['contextmenu'],

  data() {
    return {
      onDragSort: false, // 是否正在拖拽
      isDragOver: false // 是否拖拽经过
    }
  },

  computed: {
    // 从 this.data 提取计算属性
    ...mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href']),

    // class
    classList() {
      return [
        'router-tab__item',
        this.tabClass,
        {
          'is-active': this.$tabs.activeTabId === this.id,
          'is-closable': this.closable,
          'is-contextmenu': this.$tabs.contextData.id === this.id,
          'is-drag-over': this.isDragOver && !this.onDragSort
        }
      ]
    },

    // 国际化
    i18nText() {
      return this.$tabs.i18nText
    },

    // 未命名页签
    untitled() {
      return this.$tabs.langs.tab.untitled
    },

    // 页签标题
    title() {
      console.log('this.data', this.data)
      return this.i18nText(this.data.title) || this.untitled
    },

    // 页签提示
    tips() {
      return this.i18nText(this.data.tips || this.data.title) || this.untitled
    },

    // 是否可关闭
    closable() {
      const { keepLastTab, items } = this.$tabs
      return this.data.closable !== false && !(keepLastTab && items.length < 2)
    }
  },

  methods: {
    // 插槽默认内容
    slotDefault() {
      return [
        this.icon && h('i', { class: ['router-tab__item-icon', this.icon] }),
        h(
          'span',
          { class: 'router-tab__item-title', title: this.tips },
          this.title
        ),
        this.closable &&
          h('i', {
            class: 'router-tab__item-close',
            onClick: e => {
              e.preventDefault()
              e.stopPropagation()
              this.close()
            }
          })
      ]
    },

    // 关闭当前页签
    close() {
      this.$tabs.closeTab(this.id)
    },

    // 拖拽
    onDragStart(e) {
      this.onDragSort = this.$tabs.onDragSort = true
      dragSortData = TRANSFER_PREFIX + this.index
      e.dataTransfer.setData('text', dragSortData)
      e.dataTransfer.effectAllowed = 'move'
    },

    // 拖拽悬浮
    onDragOver(e) {
      this.isDragOver = true
      e.dataTransfer.dropEffect = 'move'
    },

    // 拖拽结束
    onDragEnd() {
      this.onDragSort = this.$tabs.onDragSort = false
      dragSortData = null
    },

    // 释放后排序
    onDrop(e) {
      const { items } = this.$tabs
      const raw = e.dataTransfer.getData('text') || dragSortData

      this.isDragOver = false

      if (typeof raw !== 'string' || !raw.startsWith(TRANSFER_PREFIX)) return

      const fromIndex = raw.replace(TRANSFER_PREFIX, '')
      const tab = items[fromIndex]

      items.splice(fromIndex, 1)
      items.splice(this.index, 0, tab)
    }
  },

  // 渲染组件
  // 使用 jsx render 模式替换 template，避免 Vue 2.5.22 版本不支持子组件使用父组件的 slot 导致出错。
  render() {
    const RouterLink = resolveComponent('RouterLink')
    const slot = this.$tabs.$slots.default

    return h(
      RouterLink,
      {
        custom: true,
        to: this.to
      },
      {
        default: ({ navigate }) => {
          return h(
            'li',
            {
              class: this.classList,
              draggable: this.$tabs.dragsort,
              onClick: navigate,
              onContextmenu: e => {
                e.preventDefault()
                this.$emit('contextmenu', e)
              },
              onDragstart: this.onDragStart,
              onDragend: this.onDragEnd,
              onDragover: e => {
                e.preventDefault()
                this.onDragOver(e)
              },
              onDragleave: e => {
                e.preventDefault()
                this.isDragOver = false
              },
              onDrop: e => {
                e.preventDefault()
                e.stopPropagation()
                this.onDrop(e)
              },
              onMouseup: e => {
                if (e.button === 1 && this.closable) {
                  this.close()
                }
              }
            },
            (() => {
              const slotContent = slot && slot(this)
              return hasSlotContent(slotContent)
                ? slotContent
                : this.slotDefault()
            })()
          )
        }
      }
    )
  }
}
