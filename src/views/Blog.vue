<template>
  <div class="container">
    <div class="el-1 center">
      <el-1/>
    </div>
    <div class="el-2 center">
      <el-2/>
    </div>
  </div>
</template>

<script>
import el1 from '../components/blog/blog.vue'
import el2 from '../components/blog/load.vue'
export default {
  components: {
    'el-1': el1,
    'el-2': el2
  }
}
</script>

<style lang="scss" scoped>
.center{
  display: flex;
  justify-content: center;
}
.el-1{
  background-color: #f6f6f6;
}
.el-2{
  background-color: white;
}
</style>

