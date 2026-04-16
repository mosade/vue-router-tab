import RouterTab from './RouterTab.vue'
import RouterAlive from './components/RouterAlive.vue'
import RouterTabRoutes, { Iframe } from './config/routes'
import routerPage from './mixins/routerPage'

import './scss/routerTab.scss'
import './scss/transition.scss'

// 安装
RouterTab.install = function install(app) {
  if (install.installed) return

  install.installed = true

  app.component(RouterTab.name, RouterTab)
  app.mixin(routerPage)
}

export default RouterTab

// 导出
export { RouterAlive, RouterTabRoutes, Iframe }
