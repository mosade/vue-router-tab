<template>
  <router-tab :i18n="i18n" :tabs="tabs" />
</template>

<script>
import { langState } from '../../plugins/lang'

export default {
  name: 'LangCustom',

  data() {
    return {
      tabs: [
        '/i18n/lang',
        { to: '/i18n/page/1', title: ['page', 1] },
        { to: '/i18n/page/2', title: ['page', 2] }
      ]
    }
  },

  computed: {
    lang() {
      return langState.langs[langState.currentLang] || langState.langs.en
    }
  },

  methods: {
    i18n(key, params) {
      let lang = this.lang[key]
      return lang
        ? lang.replace(/(\{(\d+)\})/g, (match, $0, $1) => params[$1] || '') // 替换国际化中的列表参数
        : key
    }
  }
}
</script>
