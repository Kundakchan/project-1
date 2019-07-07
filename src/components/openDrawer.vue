<template>
  <div class="open-drawer">
    <div class="background-drawer">
      <div class="content">
        <div class="nav">
          <router-link class="link" v-for="(item, index) in nav" :key="index" :to="item.path">{{ item.name }}</router-link>
        </div>
        <div class="soc-network">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array
  }
}
</script>

<style lang="scss" scoped>
.open-drawer{
  width: 100%;
  height: 100vh;
}
.background-drawer{
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Elbrus_view_on_the_mountains.jpg/1024px-Elbrus_view_on_the_mountains.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.705);
  }
}
.content{
  position: absolute;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 15%;
  justify-items: center;
  align-items: center;
  .nav{
    display: grid;
    text-align: center;
    grid-row-gap: 20px;
    .link{
      text-decoration: none;
      color: darken(#fff, 10);
      font-size: 30px;
      font-family: 'Times New Roman', Times, serif;
      font-weight: bold;
    }
  }
  .soc-network{
    a{
      font-size: 15px;
      color: darken(#fff, 10);
      padding: 5px;
      margin: 0 5px;
    }
  }
}
</style>
