<template>
  <div class="box">
    <div class="button">
      <div class="button-icon" @click="status"></div>
    </div>
    <div class="nav" :class="{ open: statusButton}">
      <p class="nav-item" v-for="(item, index) in nav" :key="index" @click="filter(item)">{{ item }}</p>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in filterContent" :key="index">
        <div class="img">
          <img :src="item.img" alt="img">
        </div>
        <div class="hover">
          <p class="big">{{ item.title }}</p>
          <p class="smail">{{ item.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        'all',
        'branding',
        'print',
        'photography',
        'design',
        'mockup'
      ],
      content: [
        {
          img: require('@/assets/image/home/el-3/img01.jpg'),
          title: 'lorem',
          type: 'branding'
        },
        {
          img: require('@/assets/image/home/el-3/img02.jpg'),
          title: 'lorem',
          type: 'print'
        },
        {
          img: require('@/assets/image/home/el-3/img03.jpg'),
          title: 'lorem',
          type: 'print'
        },
        {
          img: require('@/assets/image/home/el-3/img04.jpg'),
          title: 'lorem',
          type: 'photography'
        },
        {
          img: require('@/assets/image/home/el-3/img05.jpg'),
          title: 'lorem',
          type: 'photography'
        },
        {
          img: require('@/assets/image/home/el-3/img06.jpg'),
          title: 'lorem',
          type: 'photography'
        },
        {
          img: require('@/assets/image/home/el-3/img07.jpg'),
          title: 'lorem',
          type: 'mockup'
        },
        {
          img: require('@/assets/image/home/el-3/img08.jpg'),
          title: 'lorem',
          type: 'design'
        },
        {
          img: require('@/assets/image/home/el-3/img09.jpg'),
          title: 'lorem',
          type: 'design'
        }
      ],
      statusButton: false,
      contentType: 'all'
    }
  },
  methods: {
    status: function () {
      this.statusButton = !this.statusButton
    },
    filter: function (type) {
      this.contentType = type
    }
  },
  computed: {
    filterContent: function () {
      return this.content.filter(item => {
        if (item.type === this.contentType) {
          return item
        } else if (this.contentType === 'all') {
          return item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  margin: 100px 0;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
}
.button{
  display: flex;
  justify-content: center;
  margin: 50px 0 25px 0;
}
.button-icon{
  width: 16px;
  height: 16px;
  background-image: url('../../assets/image/portfolio/img01.svg');
  background-size: cover;
  cursor: pointer;
}
.nav{
  //background-color: blanchedalmond;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 25px;
  transition-duration: .3s;
  transition-property: transform, height, opacity;
  height: 0;
  transform: scaleY(0);
  opacity: 0;
  .nav-item{
    text-transform: uppercase;
    padding: 5px 15px;
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 12px;
    color: #808080;
    letter-spacing: 0.35px;
    font-family: 'WorkSans';
    cursor: pointer;
    &:first-child{
      margin-left: 0;
    }
    &:hover{
      color: black;
    }
  }
}
.open{
  transform: scaleY(1);
  height: 45px;
  opacity: 1;
}
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content-item{
  display: flex;
  width: 400px;
  height: 400px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hover{
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.822);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition-duration: .2s;
    &:hover{
      opacity: 1;
      >.big{
        animation-name: fadeInUp;
        animation-duration: .2s;
      }
      >.smail{
        animation-name: fadeInUp;
        animation-duration: .5s;
      }
    }
  }
  .big{
    color: white;
    text-transform: capitalize;
    font-family: 'PlayfairDisplay';
    font-size: 30px;
    margin: 0;
    margin-bottom: 14px;
    padding: 0 20px;
    text-align: center;
  }
  .smail{
    color: white;
    text-transform: uppercase;
    font-family: 'WorkSans';
    font-size: 15px;
    margin: 0;
    padding: 0 20px;
    text-align: center;
  }
}
@media only screen and (max-width: 640px) {
  .nav{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    .nav-item{
      margin-left: 0;
    }
  }
  .open{
    height: 100px;
  }
}
</style>
