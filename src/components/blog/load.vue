<template>
  <div class="box">
    <a href="#" class="content">load more post</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.box{
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.content{
  text-decoration: none;
  font-family: 'WorkSans';
  text-transform: uppercase;
  font-size: 14px;
  color: #1d1d1d;
  letter-spacing: 0.35px;
  font-family: 'WorkSans';
  &:hover{
    color: burlywood;
  }
}
</style>
