<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in slide" :key="index">
        <div class="content">
          <p class="big-text">{{ item.text }}</p>
          <p class="smail-text">{{ item.smailText }}</p>
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
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      },
      slide: [
        {
          text: '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”',
          smailText: 'Michael Hopkins'
        },
        {
          text: '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”',
          smailText: 'Michael Hopkins 2'
        },
        {
          text: '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”',
          smailText: 'Michael Hopkins 3'
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
    this.swiper.slideTo (1, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
  .container{
    max-width: 1200px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
  }
  .content{
    color: white;
    text-align: center;
    margin: 100px 200px;
  }
  .big-text{
    font-size: 24px;
    font-style: italic;
    line-height: 36px;
    font-family: 'PlayfairDisplay';
  }
  .smail-text{
    font-family: 'WorkSans';
    text-transform: uppercase;
    font-size: 14px;
    line-height: 36px;
  }
@media only screen and (max-width: 768px){
  .content{
    margin: 100px 100px;
  }
}
@media only screen and (max-width: 480px){
  .content{
  margin: 100px 50px;
  }
  .big-text{
    font-size: 20px;
  }
  .smail-text{
    font-size: 12px;
  }
}
@media only screen and (max-width: 320px){
  .content{
  margin: 100px 20px;
  }
  .big-text{
    font-size: 18px;
  }
  .smail-text{
    font-size: 9px;
  }
}
</style>
