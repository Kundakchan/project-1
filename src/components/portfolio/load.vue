<template>
  <div class="box">
    <a class="load" href="#">load more work</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .box{
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .load{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    color: #1d1d1d;
    letter-spacing: 0.35px;
    font-family: 'WorkSans';
    padding: 10px 20px;
    &:hover{
      color: burlywood;
    }
  }
</style>
