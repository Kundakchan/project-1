<template>
  <div class="container">
    <div class="header">
      <blog-title></blog-title>
    </div>
    <div class="body">
      <blog-slide></blog-slide>
    </div>
  </div>
</template>

<script>
import title from './latestBlog/title.vue'
import slide from './latestBlog/slide.vue'
export default {
  components: {
    'blog-title': title,
    'blog-slide': slide
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1200px;
  width: 100%;
}
.header{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
