/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 455:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en.js": 887,
	"./zh.js": 702
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 455;

/***/ }),

/***/ 621:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tab: {
    untitled: 'Untitled'
  },
  contextmenu: {
    refresh: 'Refresh',
    refreshAll: 'Refresh All',
    close: 'Close',
    closeLefts: 'Close to the Left',
    closeRights: 'Close to the Right',
    closeOthers: 'Close Others'
  },
  msg: {
    keepLastTab: 'Keep at least 1 tab',
    i18nProp: 'Method "i18n" is not defined on the instance'
  }
});

/***/ }),

/***/ 702:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tab: {
    untitled: '无标题'
  },
  contextmenu: {
    refresh: '刷新',
    refreshAll: '刷新全部',
    close: '关闭',
    closeLefts: '关闭左侧',
    closeRights: '关闭右侧',
    closeOthers: '关闭其他'
  },
  msg: {
    keepLastTab: '至少应保留1个页签',
    i18nProp: '请提供“i18n”方法以处理国际化内容'
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Iframe: function() { return /* reexport */ Iframe; },
  RouterAlive: function() { return /* reexport */ RouterAlive; },
  RouterTabRoutes: function() { return /* reexport */ routes; },
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/RouterTab.vue?vue&type=template&id=c21f46ba

const _hoisted_1 = {
  class: "router-tab"
};
const _hoisted_2 = {
  ref: "header",
  class: "router-tab__header"
};
const _hoisted_3 = {
  class: "router-tab__slot-start"
};
const _hoisted_4 = {
  class: "router-tab__slot-end"
};
const _hoisted_5 = {
  class: "router-tab__container"
};
const _hoisted_6 = ["src", "name", "onLoad"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tab_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("tab-item");
  const _component_tab_scroll = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("tab-scroll");
  const _component_router_alive = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("router-alive");
  const _component_tab_contextmenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("tab-contextmenu");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("header", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "start")]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_tab_scroll, {
    ref: "scroll"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.TransitionGroup, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
      tag: "ul",
      class: "router-tab__nav"
    }, _ctx.tabTrans, {
      onAfterEnter: _ctx.onTabTrans,
      onAfterLeave: _ctx.onTabTrans
    }), {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(_ctx.items, (item, index) => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_tab_item, {
          key: item.id || item.to,
          ref_for: true,
          ref: "tab",
          data: item,
          index: index,
          onContextmenu: e => _ctx.showContextmenu(item.id, index, e)
        }, null, 8, ["data", "index", "onContextmenu"]);
      }), 128))]),
      _: 1
    }, 16, ["onAfterEnter", "onAfterLeave"])]),
    _: 1
  }, 512), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "end")])], 512), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_alive, {
    "page-class": "router-tab-page",
    "keep-alive": _ctx.keepAlive,
    reuse: _ctx.reuse,
    max: _ctx.maxAlive,
    transition: _ctx.pageTrans,
    "page-scroller": _ctx.pageScroller,
    onReady: _ctx.onAliveReady,
    onChange: _ctx.onAliveChange
  }, null, 8, ["keep-alive", "reuse", "max", "transition", "page-scroller", "onReady", "onChange"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.TransitionGroup, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)(_ctx.pageTrans, {
    tag: "div",
    class: "router-tab__iframes"
  }), {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(_ctx.iframes, url => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)(((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("iframe", {
        key: url,
        src: url,
        name: _ctx.iframeNamePrefix + url,
        frameborder: "0",
        class: "router-tab__iframe",
        onLoad: $event => _ctx.iframeLoaded(url)
      }, null, 40, _hoisted_6)), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, url === _ctx.currentIframe]]);
    }), 128))]),
    _: 1
  }, 16)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Transition, {
    name: "router-tab-zoom"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [_ctx.contextmenu !== false && _ctx.contextData.index > -1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_tab_contextmenu, {
      key: 0,
      data: _ctx.contextData,
      menu: _ctx.contextMenu
    }, null, 8, ["data", "menu"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]),
    _: 1
  })]);
}
;// ./lib/RouterTab.vue?vue&type=template&id=c21f46ba

;// ./lib/util/index.js
// 空对象和数组
const emptyObj = Object.create(null);
const emptyArray = (/* unused pure expression or super */ null && ([]));
const ctorIds = new WeakMap();
let nextCtorId = 0;

// 从数组删除项
function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * 滚动到指定位置
 * @export
 * @param {Element} wrap 滚动区域
 * @param {number} [left=0]
 * @param {number} [top=0]
 */
function scrollTo({
  wrap,
  left = 0,
  top = 0,
  smooth = true
}) {
  if (!wrap) return;
  if (wrap.scrollTo) {
    wrap.scrollTo({
      left,
      top,
      behavior: smooth ? 'smooth' : 'auto'
    });
  } else {
    wrap.scrollLeft = left;
    wrap.scrollTop = top;
  }
}

/**
 * 指定元素滚动到可视区域
 * @export
 * @param {Element} el 目标元素
 * @param {Element} wrap 滚动区域
 * @param {String} block 垂直方向的对齐，可选：'start', 'center', 'end', 或 'nearest'
 * @param {String} inline 水平方向的对齐，可选值同上
 */
function scrollIntoView({
  el,
  wrap,
  block = 'start',
  inline = 'nearest'
}) {
  if (!el || !wrap) return;
  if (el.scrollIntoView) {
    el.scrollIntoView({
      behavior: 'smooth',
      block,
      inline
    });
  } else {
    let {
      offsetLeft,
      offsetTop
    } = el;
    let left, top;
    if (block === 'center') {
      top = offsetTop + (el.clientHeight - wrap.clientHeight) / 2;
    } else {
      top = offsetTop;
    }
    if (inline === 'center') {
      left = offsetLeft + (el.clientWidth - wrap.clientWidth) / 2;
    } else {
      left = offsetLeft;
    }
    scrollTo({
      wrap,
      left,
      top
    });
  }
}

// 获取滚动条宽度
const getScrollbarWidth = function () {
  let width = null;
  return function () {
    if (width !== null) return width;
    const div = document.createElement('div');
    div.style.cssText = 'width: 100px; height: 100px;overflow-y: scroll';
    document.body.appendChild(div);
    width = div.offsetWidth - div.clientWidth;
    div.parentElement.removeChild(div);
    return width;
  };
}();

/**
 * 提取计算属性
 * @export
 * @param {String} origin 来源属性
 * @param {Array|Object} props 需要提取的计算属性
 * @param {String} context 来源选项为 function 时的入参
 * @returns {Object}
 */
function mapGetters(origin, props, context) {
  const map = {};
  const each = (prop, option) => {
    if (option === null || typeof option !== 'object') {
      option = {
        default: option
      };
    }
    const {
      default: def,
      alias
    } = option;
    map[alias || prop] = function () {
      const val = this[origin][prop];
      if (context && typeof val === 'function') {
        // 函数返回
        return val(this[context]);
      } else if (def !== undefined && val === undefined) {
        // 默认值
        if (typeof def === 'function') {
          return def.bind(this)();
        }
        return def;
      }
      return val;
    };
  };
  if (Array.isArray(props)) {
    props.forEach(prop => each(prop));
  } else {
    Object.entries(props).forEach(([prop, def]) => each(prop, def));
  }
  return map;
}

// 去除路径中的 hash
const prunePath = path => path.split('#')[0];

// 解析过渡配置
function getTransOpt(trans) {
  return typeof trans === 'string' ? {
    name: trans
  } : trans;
}
function getComponentOptions(vm) {
  return vm && (vm.$options || vm.$?.type) || emptyObj;
}
function getComponentType(vm) {
  return vm && vm.$ && vm.$.type;
}
function resolveRoute(router, $route) {
  const resolved = router && router.resolve ? router.resolve($route) : null;
  return resolved && resolved.route ? resolved.route : resolved || $route;
}

// 获取组件 id
function getCtorId(vm) {
  const type = getComponentType(vm);
  if (!type) return 0;
  if (!ctorIds.has(type)) {
    ctorIds.set(type, ++nextCtorId);
  }
  return ctorIds.get(type);
}
;// ./lib/util/tabs.js
let currentTabs = null;
const alivePages = Object.create(null);
function setCurrentTabs($tabs) {
  currentTabs = $tabs || null;
}
function getCurrentTabs() {
  return currentTabs;
}
function clearCurrentTabs($tabs) {
  if (currentTabs === $tabs) {
    currentTabs = null;
  }
}
function setAlivePage(key, vm) {
  if (key && vm) {
    alivePages[key] = vm;
  }
}
function getAlivePage(key) {
  return key ? alivePages[key] || null : null;
}
function clearAlivePage(key, vm) {
  if (!key) return;
  if (!vm || alivePages[key] === vm) {
    delete alivePages[key];
  }
}
;// ./lib/mixins/contextmenu.js


// 右键菜单
/* harmony default export */ var contextmenu = ({
  data() {
    return {
      // 右键菜单
      contextData: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    };
  },
  computed: {
    // 菜单配置
    contextMenu() {
      return Array.isArray(this.contextmenu) ? this.contextmenu : undefined;
    }
  },
  watch: {
    // 路由切换隐藏右键菜单
    $route() {
      this.hideContextmenu();
    },
    // 拖拽排序隐藏右键菜单
    onDragSort() {
      this.hideContextmenu();
    }
  },
  mounted() {
    // 显示右键菜单，绑定点击关闭事件
    document.addEventListener('click', this.contextmenuClickOutSide);
  },
  unmounted() {
    // 隐藏右键菜单，移除点击关闭事件
    document.removeEventListener('click', this.contextmenuClickOutSide);
  },
  methods: {
    // 显示页签右键菜单
    async showContextmenu(id, index, e) {
      // 关闭已打开的菜单
      if (id !== null && this.contextData.id !== null) {
        this.hideContextmenu();
        await this.$nextTick();
      }

      // 菜单定位
      let {
        clientY: top,
        clientX: left
      } = e || emptyObj;
      Object.assign(this.contextData, {
        id,
        index,
        top,
        left
      });
    },
    // 关闭页签右键菜单
    hideContextmenu() {
      this.showContextmenu(null, -1);
    },
    // 菜单外部点击关闭
    contextmenuClickOutSide(e) {
      if (e.target !== this.$el.querySelector('.router-tab-contextmenu')) {
        this.hideContextmenu();
      }
    }
  }
});
;// ./lib/config/lang/index.js
// 引入目录下语言配置
const context = __webpack_require__(455);

// 语言配置
/* harmony default export */ var config_lang = (context.keys().reduce((map, path) => {
  let [, key] = /\.\/(.*).js/g.exec(path);
  map[key] = context(path).default;
  return map;
}, {}));
;// ./lib/util/warn.js
const prefix = '[Vue Router Tab]';

// 错误
function assert(condition, message) {
  if (!condition) {
    throw new Error(`${prefix} ${message}`);
  }
}

// 警告
function warn(condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(`${prefix} ${message}`);
  }
}

// 常用消息
const messages = {
  renamed(newName, target = '方法') {
    return `该${target}已更名为“${newName}”，请修改后使用`;
  }
};
;// ./lib/mixins/i18n.js
 // 语言配置


// 国际化
/* harmony default export */ var i18n = ({
  computed: {
    // 语言内容
    langs() {
      let {
        lang
      } = this;

      // 自动识别浏览器语言
      if (lang === 'auto') {
        lang = (navigator.language || navigator.userLanguage).substr(0, 2);
      }
      if (typeof lang === 'string') {
        lang = config_lang[lang];
      }

      // 找不到语言配置，则使用英文
      if (!lang) lang = config_lang['en'];
      return lang;
    }
  },
  methods: {
    // 获取国际化内容
    i18nText(text) {
      let {
        key,
        params
      } = this.i18nParse(text);
      if (key) {
        const hasI18nProp = typeof this.i18n === 'function';

        // 未配置 i18n 方法则警告
        if (!this._hasI18nPropWarn) {
          warn(hasI18nProp, this.langs.msg.i18nProp);
          this._hasI18nPropWarn = true;
        }
        if (hasI18nProp) {
          return this.i18n(key, params);
        }
      }
      return text;
    },
    // 解析国际化
    i18nParse(text) {
      let key;
      let params;

      // 获取国际化配置
      if (typeof text === 'string') {
        // 字符串方式配置：'i18n:custom.lang.key'
        const res = /^i18n:([^\s]+)$/.exec(text);
        if (res) {
          key = res[1];
          params = [];
        }
      } else if (Array.isArray(text)) {
        // 数组方式配置：['tab.i18n.key', 'param1', 'param2', ...]
        ;
        [key, ...params] = text;
      }
      return {
        key,
        params
      };
    }
  }
});
;// ./lib/mixins/iframe.js
// Iframe 页签
/* harmony default export */ var iframe = ({
  data() {
    return {
      iframes: [],
      currentIframe: null,
      iframeNamePrefix: 'RouterTabIframe-'
    };
  },
  methods: {
    // 获取 Iframe 页签路由路径
    getIframePath(src, title = null, icon = null) {
      let path = `${this.basePath}/iframe/`.replace(/\/+/g, '/') + encodeURIComponent(src);
      if (title) {
        path += '/' + title;
        if (icon) path += '/' + icon;
      }
      return path;
    },
    // 打开 Iframe 页签
    openIframe(src, title, icon) {
      let path = this.getIframePath(src, title, icon);
      this.$router.push(path);
    },
    // 关闭 Iframe 页签
    closeIframe(src) {
      let path = this.getIframePath(src);
      this.close({
        path,
        match: false
      });
    },
    // 刷新 Iframe 页签
    refreshIframe(src) {
      let path = this.getIframePath(src);
      this.refresh(path, false);
    },
    // 根据 url 获取 iframe 节点
    getIframeEl(url) {
      const name = this.iframeNamePrefix + url;
      return document.getElementsByName(name)[0];
    },
    // iframe 节点 mounted
    iframeMounted(url) {
      const iframe = this.getIframeEl(url);
      this.$emit('iframe-mounted', url, iframe);
    },
    // iframe 加载成功
    iframeLoaded(url) {
      const iframe = this.getIframeEl(url);
      this.$emit('iframe-loaded', url, iframe);
    }
  }
});
;// ./lib/mixins/operate.js


// 获取关闭参数
function getCloseArgs(args) {
  args = Array.from(args);
  let argsLen = args.length;
  let arg = args[0]; // 首个选项

  if (!argsLen) {
    // close()
    return {};
  } else if (arg && typeof arg === 'object' && !arg.name && !arg.fullPath && !arg.params && !arg.query && !arg.hash) {
    // close({id, path, match, force, to, refresh})
    return arg;
  } else {
    // close(path, to)
    let [path, to] = args;
    return {
      path,
      to
    };
  }
}

// 路径是否一致
function equalPath(path1, path2) {
  const reg = /\/$/;
  return path1.replace(reg, '') === path2.replace(reg, '');
}

// 页签操作
/* harmony default export */ var operate = ({
  methods: {
    /**
     * 打开页签（默认全新打开）
     * @param {location} path 页签路径
     * @param {Boolean} [isReplace = false] 是否 replace 方式替换当前路由
     * @param {Boolean | String} [refresh = true] 是否全新打开，如果为 `sameTab` 则仅同一个页签才全新打开
     */
    async open(path, isReplace = false, refresh = true) {
      const curId = this.activeTabId;
      const tarId = this.getRouteKey(path);
      const isSameTab = equalPath(curId, tarId);

      // 打开路由与当前路由相同页签才刷新
      refresh === 'sameTab' && (refresh = isSameTab);
      refresh && this.refresh(path, false);
      try {
        await this.$router[isReplace ? 'replace' : 'push'](path);
      } catch (e) {} finally {
        isSameTab && this.reload();
      }
    },
    // 移除 tab 项
    async removeTab(id, force = false) {
      let {
        items
      } = this;
      const idx = items.findIndex(item => item.id === id);

      // 最后一个页签不允许关闭
      if (!force && this.keepLastTab && items.length === 1) {
        throw new Error(this.langs.msg.keepLastTab);
      }
      if (!force) await this.leavePage(id, 'close');

      // 承诺关闭后移除页签和缓存
      this.$alive.remove(id);
      idx > -1 && items.splice(idx, 1);
    },
    /**
     * 关闭页签
     * 支持以下方式调用：
     *   1. this.$tabs.close({id, path, match, force, to, refresh})
     *   2. this.$tabs.close(path, to)
     * @param {String} id 通过页签 id 关闭
     * @param {location} path 通过路由路径关闭页签，如果未配置 id 和 path 则关闭当前页签
     * @param {Boolean} [match = true] path 方式关闭时，是否匹配 path 完整路径
     * @param {Boolean} [force = true] 是否强制关闭
     * @param {location} to 关闭后跳转的地址，为 null 则不跳转
     * @param {Boolean} [refresh = false] 是否全新打开跳转地址
     */
    async close() {
      // 解析参数
      let {
        id,
        path,
        match = true,
        force = true,
        to,
        refresh = false
      } = getCloseArgs(arguments);
      let {
        activeTabId,
        items
      } = this;

      // 根据 path 获取 id
      if (!id && path) {
        id = this.getIdByPath(path, match);
        if (!id) return;
      }

      // 默认当前页签
      if (!id) id = activeTabId;
      try {
        const idx = items.findIndex(item => item.id === id);

        // 移除页签
        await this.removeTab(id, force);

        // 为 null 不跳转
        if (to === null) return;

        // 如果关闭当前页签，则打开后一个页签
        if (!to && activeTabId === id) {
          let nextTab = items[idx] || items[idx - 1];
          to = nextTab ? nextTab.to : this.defaultPath;
        }
        if (to) {
          this.open(to, true, refresh === false ? 'sameTab' : true);
        }
      } catch (e) {
        warn(false, e);
      }
    },
    // 通过页签 id 关闭页签
    async closeTab(id = this.activeTabId, to, force = false) {
      this.close({
        id,
        to,
        force
      });
    },
    /**
     * 通过路由地址刷新页签
     * @param {location} path 需要刷新的地址
     * @param {Boolean} [match = true] 是否匹配 target 完整路径
     * @param {Boolean} [force = true] 是否强制刷新
     */
    refresh(path, match = true, force = true) {
      let id = path && this.getIdByPath(path, match) || undefined;
      this.refreshTab(id, force);
    },
    // 刷新指定页签
    async refreshTab(id = this.activeTabId, force = false) {
      try {
        if (!force) await this.leavePage(id, 'refresh');
        this.$alive.refresh(id);
      } catch (e) {
        warn(false, e);
      }
    },
    /**
     * 刷新所有页签
     * @param {Boolean} [force = false] 是否强制刷新，如果强制则忽略页面 beforePageLeave
     */
    async refreshAll(force = false) {
      const {
        cache
      } = this.$alive;
      for (const id in cache) {
        try {
          if (!force) await this.leavePage(id, 'refresh');
          this.$alive.refresh(id);
        } catch (e) {}
      }
    },
    /**
     * 重置 RouterTab 到默认状态，关闭所有页签并清理缓存页签数据
     * @param {location} [to = this.defaultPath] 重置后跳转页面
     */
    reset(to = this.defaultPath) {
      // 遍历删除缓存
      this.items.forEach(({
        id
      }) => this.$alive.remove(id));

      // 清除缓存页签
      this.clearTabsStore();

      // 初始页签数据
      this.initTabs();
      this.open(to, true, true);
    }
  }
});
;// ./lib/mixins/pageLeave.js



// 路由导航守卫
const leaveGuard = () => (to, from, next) => {
  const $tabs = getCurrentTabs();
  if (!$tabs) {
    next();
    return;
  }
  const fromId = $tabs.getRouteKey(from);
  const toId = $tabs.getRouteKey(to);
  const {
    $alive
  } = $tabs;
  const fromCache = $alive && $alive.cache[fromId];
  const {
    alivePath
  } = $alive && $alive.cache[toId] || emptyObj;
  const matched = $tabs.matchRoute(to);
  let id, type;
  if (alivePath && alivePath !== matched.alivePath) {
    // 页签地址被替换：to 存在缓存但缓存路由不一致
    type = 'replace';
    id = toId;
  } else if ($alive && $alive.basePath !== matched.basePath) {
    // 离开页签组件：to 不在当前页签组件路由下
    type = 'leave';
    id = $tabs.activeTabId;
  } else if (!fromCache && fromId !== toId) {
    // 当前组件未缓存时离开页签
    type = 'leave';
    id = $tabs.activeTabId;
  }
  if (type) {
    $tabs.leavePage(id, type).then(next).catch(() => next(false));
  } else {
    next();
  }
};

// 页面离开
/* harmony default export */ var pageLeave = ({
  created() {
    const {
      $router
    } = this;
    if ($router._RouterTabInit) return;

    // 初始化路由导航守卫
    $router.beforeEach(leaveGuard());
    $router._RouterTabInit = true;
  },
  methods: {
    // 页面离开 Promise
    async leavePage(id, type) {
      const tab = this.items.find(item => item.id === id); // 当前页签
      const vm = this.$alive && this.$alive.getPageVm(id) || (this.activeTabId === id ? getAlivePage(id) : null);
      if (!vm || !tab) return;
      const pageLeave = getComponentOptions(vm).beforePageLeave;
      if (typeof pageLeave === 'function') {
        // 页签关闭前
        return pageLeave.bind(vm)(tab, type);
      }
    }
  }
});
;// ./lib/mixins/scroll.js
const debounceMethod = (fn, delay = 200) => {
  let timeout = null;
  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, rest);
    }, delay);
  };
};

// 页签滚动
/* harmony default export */ var mixins_scroll = ({
  watch: {
    activeTabId: {
      async handler() {
        if (!this.$el) return;

        // 激活页签时，如果当前页签不在可视区域，则滚动显示页签
        await this.$nextTick();
        this.adjust();
      },
      immediate: true
    }
  },
  mounted() {
    // 浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.adjust);
  },
  unmounted() {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.adjust);
  },
  methods: {
    // 调整页签滚动，保证当前页签在可视区域
    adjust: debounceMethod(function () {
      if (!this.$el) return;
      const {
        scroll
      } = this.$refs;
      const cur = this.$el.querySelector('.router-tab__item.is-active');
      if (scroll && cur && !scroll.isInView(cur)) scroll.scrollIntoView(cur);

      // 关闭右键菜单
      this.hideContextmenu();
    }),
    // 页签过渡
    onTabTrans() {
      this.adjust();
    }
  }
});
;// ./lib/mixins/restore.js
// 页签刷新后还原
/* harmony default export */ var restore = ({
  computed: {
    // 刷新还原存储 key
    restoreKey() {
      const {
        restore,
        basePath
      } = this;
      if (!restore || typeof sessionStorage === 'undefined') return '';
      let key = `RouterTab:restore:${basePath}`;
      typeof restore === 'string' && (key += `:${restore}`);
      return key;
    }
  },
  mounted() {
    // 页面重载前保存页签数据
    window.addEventListener('beforeunload', this.saveTabs);
  },
  unmounted() {
    window.removeEventListener('beforeunload', this.saveTabs);
  },
  watch: {
    // 监听 restoreKey 变化自动还原页签
    restoreKey() {
      if (this.restoreWatch) {
        const {
          activeTab
        } = this;
        this.initTabs();
        if (!this.activeTab) {
          this.items.push(activeTab);
        }
      }
    }
  },
  methods: {
    // 保存页签数据
    saveTabs() {
      this.restoreKey && sessionStorage.setItem(this.restoreKey, JSON.stringify(this.items));
    },
    // 清除页签缓存数据
    clearTabsStore() {
      this.restoreKey && sessionStorage.removeItem(this.restoreKey);
    },
    // 从缓存读取页签
    restoreTabs() {
      if (!this.restoreKey) return false;
      let tabs = sessionStorage.getItem(this.restoreKey);
      let hasStore = false;
      try {
        tabs = JSON.parse(tabs);
        if (Array.isArray(tabs) && tabs.length) {
          hasStore = true;
          this.presetTabs(tabs);
        }
      } catch (e) {}
      return hasStore;
    }
  }
});
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/RouterAlive.vue?vue&type=template&id=45d29035

const RouterAlivevue_type_template_id_45d29035_hoisted_1 = {
  class: "router-alive"
};
function RouterAlivevue_type_template_id_45d29035_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_alive_page = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("router-alive-page");
  const _component_router_view = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("router-view");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", RouterAlivevue_type_template_id_45d29035_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_view, null, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(({
      Component
    }) => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Transition, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)($options.pageTrans, {
      appear: "",
      onAfterEnter: $options.onTrans,
      onAfterLeave: $options.onTrans
    }), {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.KeepAlive, {
        ref: "alive",
        max: $options.keepAliveMax
      }, [Component && _ctx.alive && !$data.onRefresh ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_router_alive_page, {
        key: _ctx.key,
        component: Component,
        "cache-key": _ctx.key,
        "alive-path": _ctx.alivePath,
        "full-path": _ctx.$route.fullPath,
        "page-class": $props.pageClass,
        cached: "",
        onPageHook: $options.onPageHook,
        onPageLoaded: $options.onPageLoaded
      }, null, 8, ["component", "cache-key", "alive-path", "full-path", "page-class", "onPageHook", "onPageLoaded"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 1032, ["max"]))]),
      _: 2
    }, 1040, ["onAfterEnter", "onAfterLeave"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Transition, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)($options.pageTrans, {
      appear: "",
      onAfterEnter: $options.onTrans,
      onAfterLeave: $options.onTrans
    }), {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [Component && !_ctx.alive && !$data.onRefresh ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_router_alive_page, {
        key: _ctx.key,
        component: Component,
        "cache-key": _ctx.key,
        "alive-path": _ctx.alivePath,
        "full-path": _ctx.$route.fullPath,
        "page-class": $props.pageClass,
        onPageLoaded: $options.onPageLoaded
      }, null, 8, ["component", "cache-key", "alive-path", "full-path", "page-class", "onPageLoaded"])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)]),
      _: 2
    }, 1040, ["onAfterEnter", "onAfterLeave"])]),
    _: 1
  })]);
}
;// ./lib/components/RouterAlive.vue?vue&type=template&id=45d29035

;// ./node_modules/vue-router/dist/devtools-EWN81iOl.mjs
/* unused harmony import specifier */ var onUnmounted;
/* unused harmony import specifier */ var onDeactivated;
/* unused harmony import specifier */ var onActivated;
/* unused harmony import specifier */ var inject;
/* unused harmony import specifier */ var watch;
/* unused harmony import specifier */ var setupDevtoolsPlugin;
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */



//#region src/utils/env.ts
const isBrowser = typeof document !== "undefined";

//#endregion
//#region src/utils/index.ts
/**
* Identity function that returns the value as is.
*
* @param v - the value to return
*
* @internal
*/
const identityFn = (v) => v;
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
const devtools_EWN81iOl_assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
const noop = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
const isArray = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}

//#endregion
//#region src/warning.ts
function warn$1(msg) {
	const args = Array.from(arguments).slice(1);
	console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}

//#endregion
//#region src/encoding.ts
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {
		 false && 0;
	}
	return "" + text;
}

//#endregion
//#region src/location.ts
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery$1, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery$1(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
function NEW_stringifyURL(stringifyQuery$1, path, query, hash = "") {
	const searchText = stringifyQuery$1(query);
	return path + (searchText && "?") + searchText + encodeHash(hash);
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery$1, location) {
	const query = location.query ? stringifyQuery$1(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
*
* @param pathname - location.pathname
* @param base - base to strip off
*/
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a?.valueOf() === b?.valueOf();
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (false) // removed by dead control flow
{}
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
const START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};

//#endregion
//#region src/history/common.ts
let NavigationType = /* @__PURE__ */ function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
	return NavigationType$1;
}({});
let NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
	return NavigationDirection$1;
}({});
/**
* Starting location for Histories
*/
const START = "";
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}

//#endregion
//#region src/scrollBehavior.ts
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
const computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		/**
		* `id`s can accept pretty much any characters, including CSS combinators
		* like `>` or `~`. It's still possible to retrieve elements using
		* `document.getElementById('~')` but it needs to be escaped when using
		* `document.querySelector('#\\~')` for it to be valid. The only
		* requirements for `id`s are them to be unique on the page and to not be
		* empty (`id=""`). Because of that, when passing an id selector, it should
		* be properly escaped for it to work with `querySelector`. We could check
		* for the id selector to be simple (no CSS combinators `+ >~`) but that
		* would make things inconsistent since they are valid characters for an
		* `id` but would need to be escaped when using `querySelector`, breaking
		* their usage and ending up in no selector returned. Selectors need to be
		* escaped:
		*
		* - `#1-thing` becomes `#\31 -thing`
		* - `#with~symbols` becomes `#with\\~symbols`
		*
		* - More information about  the topic can be found at
		*   https://mathiasbynens.be/notes/html5-id-class.
		* - Practical example: https://mathiasbynens.be/demo/html5-id
		*/
		if (false) // removed by dead control flow
{}
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) {
			 false && 0;
			return;
		}
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* ScrollBehavior instance used by the router to compute and restore the scroll
* position when navigating.
*/

//#endregion
//#region src/types/typeGuards.ts
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}

//#endregion
//#region src/errors.ts
/**
* Flags so we can combine them when checking for multiple errors. This is the internal version of
* {@link NavigationFailureType}.
*
* @internal
*/
let ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
	ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes$1;
}({});
const NavigationFailureSymbol = Symbol( false ? 0 : "");
/**
* Enumeration with all possible types for navigation failures. Can be passed to
* {@link isNavigationFailure} to check for specific failures.
*/
let NavigationFailureType = /* @__PURE__ */ function(NavigationFailureType$1) {
	/**
	* An aborted navigation is a navigation that failed because a navigation
	* guard returned `false` or called `next(false)`
	*/
	NavigationFailureType$1[NavigationFailureType$1["aborted"] = 4] = "aborted";
	/**
	* A cancelled navigation is a navigation that failed because a more recent
	* navigation finished started (not necessarily finished).
	*/
	NavigationFailureType$1[NavigationFailureType$1["cancelled"] = 8] = "cancelled";
	/**
	* A duplicated navigation is a navigation that failed because it was
	* initiated while already being at the exact same location.
	*/
	NavigationFailureType$1[NavigationFailureType$1["duplicated"] = 16] = "duplicated";
	return NavigationFailureType$1;
}({});
const ErrorTypeMessages = {
	[ErrorTypes.MATCHER_NOT_FOUND]({ location, currentLocation }) {
		return `No match for\n ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
	},
	[ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
		return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
		return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	},
	[ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
		return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	},
	[ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
		return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	}
};
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	if (false) // removed by dead control flow
{}
	else return devtools_EWN81iOl_assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = [
	"params",
	"query",
	"hash"
];
function stringifyRoute(to) {
	if (typeof to === "string") return to;
	if (to.path != null) return to.path;
	const location = {};
	for (const key of propertiesToLog) if (key in to) location[key] = to[key];
	return JSON.stringify(location, null, 2);
}

//#endregion
//#region src/query.ts
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}

//#endregion
//#region src/injectionSymbols.ts
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
const matchedRouteKey = Symbol( false ? 0 : "");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
const viewDepthKey = Symbol( false ? 0 : "");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
const routerKey = Symbol( false ? 0 : "");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
const routeLocationKey = Symbol( false ? 0 : "");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
const routerViewLocationKey = Symbol( false ? 0 : "");

//#endregion
//#region src/utils/callbacks.ts
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}

//#endregion
//#region src/navigationGuards.ts
function registerGuard(record, name, guard) {
	const removeFromList = () => {
		record[name].delete(guard);
	};
	onUnmounted(removeFromList);
	onDeactivated(removeFromList);
	onActivated(() => {
		record[name].add(guard);
	});
	record[name].add(guard);
}
/**
* Add a navigation guard that triggers whenever the component for the current
* location is about to be left. Similar to {@link beforeRouteLeave} but can be
* used in any component. The guard is removed when the component is unmounted.
*
* @param leaveGuard - {@link NavigationGuard}
*/
function onBeforeRouteLeave(leaveGuard) {
	if (false) // removed by dead control flow
{}
	const activeRecord = inject(matchedRouteKey, {}).value;
	if (!activeRecord) {
		 false && 0;
		return;
	}
	registerGuard(activeRecord, "leaveGuards", leaveGuard);
}
/**
* Add a navigation guard that triggers whenever the current location is about
* to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
* component. The guard is removed when the component is unmounted.
*
* @param updateGuard - {@link NavigationGuard}
*/
function onBeforeRouteUpdate(updateGuard) {
	if (false) // removed by dead control flow
{}
	const activeRecord = inject(matchedRouteKey, {}).value;
	if (!activeRecord) {
		 false && 0;
		return;
	}
	registerGuard(activeRecord, "updateGuards", updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from,  false ? 0 : next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		if (false) // removed by dead control flow
{}
		guardCall.catch((err) => reject(err));
	});
}
function canOnlyBeCalledOnce(next, to, from) {
	let called = 0;
	return function() {
		if (called++ === 1) warn$1(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
		next._called = true;
		if (called === 1) next.apply(null, arguments);
	};
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) {
		if (false) // removed by dead control flow
{}
		for (const name in record.components) {
			let rawComponent = record.components[name];
			if (false) // removed by dead control flow
{}
			if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
			if (isRouteComponent(rawComponent)) {
				const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
				guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
			} else {
				let componentPromise = rawComponent();
				if (false) // removed by dead control flow
{}
				guards.push(() => componentPromise.then((resolved) => {
					if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
					const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
					record.mods[name] = resolved;
					record.components[name] = resolvedComponent;
					const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
					return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
				}));
			}
		}
	}
	return guards;
}
/**
* Ensures a route is loaded, so it can be passed as o prop to `<RouterView>`.
*
* @param route - resolved route to load
*/
function loadRouteLocation(route) {
	return route.matched.every((record) => record.redirect) ? Promise.reject(/* @__PURE__ */ new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record) => record.components && Promise.all(Object.keys(record.components).reduce((promises, name) => {
		const rawComponent = record.components[name];
		if (typeof rawComponent === "function" && !("displayName" in rawComponent)) promises.push(rawComponent().then((resolved) => {
			if (!resolved) return Promise.reject(/* @__PURE__ */ new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
			const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
			record.mods[name] = resolved;
			record.components[name] = resolvedComponent;
		}));
		return promises;
	}, [])))).then(() => route);
}
/**
* Split the leaving, updating, and entering records.
* @internal
*
* @param  to - Location we are navigating to
* @param from - Location we are navigating from
*/
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}

//#endregion
//#region src/devtools.ts
/**
* Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
*
* @param routeLocation - routeLocation to format
* @param tooltip - optional tooltip
* @returns a copy of the routeLocation
*/
function formatRouteLocation(routeLocation, tooltip) {
	const copy = devtools_EWN81iOl_assign({}, routeLocation, { matched: routeLocation.matched.map((matched) => omit(matched, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: true,
		display: routeLocation.fullPath,
		tooltip,
		value: copy
	} };
}
function formatDisplay(display) {
	return { _custom: { display } };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
	if (router.__hasDevtools) return;
	router.__hasDevtools = true;
	const id = routerId++;
	setupDevtoolsPlugin({
		id: "org.vuejs.router" + (id ? "." + id : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app
	}, (api) => {
		if (typeof api.now !== "function") warn$1("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
		api.on.inspectComponent((payload, ctx) => {
			if (payload.instanceData) payload.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: false,
				value: formatRouteLocation(router.currentRoute.value, "Current Route")
			});
		});
		api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
			if (componentInstance.__vrv_devtools) {
				const info = componentInstance.__vrv_devtools;
				node.tags.push({
					label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: PINK_500
				});
			}
			if (isArray(componentInstance.__vrl_devtools)) {
				componentInstance.__devtoolsApi = api;
				componentInstance.__vrl_devtools.forEach((devtoolsData) => {
					let label = devtoolsData.route.path;
					let backgroundColor = ORANGE_400;
					let tooltip = "";
					let textColor = 0;
					if (devtoolsData.error) {
						label = devtoolsData.error;
						backgroundColor = RED_100;
						textColor = RED_700;
					} else if (devtoolsData.isExactActive) {
						backgroundColor = LIME_500;
						tooltip = "This is exactly active";
					} else if (devtoolsData.isActive) {
						backgroundColor = BLUE_600;
						tooltip = "This link is active";
					}
					node.tags.push({
						label,
						textColor,
						tooltip,
						backgroundColor
					});
				});
			}
		});
		watch(router.currentRoute, () => {
			refreshRoutesView();
			api.notifyComponentUpdate();
			api.sendInspectorTree(routerInspectorId);
			api.sendInspectorState(routerInspectorId);
		});
		const navigationsLayerId = "router:navigations:" + id;
		api.addTimelineLayer({
			id: navigationsLayerId,
			label: `Router${id ? " " + id : ""} Navigations`,
			color: 4237508
		});
		router.onError((error, to) => {
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "Error during Navigation",
					subtitle: to.fullPath,
					logType: "error",
					time: api.now(),
					data: { error },
					groupId: to.meta.__navigationId
				}
			});
		});
		let navigationId = 0;
		router.beforeEach((to, from) => {
			const data = {
				guard: formatDisplay("beforeEach"),
				from: formatRouteLocation(from, "Current Location during this navigation"),
				to: formatRouteLocation(to, "Target location")
			};
			Object.defineProperty(to.meta, "__navigationId", { value: navigationId++ });
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					time: api.now(),
					title: "Start of navigation",
					subtitle: to.fullPath,
					data,
					groupId: to.meta.__navigationId
				}
			});
		});
		router.afterEach((to, from, failure) => {
			const data = { guard: formatDisplay("afterEach") };
			if (failure) {
				data.failure = { _custom: {
					type: Error,
					readOnly: true,
					display: failure ? failure.message : "",
					tooltip: "Navigation Failure",
					value: failure
				} };
				data.status = formatDisplay("❌");
			} else data.status = formatDisplay("✅");
			data.from = formatRouteLocation(from, "Current Location during this navigation");
			data.to = formatRouteLocation(to, "Target location");
			api.addTimelineEvent({
				layerId: navigationsLayerId,
				event: {
					title: "End of navigation",
					subtitle: to.fullPath,
					time: api.now(),
					data,
					logType: failure ? "warning" : "default",
					groupId: to.meta.__navigationId
				}
			});
		});
		/**
		* Inspector of Existing routes
		*/
		const routerInspectorId = "router-inspector:" + id;
		api.addInspector({
			id: routerInspectorId,
			label: "Routes" + (id ? " " + id : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function refreshRoutesView() {
			if (!activeRoutesPayload) return;
			const payload = activeRoutesPayload;
			let routes = matcher.getRoutes().filter((route) => !route.parent || !route.parent.record.components);
			routes.forEach(resetMatchStateOnRouteRecord);
			if (payload.filter) routes = routes.filter((route) => isRouteMatching(route, payload.filter.toLowerCase()));
			routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
			payload.rootNodes = routes.map(formatRouteRecordForInspector);
		}
		let activeRoutesPayload;
		api.on.getInspectorTree((payload) => {
			activeRoutesPayload = payload;
			if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
		});
		/**
		* Display information about the currently selected route record
		*/
		api.on.getInspectorState((payload) => {
			if (payload.app === app && payload.inspectorId === routerInspectorId) {
				const route = matcher.getRoutes().find((route$1) => route$1.record.__vd_id === payload.nodeId);
				if (route) payload.state = { options: formatRouteRecordMatcherForStateInspector(route) };
			}
		});
		api.sendInspectorTree(routerInspectorId);
		api.sendInspectorState(routerInspectorId);
	});
}
function modifierForKey(key) {
	if (key.optional) return key.repeatable ? "*" : "?";
	else return key.repeatable ? "+" : "";
}
function formatRouteRecordMatcherForStateInspector(route) {
	const { record } = route;
	const fields = [{
		editable: false,
		key: "path",
		value: record.path
	}];
	if (record.name != null) fields.push({
		editable: false,
		key: "name",
		value: record.name
	});
	fields.push({
		editable: false,
		key: "regexp",
		value: route.re
	});
	if (route.keys.length) fields.push({
		editable: false,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
			tooltip: "Param keys",
			value: route.keys
		} }
	});
	if (record.redirect != null) fields.push({
		editable: false,
		key: "redirect",
		value: record.redirect
	});
	if (route.alias.length) fields.push({
		editable: false,
		key: "aliases",
		value: route.alias.map((alias) => alias.record.path)
	});
	if (Object.keys(route.record.meta).length) fields.push({
		editable: false,
		key: "meta",
		value: route.record.meta
	});
	fields.push({
		key: "score",
		editable: false,
		value: { _custom: {
			type: null,
			readOnly: true,
			display: route.score.map((score) => score.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: route.score
		} }
	});
	return fields;
}
/**
* Extracted from tailwind palette
*/
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
const RED_100 = 16704226;
const RED_700 = 12131356;
function formatRouteRecordForInspector(route) {
	const tags = [];
	const { record } = route;
	if (record.name != null) tags.push({
		label: String(record.name),
		textColor: 0,
		backgroundColor: CYAN_400
	});
	if (record.aliasOf) tags.push({
		label: "alias",
		textColor: 0,
		backgroundColor: ORANGE_400
	});
	if (route.__vd_match) tags.push({
		label: "matches",
		textColor: 0,
		backgroundColor: PINK_500
	});
	if (route.__vd_exactActive) tags.push({
		label: "exact",
		textColor: 0,
		backgroundColor: LIME_500
	});
	if (route.__vd_active) tags.push({
		label: "active",
		textColor: 0,
		backgroundColor: BLUE_600
	});
	if (record.redirect) tags.push({
		label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: DARK
	});
	let id = record.__vd_id;
	if (id == null) {
		id = String(routeRecordId++);
		record.__vd_id = id;
	}
	return {
		id,
		label: record.path,
		tags,
		children: route.children.map(formatRouteRecordForInspector)
	};
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
	const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
	route.__vd_exactActive = route.__vd_active = isExactActive;
	if (!isExactActive) route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
	route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
	route.__vd_match = false;
	route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
	const found = String(route.re).match(EXTRACT_REGEXP_RE);
	route.__vd_match = false;
	if (!found || found.length < 3) return false;
	if (new RegExp(found[1].replace(/\$$/, ""), found[2]).test(filter)) {
		route.children.forEach((child) => isRouteMatching(child, filter));
		if (route.record.path !== "/" || filter === "/") {
			route.__vd_match = route.re.test(filter);
			return true;
		}
		return false;
	}
	const path = route.record.path.toLowerCase();
	const decodedPath = decode(path);
	if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter))) return true;
	if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
	if (route.record.name && String(route.record.name).includes(filter)) return true;
	return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
	const ret = {};
	for (const key in obj) if (!keys.includes(key)) ret[key] = obj[key];
	return ret;
}

//#endregion

;// ./lib/config/rules.js


// 内置规则
/* harmony default export */ var rules = ({
  // 地址，params 不一致则独立缓存
  path: route => route.path,
  // 完整地址 (忽略 hash)，params 或 query 不一致则独立缓存
  fullpath: route => prunePath(route.fullPath)
});
;// ./lib/util/RouteMatch.js



// 解析路由 key
function parseRouteKey($route, route, key) {
  const defaultKey = route.path;
  if (!key) return defaultKey;
  if (typeof key === 'string') {
    // 规则
    const rule = rules[key.toLowerCase()];
    return rule ? rule($route) : key;
  }
  if (typeof key === 'function') {
    return parseRouteKey($route, route, key($route));
  }
  return defaultKey;
}

// 解析匹配的路径
function parsePath(path, params) {
  return Object.entries(params).reduce((p, [key, val]) => {
    return p.replace(':' + key, val);
  }, path);
}

// 匹配路由数据
class RouteMatch {
  constructor(vm, $route) {
    this.vm = vm;
    this.$route = $route;
  }

  // 设置路由
  set $route($route) {
    if ($route && !$route.matched) {
      const {
        $router
      } = this.vm;
      $route = resolveRoute($router, $route);
    }
    this._$route = $route;
  }

  // 获取路由
  get $route() {
    return this._$route || this.vm.$route;
  }

  // 页面路由索引
  get routeIndex() {
    return this.vm.routeIndex;
  }

  // 下级路由
  get route() {
    return this.$route.matched[this.routeIndex];
  }

  // 根路径
  get basePath() {
    if (this.routeIndex < 1) return '/';
    const baseRoute = this.$route.matched[this.routeIndex - 1] || {};
    const {
      path
    } = baseRoute;
    return path && parsePath(path, this.$route.params) || '/';
  }

  // 缓存路径，用于判断是否复用
  get alivePath() {
    const {
      $route
    } = this;
    // 嵌套路由
    if (this.nest) {
      return parsePath(this.route.path, $route.params);
    }
    return prunePath($route.fullPath);
  }

  // 路由元
  get meta() {
    const {
      route,
      vm: {
        $nuxt
      }
    } = this;

    // Nuxt 优先从页面配置获取 meta
    if ($nuxt) {
      try {
        const {
          meta: metas = []
        } = $nuxt.context.route;
        const meta = metas[this.routeIndex];
        if (meta && Object.keys(meta).length) {
          return meta;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return route && route.meta || {};
  }

  // 是否嵌套路由
  get nest() {
    return this.$route.matched.length > this.routeIndex + 1;
  }

  // 路由 key
  get key() {
    if (!this.route) return '';
    return parseRouteKey(this.$route, this.route, this.meta.key);
  }

  // 是否缓存
  get alive() {
    const {
      keepAlive
    } = this.meta;
    return typeof keepAlive === 'boolean' ? keepAlive : this.vm.keepAlive;
  }

  // 是否复用组件
  get reusable() {
    const {
      reuse
    } = this.meta;
    return typeof reuse === 'boolean' ? reuse : this.vm.reuse;
  }
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/RouterAlive.vue?vue&type=script&lang=js




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
    this.emitHook('created');
  },
  mounted() {
    this.emitHook('mounted');
  },
  activated() {
    this.emitHook('activated');
  },
  deactivated() {
    this.emitHook('deactivated');
  },
  unmounted() {
    this.emitHook('unmounted');
  },
  methods: {
    getPageVm() {
      const page = this.$refs.page;
      return Array.isArray(page) ? page[0] : page;
    },
    emitHook(name) {
      if (!this.cached) return;
      this.$emit('page-hook', {
        name,
        key: this.cacheKey,
        alivePath: this.alivePath,
        fullPath: this.fullPath,
        vm: this.getPageVm()
      });
    },
    onPageLoaded() {
      this.$emit('page-loaded');
    }
  },
  render() {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(this.component, {
      ref: 'page',
      class: this.pageClass,
      onPageLoaded: this.onPageLoaded
    });
  }
};

/**
 * 路由缓存控件
 */
/* harmony default export */ var RouterAlivevue_type_script_lang_js = ({
  name: 'RouterAlive',
  components: {
    RouterAlivePage
  },
  provide() {
    // 提供实例给子组件调用
    return {
      RouterAlive: this
    };
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
    const parentViewDepth = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.inject)(viewDepthKey, 0);
    return {
      routeIndex: parentViewDepth + 1
    };
  },
  data() {
    // 缓存记录
    this.cache = {};
    return {
      // 路由匹配信息
      routeMatch: new RouteMatch(this),
      // 是否正在更新
      onRefresh: false
    };
  },
  computed: {
    // 从 this.routeMatch 提取计算属性
    ...mapGetters('routeMatch', ['key', 'meta', 'nest', 'alive', 'reusable', 'basePath', 'alivePath']),
    keepAliveMax() {
      return this.max > 0 ? this.max : undefined;
    },
    // 页面过渡
    pageTrans() {
      return getTransOpt(this.transition);
    }
  },
  watch: {
    // 监听路由
    $route: {
      handler($route, old) {
        // 组件就绪
        if (!old) this.$emit('ready', this);
        if (!$route.matched.length) return;
        const {
          key,
          alive,
          reusable,
          alivePath,
          nest
        } = this;
        const cacheItem = this.cache[key] || {};
        let {
          alivePath: cacheAlivePath,
          fullPath: cacheFullPath,
          vm: cacheVM
        } = cacheItem;

        // 不复用且路由改变则清理组件缓存
        if (cacheAlivePath && !reusable && cacheAlivePath !== alivePath) {
          cacheAlivePath = '';
          this.refresh(key);
        }

        // 嵌套路由，地址跟缓存不一致
        if (nest && cacheVM && $route.fullPath !== cacheFullPath) {
          const oldKey = this.matchRoute(old).key;
          if (oldKey !== key) {
            this.nestForceUpdate = true;
          }
        }

        // 类型：更新或者新建缓存
        const type = cacheAlivePath ? 'update' : 'create';
        this.$emit('change', type, this.routeMatch);

        // 更新缓存路径
        if (alive) {
          cacheItem.fullPath = $route.fullPath;
        }
      },
      immediate: true
    }
  },
  // 销毁后清理
  unmounted() {
    this.cache = null;
    this.routeMatch = null;
    this._match = null;
  },
  methods: {
    // 移除缓存
    remove(key = this.key) {
      const cacheItem = this.cache[key];

      // 清理 RouterAlive 缓存记录
      if (cacheItem) {
        cacheItem.vm = null;
        this.cache[key] = null;
      }

      // 清理 keepAlive 缓存记录
      this.pruneKeepAliveCache(key);
    },
    // 刷新
    refresh(key = this.key) {
      this.remove(key);

      // 非当前缓存，直接移除
      if (key === this.key) {
        this.reload();
      }
    },
    // 重新加载
    reload() {
      if (this.onRefresh) return;
      this.onRefresh = true;
    },
    getPageVm(key = this.key) {
      const cacheItem = this.cache && this.cache[key];
      return cacheItem && cacheItem.vm || null;
    },
    pruneKeepAliveCache(key) {
      const keepAlive = this.$refs.alive;
      const keepAliveInstance = keepAlive && keepAlive.$;
      const cache = keepAliveInstance && keepAliveInstance.__v_cache;
      const prune = keepAliveInstance?.ctx?.pruneCacheEntry;
      if (!cache) return;
      if (typeof prune === 'function') {
        prune(key);
      } else if (typeof cache.delete === 'function') {
        cache.delete(key);
      }
    },
    // 缓存页面组件钩子
    onPageHook(payload) {
      const handler = this[`pageHook:${payload.name}`];
      if (typeof handler === 'function') handler(payload);
    },
    // 页面创建
    'pageHook:created'({
      key,
      alivePath,
      fullPath
    }) {
      this.cache[key] = {
        alivePath,
        fullPath
      };
    },
    // 页面挂载
    'pageHook:mounted'({
      key,
      vm
    }) {
      this.cache[key].vm = vm;

      // 重置初始滚动位置
      this.resetScrollPosition();
    },
    // 页面激活
    'pageHook:activated'({
      vm: pageVm
    }) {
      // 热重载更新
      if (this.checkHotReloading()) return;

      // 嵌套路由缓存导致页面不匹配时强制更新
      if (this.nestForceUpdate) {
        delete this.nestForceUpdate;
        pageVm && pageVm.$forceUpdate();
      }

      // 还原滚动位置
      this.restoreScrollPosition();
    },
    // 页面失活
    'pageHook:deactivated'() {
      if (this.checkHotReloading()) return;

      // 保存滚动位置
      this.saveScrollPosition();
    },
    // 页面销毁后清理 cache
    async 'pageHook:unmounted'({
      key,
      vm
    }) {
      await this.$nextTick();
      if (!this.cache) return;
      const cacheItem = this.cache[key];
      if (cacheItem && (!vm || cacheItem.vm === vm)) {
        this.cache[key] = null;
      }
    },
    // 页面过渡后结束刷新状态
    onTrans() {
      if (this.onRefresh) {
        this.onRefresh = false;
        this.$emit('change', 'create', this.routeMatch);
      }
    },
    // 匹配路由信息
    matchRoute($route) {
      const matched = this._match;

      // 当前路由
      if ($route === this.$route || $route.fullPath === this.$route.fullPath || $route === this.$route.fullPath) {
        return this.routeMatch;
      }
      if (matched) {
        matched.$route = $route;
        return matched;
      }
      return this._match = new RouteMatch(this, $route);
    },
    // 检测热重载
    checkHotReloading() {
      const pageVm = this.getPageVm();
      if (!pageVm) return false;
      const lastCid = pageVm._lastCtorId;
      const cid = pageVm._lastCtorId = getCtorId(pageVm);

      // 热重载更新
      if (lastCid && lastCid !== cid) {
        this.refresh();
        return true;
      }
      return false;
    },
    // 获取滚动元素
    getScroller(selector) {
      return selector.startsWith('$') ? document.querySelector(selector.replace(/^\$/, '')) : this.$el.querySelector(selector);
    },
    // 保存滚动位置
    saveScrollPosition() {
      const pageVm = this.getPageVm();
      if (!pageVm) return;
      // 页面内部配置的滚动元素
      let {
        pageScroller
      } = getComponentOptions(pageVm);
      if (typeof pageScroller === 'string' && pageScroller.length) {
        pageScroller = pageScroller.split(/\s?,\s?/);
      }
      if (!Array.isArray(pageScroller)) {
        pageScroller = [];
      }

      // 默认保存页面根节点位置
      pageScroller.push('.' + this.pageClass);

      // 添加全局的滚动元素配置
      // 组件外部选择器使用 $ 前缀区分
      if (this.pageScroller) {
        pageScroller.push('$' + this.pageScroller);
      }

      // 记录位置
      const position = pageScroller.reduce((pos, selector) => {
        const el = this.getScroller(selector);
        if (el) {
          pos[selector] = {
            left: el.scrollLeft,
            top: el.scrollTop
          };
        }
        return pos;
      }, {});
      pageVm._pageScrollPosition = position;
    },
    // 还原滚动位置
    restoreScrollPosition() {
      const pageVm = this.getPageVm();
      const position = pageVm?._pageScrollPosition;
      if (!position) return;
      Object.entries(position).forEach(([selector, pos]) => {
        const el = this.getScroller(selector);
        if (el) {
          el.scrollLeft = pos.left;
          el.scrollTop = pos.top;
        }
      });
    },
    // 重置全局滚动位置
    resetScrollPosition() {
      if (!this.pageScroller) return;
      const el = this.getScroller('$' + this.pageScroller);
      if (!el) return;
      el.scrollLeft = 0;
      el.scrollTop = 0;
    },
    // 页面数据加载成功
    async onPageLoaded() {
      await this.$nextTick();
      // 页面数据加载成功后还原滚动位置
      this.restoreScrollPosition();
    }
  }
});
;// ./lib/components/RouterAlive.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(621);
;// ./lib/components/RouterAlive.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(RouterAlivevue_type_script_lang_js, [['render',RouterAlivevue_type_template_id_45d29035_render]])

/* harmony default export */ var RouterAlive = (__exports__);
;// ./lib/components/TabItem.js



// 拖拽传输数据前缀
const TRANSFER_PREFIX = 'RouterTabDragSortIndex:';

// 排序拖拽数据
// 用以解决双核浏览器兼容模式下无法通过 dataTransfer.getData 获取数据
let dragSortData = null;

// 页签项
// @vue/component
/* harmony default export */ var TabItem = ({
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
      onDragSort: false,
      // 是否正在拖拽
      isDragOver: false // 是否拖拽经过
    };
  },
  computed: {
    // 从 this.data 提取计算属性
    ...mapGetters('data', ['id', 'to', 'icon', 'tabClass', 'target', 'href']),
    // class
    classList() {
      return ['router-tab__item', this.tabClass, {
        'is-active': this.$tabs.activeTabId === this.id,
        'is-closable': this.closable,
        'is-contextmenu': this.$tabs.contextData.id === this.id,
        'is-drag-over': this.isDragOver && !this.onDragSort
      }];
    },
    // 国际化
    i18nText() {
      return this.$tabs.i18nText;
    },
    // 未命名页签
    untitled() {
      return this.$tabs.langs.tab.untitled;
    },
    // 页签标题
    title() {
      return this.i18nText(this.data.title) || this.untitled;
    },
    // 页签提示
    tips() {
      return this.i18nText(this.data.tips || this.data.title) || this.untitled;
    },
    // 是否可关闭
    closable() {
      const {
        keepLastTab,
        items
      } = this.$tabs;
      return this.data.closable !== false && !(keepLastTab && items.length < 2);
    }
  },
  methods: {
    // 插槽默认内容
    slotDefault() {
      return [this.icon && (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', {
        class: ['router-tab__item-icon', this.icon]
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('span', {
        class: 'router-tab__item-title',
        title: this.tips
      }, this.title), this.closable && (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('i', {
        class: 'router-tab__item-close',
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          this.close();
        }
      })];
    },
    // 关闭当前页签
    close() {
      this.$tabs.closeTab(this.id);
    },
    // 拖拽
    onDragStart(e) {
      this.onDragSort = this.$tabs.onDragSort = true;
      dragSortData = TRANSFER_PREFIX + this.index;
      e.dataTransfer.setData('text', dragSortData);
      e.dataTransfer.effectAllowed = 'move';
    },
    // 拖拽悬浮
    onDragOver(e) {
      this.isDragOver = true;
      e.dataTransfer.dropEffect = 'move';
    },
    // 拖拽结束
    onDragEnd() {
      this.onDragSort = this.$tabs.onDragSort = false;
      dragSortData = null;
    },
    // 释放后排序
    onDrop(e) {
      const {
        items
      } = this.$tabs;
      const raw = e.dataTransfer.getData('text') || dragSortData;
      this.isDragOver = false;
      if (typeof raw !== 'string' || !raw.startsWith(TRANSFER_PREFIX)) return;
      const fromIndex = raw.replace(TRANSFER_PREFIX, '');
      const tab = items[fromIndex];
      items.splice(fromIndex, 1);
      items.splice(this.index, 0, tab);
    }
  },
  // 渲染组件
  // 使用 jsx render 模式替换 template，避免 Vue 2.5.22 版本不支持子组件使用父组件的 slot 导致出错。
  render() {
    const RouterLink = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)('RouterLink');
    const slot = this.$tabs.$slots.default || (() => this.slotDefault());
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(RouterLink, {
      custom: true,
      to: this.to
    }, {
      default: ({
        navigate
      }) => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)('li', {
          class: this.classList,
          draggable: this.$tabs.dragsort,
          onClick: navigate,
          onContextmenu: e => {
            e.preventDefault();
            this.$emit('contextmenu', e);
          },
          onDragstart: this.onDragStart,
          onDragend: this.onDragEnd,
          onDragover: e => {
            e.preventDefault();
            this.onDragOver(e);
          },
          onDragleave: e => {
            e.preventDefault();
            this.isDragOver = false;
          },
          onDrop: e => {
            e.preventDefault();
            e.stopPropagation();
            this.onDrop(e);
          },
          onMouseup: e => {
            if (e.button === 1 && this.closable) {
              this.close();
            }
          }
        }, slot(this));
      }
    });
  }
});
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/TabScroll.vue?vue&type=template&id=70362933

function TabScrollvue_type_template_id_70362933_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: "router-tab__scroll",
    onWheel: _cache[2] || (_cache[2] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => $options.onWheel && $options.onWheel(...args), ["prevent"])),
    onMouseenter: _cache[3] || (_cache[3] = (...args) => $options.update && $options.update(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    ref: "container",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["router-tab__scroll-container", {
      'is-mobile': $data.isMobile
    }]),
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.update && $options.update(...args))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default")], 34), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    ref: "bar",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["router-tab__scrollbar", {
      'is-dragging': $data.dragData
    }])
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    ref: "thumb",
    class: "router-tab__scrollbar-thumb",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      width: `${$options.thumbWidth}px`,
      transform: `translateX(${$options.thumbLeft}px`
    }),
    onMousedown: _cache[1] || (_cache[1] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => $options.onDragStart && $options.onDragStart(...args), ["prevent"]))
  }, null, 36)], 2), [[external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $options.hasScroller]])], 32);
}
;// ./lib/components/TabScroll.vue?vue&type=template&id=70362933

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/TabScroll.vue?vue&type=script&lang=js


// 滚动条
/* harmony default export */ var TabScrollvue_type_script_lang_js = ({
  name: 'TabScroll',
  props: {
    // 每次滚动距离
    space: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      isMobile: false,
      // 是否移动端

      scrollData: {
        clientWidth: 0,
        scrollWidth: 0,
        scrollLeft: 0
      },
      dragData: null
    };
  },
  computed: {
    // 是否拥有滚动条
    hasScroller() {
      return !this.isMobile && !this.$tabs.onDragSort && this.scrollData.scrollWidth > this.scrollData.clientWidth;
    },
    // 滑块宽度
    thumbWidth() {
      if (!this.hasScroller) return;
      const {
        clientWidth,
        scrollWidth
      } = this.scrollData;
      return clientWidth / scrollWidth * clientWidth;
    },
    // 滑块 left
    thumbLeft() {
      if (!this.hasScroller) return;

      // 拖拽滚动
      if (this.dragData) {
        return this.dragData.thumbLeft;
      }
      const {
        clientWidth,
        scrollWidth,
        scrollLeft
      } = this.scrollData;
      return (clientWidth - this.thumbWidth) * (scrollLeft / (scrollWidth - clientWidth));
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    // 更新滚动数据
    update() {
      const {
        container
      } = this.$refs;
      if (!container) return;
      const {
        clientWidth,
        scrollWidth,
        scrollLeft
      } = container;

      // 判断是否移动端
      // userAgent 中包含 mobile 字段，或者浏览器滚动条宽度为 0
      this.isMobile = /mobile/i.test(navigator.userAgent) || !getScrollbarWidth();
      Object.assign(this.scrollData, {
        clientWidth,
        scrollWidth,
        scrollLeft
      });
    },
    // 滚动到指定位置
    scrollTo(left, smooth = true) {
      scrollTo({
        wrap: this.$refs.container,
        left,
        smooth
      });
    },
    // 滚动到元素
    scrollIntoView(el) {
      scrollIntoView({
        el,
        wrap: this.$refs.container,
        inline: 'center'
      });
    },
    // 判断子节点是否完全在可视区域
    isInView(el) {
      const {
        container
      } = this.$refs;
      const offsetLeft = el.offsetLeft;
      const scrollLeft = container.scrollLeft;
      if (offsetLeft < scrollLeft || offsetLeft + el.clientWidth > scrollLeft + container.clientWidth) {
        return false;
      }
      return true;
    },
    // 页签鼠标滚动
    onWheel(e) {
      const now = +new Date();
      const enable = now - (this.lastWheel || 0) > 100;
      if (!enable) return;
      this.lastWheel = now;
      const {
        space
      } = this;
      const isWheelUp = e.deltaY < 0;
      this.scrollTo(this.$refs.container.scrollLeft + (isWheelUp ? -space : space));
    },
    // 拖拽
    onDragStart(e) {
      const {
        thumbLeft
      } = this;
      this.dragData = {
        startPageX: e.pageX,
        startScrollLeft: this.$refs.container.scrollLeft,
        startThumbLeft: thumbLeft,
        thumbLeft
      };
      document.addEventListener('mousemove', this.onDragMove);
      document.addEventListener('mouseup', this.onDragEnd);
    },
    // 拖拽移动
    onDragMove(e) {
      const {
        dragData,
        thumbWidth
      } = this;
      const {
        clientWidth,
        scrollWidth
      } = this.scrollData;
      let thumbLeft = dragData.startThumbLeft + e.pageX - dragData.startPageX;
      const maxThumbLeft = clientWidth - thumbWidth;
      if (thumbLeft < 0) {
        thumbLeft = 0;
      } else if (thumbLeft > maxThumbLeft) {
        thumbLeft = maxThumbLeft;
      }

      // 更新滑块定位
      dragData.thumbLeft = thumbLeft;

      // 滚动
      this.scrollTo(thumbLeft * (scrollWidth - clientWidth) / (clientWidth - thumbWidth), false);
      e.preventDefault();
    },
    // 拖拽结束
    onDragEnd(e) {
      this.dragData = null;
      document.removeEventListener('mousemove', this.onDragMove);
      document.removeEventListener('mouseup', this.onDragEnd);
      e.preventDefault();
    }
  }
});
;// ./lib/components/TabScroll.vue?vue&type=script&lang=js
 
;// ./lib/components/TabScroll.vue




;
const TabScroll_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(TabScrollvue_type_script_lang_js, [['render',TabScrollvue_type_template_id_70362933_render]])

/* harmony default export */ var TabScroll = (TabScroll_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/Contextmenu.vue?vue&type=template&id=e3520a3a

function Contextmenuvue_type_template_id_e3520a3a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tab_contextmenu_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("tab-contextmenu-item");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["router-tab__contextmenu", {
      'has-icon': $options.hasIcon
    }]),
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      left: `${$props.data.left}px`,
      top: `${$props.data.top}px`
    })
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.menuList, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_tab_contextmenu_item, {
      key: item.id,
      data: item
    }, null, 8, ["data"]);
  }), 128))], 6);
}
;// ./lib/components/Contextmenu.vue?vue&type=template&id=e3520a3a

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/ContextmenuItem.vue?vue&type=template&id=69b43a93

const ContextmenuItemvue_type_template_id_69b43a93_hoisted_1 = ["data-action", "disabled", "title"];
function ContextmenuItemvue_type_template_id_69b43a93_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("a", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["router-tab__contextmenu-item", _ctx.menuClass]),
    "data-action": _ctx.id,
    disabled: !_ctx.enable,
    title: _ctx.tips,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.enable && $props.data.handler($options.context))
  }, [_ctx.icon ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
    key: 0,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["router-tab__contextmenu-icon", _ctx.icon])
  }, null, 2)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(_ctx.title), 1)], 10, ContextmenuItemvue_type_template_id_69b43a93_hoisted_1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true);
}
;// ./lib/components/ContextmenuItem.vue?vue&type=template&id=69b43a93

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/ContextmenuItem.vue?vue&type=script&lang=js

/* harmony default export */ var ContextmenuItemvue_type_script_lang_js = ({
  name: 'ContextmenuItem',
  inject: ['$tabs'],
  props: {
    // 菜单数据
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 参数
    context() {
      const {
        $tabs,
        $parent: $menu
      } = this;
      const {
        target,
        data
      } = $menu;
      return {
        $tabs,
        $menu,
        target,
        data
      };
    },
    // 从 this.data 提取计算属性
    ...mapGetters('data', {
      id: '',
      // 菜单标题
      title() {
        return this.$tabs.langs.contextmenu[this.id];
      },
      icon: '',
      tips: '',
      class: {
        default: '',
        alias: 'menuClass'
      },
      visible: true,
      // 是否显示
      enable: true // 是否启用
    }, 'context')
  }
});
;// ./lib/components/ContextmenuItem.vue?vue&type=script&lang=js
 
;// ./lib/components/ContextmenuItem.vue




;
const ContextmenuItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ContextmenuItemvue_type_script_lang_js, [['render',ContextmenuItemvue_type_template_id_69b43a93_render]])

/* harmony default export */ var ContextmenuItem = (ContextmenuItem_exports_);
;// ./lib/config/contextmenu.js
// 菜单数据
const menuMap = {
  // 刷新
  refresh: {
    handler({
      data,
      $tabs
    }) {
      $tabs.refreshTab(data.id);
    }
  },
  // 刷新全部
  refreshAll: {
    handler({
      $tabs
    }) {
      $tabs.refreshAll();
    }
  },
  // 关闭
  close: {
    enable({
      target
    }) {
      return target.closable;
    },
    handler({
      data,
      $tabs
    }) {
      $tabs.closeTab(data.id);
    }
  },
  // 关闭左侧
  closeLefts: {
    enable({
      $menu
    }) {
      return $menu.lefts.length;
    },
    handler({
      $menu
    }) {
      $menu.closeMulti($menu.lefts);
    }
  },
  // 关闭右侧
  closeRights: {
    enable({
      $menu
    }) {
      return $menu.rights.length;
    },
    handler({
      $menu
    }) {
      $menu.closeMulti($menu.rights);
    }
  },
  // 关闭其他
  closeOthers: {
    enable({
      $menu
    }) {
      return $menu.others.length;
    },
    handler({
      $menu
    }) {
      $menu.closeMulti($menu.others);
    }
  }
};

// 遍历填充 id
Object.entries(menuMap).forEach(([id, item]) => item.id = id);
/* harmony default export */ var config_contextmenu = (menuMap);

// 默认菜单
const defaultMenu = ['refresh', 'refreshAll', 'close', 'closeLefts', 'closeRights', 'closeOthers'];
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/components/Contextmenu.vue?vue&type=script&lang=js


/* harmony default export */ var Contextmenuvue_type_script_lang_js = ({
  name: 'TabContextmenu',
  components: {
    TabContextmenuItem: ContextmenuItem
  },
  inject: ['$tabs'],
  props: {
    // 右键数据
    data: {
      type: [Boolean, Object]
    },
    // 菜单配置
    menu: {
      type: Array,
      default: () => defaultMenu
    }
  },
  computed: {
    // 激活菜单的页签
    target() {
      return this.tabMap[this.data.id];
    },
    // 菜单选项
    menuList() {
      return this.menu.map(item => {
        if (typeof item === 'string') {
          // 内置菜单
          return config_contextmenu[item];
        } else if (item && item.id) {
          // 扩展内置菜单
          let origin = config_contextmenu[item.id];
          return origin ? {
            ...origin,
            ...item
          } : item;
        }
      }).filter(item => item);
    },
    // 是否显示图标
    hasIcon() {
      return this.menuList.some(item => item.icon);
    },
    // 页签 map
    tabMap() {
      return this.$tabs.$refs.tab.reduce((map, item) => {
        map[item.id] = item;
        return map;
      }, {});
    },
    // 页签组件列表
    tabs() {
      return this.$tabs.items.map(item => this.tabMap[item.id]);
    },
    // 左侧可关闭的页签
    lefts() {
      return this.tabs.slice(0, this.data.index).filter(item => item.closable);
    },
    // 左侧可关闭的页签
    rights() {
      return this.tabs.slice(this.data.index + 1).filter(item => item.closable);
    },
    // 其他可关闭的页签
    others() {
      return this.tabs.filter(item => item.closable && this.data.id !== item.id);
    }
  },
  mounted() {
    this.adjust();
  },
  methods: {
    // 关闭多个页签
    async closeMulti(tabs) {
      for (let {
        id
      } of tabs) {
        try {
          await this.$tabs.removeTab(id);
        } catch (e) {}
      }

      // 当前页签如已关闭，则打开右键选中页签
      if (!this.$tabs.activeTab) {
        this.$router.replace(this.target.to);
      }
    },
    // 适应边界位置
    adjust() {
      const {
        clientWidth
      } = this.$el;
      const winWidth = window.innerWidth;
      if (this.data.left + clientWidth > winWidth) {
        this.data.left = winWidth - clientWidth - 5;
      }
    }
  }
});
;// ./lib/components/Contextmenu.vue?vue&type=script&lang=js
 
;// ./lib/components/Contextmenu.vue




;
const Contextmenu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Contextmenuvue_type_script_lang_js, [['render',Contextmenuvue_type_template_id_e3520a3a_render]])

/* harmony default export */ var Contextmenu = (Contextmenu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./lib/RouterTab.js?vue&type=script&lang=js&external
// 方法



// 功能模块混入








// 子组件





// RouterTab 组件
// @vue/component
const RouterTab = {
  name: 'RouterTab',
  components: {
    RouterAlive: RouterAlive,
    TabItem: TabItem,
    TabScroll: TabScroll,
    TabContextmenu: Contextmenu
  },
  mixins: [contextmenu, i18n, iframe, operate, pageLeave, mixins_scroll, restore],
  // 注入子组件
  provide() {
    return {
      $tabs: this
    };
  },
  props: {
    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },
    // 页面刷新后是否恢复页签
    restore: {
      type: [Boolean, String],
      default: false
    },
    // 是否监听 restoreKey 变化自动还原页签
    restoreWatch: {
      type: Boolean,
      default: false
    },
    // 页面滚动元素选择器
    pageScroller: {
      type: String,
      default: '.router-tab__container'
    },
    // 默认页面
    defaultPage: [String, Object],
    // 页签过渡效果
    tabTransition: {
      type: [String, Object],
      default: 'router-tab-zoom'
    },
    // 页面过渡效果
    pageTransition: {
      type: [String, Object],
      default: () => ({
        name: 'router-tab-swap',
        mode: 'out-in'
      })
    },
    /**
     * 自定义右键菜单
     * 1. 为 false 时禁用
     * 2. 为数组时可自定义右键菜单
     */
    contextmenu: {
      type: [Boolean, Array],
      default: true
    },
    // 是否支持页签拖拽排序
    dragsort: {
      type: Boolean,
      default: true
    },
    // 新页签插入位置，last 末尾，next 下一个
    append: {
      type: String,
      default: 'last'
    },
    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },
    // 默认是否缓存，可通过路由 meta.keepAlive 重置
    keepAlive: {
      type: Boolean,
      default: true
    },
    // 最大缓存数，0 则不限制
    maxAlive: {
      type: Number,
      default: 0
    },
    // 是否复用路由组件，可通过路由 meta.reuse 重置
    reuse: {
      type: Boolean,
      default: false
    },
    // 页签国际化配置 i18n (key, [args])
    i18n: Function,
    /**
     * 组件语言
     * - 为字符串时，可选值： 'zh'-中文，'en'-英文
     * - 为对象时，可设置自定义的语言
     * - 默认值：'auto'。根据浏览器语言自动识别组件语言。
     */
    lang: {
      type: [String, Object],
      default: 'auto'
    }
  },
  data() {
    return {
      items: [],
      // 页签项
      onDragSort: false,
      // 拖拽排序中
      aliveReady: false // RouterAlive 初始化
    };
  },
  computed: {
    // routerAlive
    $alive() {
      return this.aliveReady ? this.$refs.routerAlive : null;
    },
    // 当前激活的页签 id
    activeTabId() {
      return this.$alive ? this.$alive.key : null;
    },
    // 当前激活的页签索引
    activeTabIndex() {
      return this.items.findIndex(item => item.id === this.activeTabId);
    },
    // 当前激活的页签
    activeTab() {
      return this.items[this.activeTabIndex];
    },
    // 根路径
    basePath() {
      return this.$alive ? this.$alive.basePath : '/';
    },
    // 默认路径
    defaultPath() {
      return this.defaultPage || this.basePath || '/';
    },
    // 页签过渡
    tabTrans() {
      return getTransOpt(this.tabTransition);
    },
    // 页面过渡
    pageTrans() {
      return getTransOpt(this.pageTransition);
    }
  },
  created() {
    const globals = this.$?.appContext?.config?.globalProperties;
    if (globals) {
      globals.$tabs = this;
    }
    setCurrentTabs(this);
  },
  unmounted() {
    const globals = this.$?.appContext?.config?.globalProperties;
    if (globals?.$tabs === this) {
      globals.$tabs = null;
    }
    clearCurrentTabs(this);
  },
  methods: {
    // RouterAlive 组件就绪
    onAliveReady($alive) {
      // 获取 keepAlive 组件实例
      this.$refs.routerAlive = $alive;
      this.aliveReady = true;
      this.initTabs();
    },
    // 初始页签数据
    initTabs() {
      if (this.restoreTabs()) return;
      this.presetTabs();
    },
    // 预设页签
    presetTabs(tabs = this.tabs) {
      let ids = {};
      this.items = tabs.map(item => {
        item = typeof item === 'string' ? {
          to: item
        } : item || emptyObj;
        const matched = item.to && this.matchRoute(item.to);
        if (matched) {
          const tab = this.getRouteTab(matched);
          const id = tab.id;

          // 根据 id 去重
          if (!ids[id]) {
            // id 不允许更改
            delete item.id;

            // 初始 tab 数据
            return ids[id] = Object.assign(tab, item);
          }
        }
      }).filter(item => !!item);
    },
    // RouterAlive 缓存更新时同步更改页签
    onAliveChange(type, matched) {
      const {
        items,
        lastMatchedKey
      } = this;
      const {
        key
      } = matched;
      const matchIdx = items.findIndex(({
        id
      }) => id === key);
      const item = this.getRouteTab(matched);

      // 页签已存在
      if (matchIdx > -1) {
        if (type === 'create' ||
        // 创建缓存
        type === 'update' && items[matchIdx].to !== matched.$route.fullPath // 更新缓存且地址更改
        ) {
          // 替换原页签
          items.splice(matchIdx, 1, item);
        }
      } else {
        // 新增页签
        if (this.append === 'next' && lastMatchedKey !== undefined) {
          const lastIndex = this.items.findIndex(item => item.id === lastMatchedKey);
          items.splice(lastIndex + 1, 0, item);
        } else {
          items.push(item);
        }
      }

      // 上次缓存 key
      this.lastMatchedKey = key;
    },
    // 从 route 中获取 tab 配置
    getRouteTab({
      key,
      $route,
      meta
    }) {
      const tab = {
        ...meta
      };

      // 支持根据路由函数返回的页签属性
      const props = ['title', 'tips', 'icon', 'closable'];
      for (let i in tab) {
        if (props.includes(i)) {
          const val = tab[i];
          if (typeof val === 'function') {
            tab[i] = val($route);
          }
        }
      }
      return Object.assign(tab, {
        id: key,
        to: $route.fullPath
      });
    },
    // 重载路由视图
    async reload() {
      this.$alive.reload();
    },
    // 匹配路由信息
    matchRoute($route) {
      return this.$alive.matchRoute($route);
    },
    // 获取路由缓存 key
    getRouteKey(route = this.$route) {
      return this.matchRoute(route).key;
    },
    // 从路由地址匹配页签 id
    getIdByPath(path, match = true) {
      if (!path) return;
      const matched = this.matchRoute(path);
      const {
        key
      } = matched;
      if (match) {
        // 路由地址精确匹配页签
        const matchTab = this.items.find(({
          to
        }) => prunePath(to) === prunePath(matched.$route.fullPath));
        if (matchTab) {
          return key;
        }
      }
      return key;
    }
  }
};
/* harmony default export */ var RouterTabvue_type_script_lang_js_external = (RouterTab);
;// ./lib/RouterTab.js?vue&type=script&lang=js&external
 
;// ./lib/RouterTab.vue




;
const RouterTab_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(RouterTabvue_type_script_lang_js_external, [['render',render]])

/* harmony default export */ var lib_RouterTab = (RouterTab_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/page/Iframe.vue?vue&type=template&id=698f3ab0

const Iframevue_type_template_id_698f3ab0_hoisted_1 = {
  class: "router-tab-iframe-fake"
};
function Iframevue_type_template_id_698f3ab0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", Iframevue_type_template_id_698f3ab0_hoisted_1);
}
;// ./lib/page/Iframe.vue?vue&type=template&id=698f3ab0

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lib/page/Iframe.vue?vue&type=script&lang=js
// Iframe 路由元
const iframeMeta = {
  key: route => `iframe-${route.params.src}`,
  title: route => route.params.title,
  icon: route => route.params.icon
};

// Iframe 页签页面
/* harmony default export */ var Iframevue_type_script_lang_js = ({
  name: 'Iframe',
  inject: ['$tabs'],
  meta: iframeMeta,
  // Nuxt 页面路由元

  props: {
    src: String,
    title: String,
    icon: String
  },
  computed: {
    /**
     * 链接安全过滤，屏蔽以下方式 XSS 攻击，并返回空白页：
     * 1. `javascript:` 执行代码：`javascript:alert(1)`
     * 2. `data:` Base64 链接: `'data:text/html;base64,' + window.btoa('<script>alert(1)<\/script>')`
     */
    url() {
      let src = decodeURIComponent(this.src);
      if (/^(javascript|data):/i.test(src)) {
        return 'about:blank';
      }
      return src;
    }
  },
  async mounted() {
    let {
      url,
      $tabs
    } = this;
    let {
      iframes
    } = $tabs;
    if (!iframes.includes(url)) {
      iframes.push(url);
    }
    $tabs.currentIframe = url;
    await this.$nextTick();
    this.$tabs.iframeMounted(url);
  },
  activated() {
    this.$tabs.currentIframe = this.url;
  },
  deactivated() {
    this.$tabs.currentIframe = null;
  },
  // 组件销毁后移除 iframe
  unmounted() {
    let {
      url
    } = this;
    let {
      iframes
    } = this.$tabs;
    let index = iframes.indexOf(url);
    if (index > -1) {
      iframes.splice(index, 1);
    }
  }
});
;// ./lib/page/Iframe.vue?vue&type=script&lang=js
 
;// ./lib/page/Iframe.vue




;
const Iframe_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Iframevue_type_script_lang_js, [['render',Iframevue_type_template_id_698f3ab0_render]])

/* harmony default export */ var Iframe = (Iframe_exports_);
;// ./lib/config/routes.js


// 注入的路由
/* harmony default export */ var routes = ([{
  // iframe 路由
  path: 'iframe/:src/:title?/:icon?',
  component: Iframe,
  props: true,
  meta: iframeMeta
}]);

;// ./lib/mixins/routerPage.js



// 浏览器窗口关闭或者刷新
const beforeunload = ($tabs, tabId, beforePageLeave) => e => {
  if (!$tabs) return;
  const tab = $tabs.items.find(item => item.id === tabId);
  if (!tab) return;
  const msg = beforePageLeave(tab, 'unload');
  if (msg && typeof msg === 'string') {
    e.preventDefault();
    e.returnValue = msg;

    // 非当前页签则切换
    if ($tabs.activeTabId !== tabId) {
      $tabs.open(tab.to, false, false);
    }
    return msg;
  }
};

/** 更新页签 */
function updateTab(info) {
  const tab = typeof info === 'string' ? {
    title: info
  } : info;
  const {
    activeTab
  } = this.$tabs || emptyObj;
  if (tab && activeTab) {
    for (const key in tab) {
      if (!['id', 'to'].includes(key)) {
        activeTab[key] = tab[key];
      }
    }
  }
}
function syncAlivePage(vm) {
  const {
    $tabs
  } = vm;
  const tabId = $tabs && $tabs.activeTabId;
  const isRoutePage = vm.$el?.classList?.contains('router-tab-page');
  if (tabId && isRoutePage) {
    setAlivePage(tabId, vm);
  }
}

// 路由页面混入
/* harmony default export */ var routerPage = ({
  watch: {
    // 监听 routerTab 字段，更新页签信息
    routeTab: {
      handler(val) {
        if (!val) return;
        updateTab.call(this, val);
      },
      deep: true,
      immediate: true
    }
  },
  // 创建前记录缓存
  mounted() {
    const {
      $tabs
    } = this;
    const {
      beforePageLeave
    } = getComponentOptions(this) || emptyObj;

    // 页面离开确认
    if ($tabs && beforePageLeave) {
      window.addEventListener('beforeunload', this._beforeunload = beforeunload($tabs, $tabs.activeTabId, beforePageLeave.bind(this)));
    }
    syncAlivePage(this);
  },
  // 页签激活时更新页签
  activated() {
    this.routeTab && updateTab.call(this, this.routeTab);
    syncAlivePage(this);
  },
  unmounted() {
    const tabId = this.$tabs && this.$tabs.getRouteKey(this.$route);
    if (this._beforeunload) {
      window.removeEventListener('beforeunload', this._beforeunload);
    }
    clearAlivePage(tabId, this);
  }
});
;// ./lib/index.js







// 安装
lib_RouterTab.install = function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component(lib_RouterTab.name, lib_RouterTab);
  app.mixin(routerPage);
};
/* harmony default export */ var lib = (lib_RouterTab);

// 导出

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (lib);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-router-tab.common.js.map