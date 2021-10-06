<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { DApp } from '@/utils/wallet';
export default {
  name: 'App',
  data() {
    return {
      timer: null
    }
  },
  mounted() {
    this.handleGetLang();
    // 获取
    DApp.login((res) => {
      this.$store.dispatch('setAccount', res)
    })
    this.timer = setInterval(() => {
      
    }, 50)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    // 获取系统语言
    handleGetLang() {
      const lang = localStorage.getItem('language')
      if (lang) {
        return;
      }
      if (navigator.language) {
        this.language = navigator.language;
      } else {
        this.language = navigator.browserLanguage;
      }
      if (this.language !== 'zh-CN') {
        this.language = 'en';
      }
      this.$i18n.locale = this.language;
      this.$store.dispatch('setLanguage', this.language);
    },
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
