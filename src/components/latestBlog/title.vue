<template>
  <div class="container">
    <div class="box">
      <h2 class="title">{{ title }}</h2>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Latest Blog',
      content: 'Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.'
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
}
.box{
  text-align: center;
  max-width: 680px;
}
.title{
  font-size: 38px;
  line-height: 68px;
  font-family: 'PlayfairDisplay';
}
.content{
  font-family: 'WorkSans';
  font-size: 15px;
  line-height: 24px;
  color: #5f5f5f;
}
</style>
