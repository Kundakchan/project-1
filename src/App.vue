<template>
  <div class="app">
    <my-header></my-header>
    <router-view/>
    <footer>
      <my-footer></my-footer>
    </footer>
  </div>
</template>
<script>

import header from './components/header.vue'
import footer from './components/footer.vue'
export default {
  components: {
    'my-header': header,
    'my-footer': footer
  }
}
</script>

<style lang="scss" scoped>
  
</style>
