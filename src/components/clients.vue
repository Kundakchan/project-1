<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img01.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img02.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img03.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img04.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img05.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img01.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img02.svg" alt="img" class="img">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img src="../assets/image/home/el-5/img01.svg" alt="img" class="img">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        grabCursor: true,
        slidesPerView: 5,
        breakpoints: {
          1024: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo (0, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1200px;
  width: 100%;
}
.item{
  height: 200px;
  display: flex;
  justify-content: center;
}
</style>
