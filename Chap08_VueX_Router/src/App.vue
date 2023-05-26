<template>
  <div class="m-3">
    <h1>Chap08 Vuex Contact</h1>
    <HeaderLink></HeaderLink>
    <hr>

    <router-view/>
  </div>
</template>

<script>
import HeaderLink from './views/HeaderLink.vue'

export default {
  components: { HeaderLink }
}
</script>

<style scoped>
  a.router-link-active { color: orange; }
</style>
