<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in cards" :key="index">
        <div class="card">
          <div class="card-header">
            <img :src="item.img" alt="img" class="img">
            <div class="button">{{ item.button }}</div>
          </div>
          <div class="cadr-body">
            <h3 class="title">{{ item.title }}</h3>
            <p class="time">{{ item.time }}</p>
            <p class="content">{{ item.content }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        grabCursor: true,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        breakpoints: {
          // when window width is <= 320px
          980: {
            slidesPerView: 2
          },
          // when window width is <= 480px
          640: {
            slidesPerView: 1
          }
        }
      },
      cards: [
        {
          img: require('@/assets/image/home/el-6/img01.jpg'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula'
        },
        {
          img: require('@/assets/image/home/el-6/img02.png'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula commodo dui. Phasellus hendrerit condi ntum vehicula'
        },
        {
          img: require('@/assets/image/home/el-6/img03.jpg'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula'
        },
        {
          img: require('@/assets/image/home/el-6/img04.jpg'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit '
        },
        {
          img: require('@/assets/image/home/el-6/img05.jpg'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula'
        },
        {
          img: require('@/assets/image/home/el-6/img01.jpg'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula'
        },
        {
          img: require('@/assets/image/home/el-6/img02.png'),
          button: 'nature',
          title: 'Something I need to tell you',
          time: 'May 16, 2016',
          content: 'Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condi ntum vehicula'
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
}
.card{
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  margin: 15px;
  margin-bottom: 50px;
}
.card-header{
  position: relative;
  display: flex;
  align-items: flex-end;
}
.img{
  height: 240px;
  background-color: bisque;
  width: 100%;
}
.button{
  text-transform: uppercase;
  font-size: 12px;
  line-height: 24px;
  font-family: 'WorkSans';
  background-color: #252525;
  color: white;
  letter-spacing: 0.3px;
  padding: 5px 20px;
  position: absolute;
  left: 10px;
  bottom: 10px;
}
.cadr-body{
  box-sizing: border-box;
  padding: 30px;
}
.title{
  font-size: 20px;
  line-height: 24px;
  font-family: 'PlayfairDisplay';
  color: #000;
  font-weight: 500;
}
.time{
  font-size: 12px;
  text-transform: uppercase;
  line-height: 24px;
  font-family: 'WorkSans';
  color: #171717;
  letter-spacing: 0.3px;
}
.content{
  color: #5f5f5f;
  line-height: 24px;
  font-size: 15px;
  font-family: 'WorkSans';
}
@media only screen and (max-width: 1200px) {
  .container{
    box-sizing: border-box;
  }
}
</style>
