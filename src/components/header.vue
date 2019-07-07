<template>
<div>
  <div class="container" v-scroll="headerScrol" :class="{active :isActive, openDrawer :statusDrawer}">
    <div class="header">
      <div class="logo">
        <router-link :to="logo.path">
          <img src="../assets/image/header/logo/img.png" alt="logo">
        </router-link>
      </div>
      <div class="drawer">
        <drawer @status="statusBar"></drawer>
      </div>
      <div class="nav">
        <router-link v-for="(item, index) in nav" :key="index" :to="item.path" class="link">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
  <div class="open-drawer" v-if="statusDrawer">
    <open-drawer @status="statusBarNav" :nav="nav"></open-drawer>
  </div>
</div>
</template>

<script>
import drawer from './drawer.vue'
import openDrawer from './openDrawer.vue'
export default {
  components: {
    drawer,
    'open-drawer': openDrawer
  },
  data () {
    return {
      nav: [
        {
          name: 'About',
          path: '/#about',
        },
        {
          name: 'Contact',
          path: '/#contact',
        },
        {
          name: 'Portfolio',
          path: '/portfolio'
        },
        {
          name: 'Blog',
          path: '/blog'
        }
      ],
      logo: { path: '/' },
      isActive: false,
      statusDrawer: false
    }
  },

  directives: {
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },

  methods: {
    headerScrol: function () {
      if (window.scrollY > 50) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    statusBar: function (res) {
      this.statusDrawer = res
    },
    statusBarNav: function (status) {
      console.log(status)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 30px 0;
    position: fixed;
    transition-duration: .3s;
    transition-property: background-color;
    z-index: 2;
  }
  .header{
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
  }
  .drawer{
    display: none;
  }
  .nav{
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  .open-drawer{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
  .link{
    text-decoration: none;
    padding: 10px;
    margin-right: 5px;
    font-family: 'WorkSans';
    color: #bfbfbf;
    transition-duration: .3s;
    transition-property: color;
    &:last-child{
      margin-right: 0;
    }
  }
  .active{
    background-color: white;
    .link{
      color: inherit;
    }
    .logo{
      filter: invert(100%)
    }
  }

  // display 1024
  @media only screen and (max-width: 1024px) {
    .container{
      padding: 20px 0;
    }
    .header{
      padding: 0 40px;
    }
  }
  // display 768
  @media only screen and (max-width: 768px) {
    .container{
      background-color: white;
    }
    .openDrawer{
      background-color: rgba(255, 255, 255, 0);
      .logo{
        filter: none;
      }
    }
    .logo{
      filter: invert(100%)
    }
    .nav{
      display: none;
    }
    .drawer{
      display: inherit;
    }
  }
  // display 480
  @media only screen and (max-width: 480px) {
    .container{
      padding: 10px 0;
    }
  }
  // display 320
  @media only screen and (max-width: 320px) {
    
  }
</style>
