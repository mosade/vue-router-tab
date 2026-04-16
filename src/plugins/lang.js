import { reactive } from 'vue'

export const langState = reactive({
  currentLang: 'en',
  langs: {
    en: {
      i18n: 'I18n Page',
      page: 'Page {0}'
    },

    zh: {
      i18n: '国际化页面',
      page: '页面 {0}'
    }
  }
})

export const langService = {
  set(lang) {
    if (langState.langs[lang]) {
      langState.currentLang = lang
    }
  },

  get() {
    return langState.currentLang
  },

  list() {
    return Object.keys(langState.langs)
  }
}

export default {
  install(app) {
    app.config.globalProperties.$lang = langService
  }
}
