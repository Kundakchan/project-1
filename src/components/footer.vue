<template>
  <div class="container">
    <div class="content">
      <div class="icon">
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-telegram"></i>
        </a>
      </div>
      <p class="copirayt">2016-2017 © Design by Unvab. Code by nK</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container{
  background-color: darken(#f6f6f6, 10%);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 50px 0;
}
.content{
  display: grid;
  justify-items: center;
}
.icon{
  a{
    color: rgb(122, 122, 122);
    margin-left: 20px;
    &:hover{
      color: black;
    }
  }
}
.copirayt{
  color: rgb(122, 122, 122);
  font-family: 'WorkSans';
  line-height: 34px;
  text-align: center;
}
</style>
