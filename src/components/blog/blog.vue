<template>
  <div class="box">
    <div class="button">
      <div class="button-icon" @click="status"></div>
    </div>
    <div class="nav" :class="{ open: statusButton }">
      <p class="nav-item" v-for="(item, index) in typeList" :key="index" @click="showContent(item)">{{item}}</p>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in contentList" :key="index">
        <div class="item-header">
          <div class="item-header-img" v-bind:style="{ backgroundImage: item.img }"></div>
          <div class="item-header-button">{{ item.type }}</div>
        </div>
        <div class="item-body">
          <p class="item-body-title">{{ item.title }}</p>
          <p class="item-body-time">{{ item.time }}</p>
          <p class="item-body-content" v-html="item.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      typeList: [
        'all',
        'nature',
        'cities',
        'branding',
        'design'
      ],
      cards: [
        {
          img: 'url(' + require('@/assets/image/home/el-6/img01.jpg') + ')',
          type: 'design',
          title: 'Something I need to tell you',
          time: 'september 18, 2016',
          content: "<p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.</p>"
        },
        {
          img: 'url(' + require('@/assets/image/home/el-6/img02.png') + ')',
          type: 'nature',
          title: 'Something I need to tell you',
          time: 'september 18, 2016',
          content: "<p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.</p>"
        },
        {
          img: 'url(' + require('@/assets/image/home/el-6/img03.jpg') + ')',
          type: 'cities',
          title: 'Something I need to tell you',
          time: 'september 18, 2016',
          content: "<p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.</p>"
        },
        {
          img: 'url(' + require('@/assets/image/home/el-6/img04.jpg') + ')',
          type: 'design',
          title: 'Something I need to tell you',
          time: 'september 18, 2016',
          content: "<p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.<p/><p>Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.</p>"
        },
      ],
      statusButton: false,
      contentType: 'all'
    }
  },
  methods: {
    status: function () {
      this.statusButton = !this.statusButton
    },
    showContent: function (type) {
      this.contentType = type
    }
  },
  computed: {
    contentList: function () {
      return this.cards.filter(item => {
        if (item.type === this.contentType) {
          return item
        } else if ('all' === this.contentType) {
          return item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  max-width: 730px;
  width: 100%;
  margin-top: 125px;
}
//button style
.button{
  display: flex;
  justify-content: center;
  margin: 25px 0;
}
.button-icon{
  width: 16px;
  height: 16px;
  background-image: url('../../assets/image/portfolio/img01.svg');
  background-size: cover;
  cursor: pointer;
}

// nav style
.nav{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  //background-color: aqua;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 25px;
  height: 0;
  transform: scaleY(0);
  transition-duration: .3s;
}
.nav-item{
  text-transform: uppercase;
  font-family: 'WorkSans';
  text-transform: uppercase;
  font-size: 12px;
  color: #808080;
  letter-spacing: 0.35px;
  margin: 0 5px;
  padding: 5px 15px;
  //background-color: antiquewhite;
  cursor: pointer;
  &:hover{
    color: black;
  }
}

.open{
  height: 25px;
  transform: scaleY(1);
}

// content style

.content-item{
  background-color: white;
  margin-bottom: 30px;
  .item-header{
    position: relative;
    display: flex;
    cursor: pointer;
  }
  .item-header-img{
    width: 100%;
    height: 470px;
    background-size: cover;
    background-position: center center;
  }
  .item-header-button{
    align-self: flex-end;
    position: absolute;
    text-transform: uppercase;
    background-color: #252525;
    padding: 10px 25px;
    color: white;
    font-family: 'WorkSans';
    font-size: 12px;
    bottom: 10px;
    left: 10px;
    transition-property: background-color;
    transition-duration: .3s;
    &:hover{
      background-color: lighten(#252525, 5%)
    }
  }
  // body
  .item-body{
    padding: 0 30px 10px 30px;
  }
  .item-body-title{
    font-family: 'PlayfairDisplay';
    color: black;
    font-size: 20px;
    letter-spacing: .5px;
  }
  .item-body-time{
    font-family: 'WorkSans';
    text-transform: uppercase;
    color: black;
    font-size: 14px;
    font-weight: normal;
  }
  .item-body-content{
    font-family: 'WorkSans';
    color: rgb(95, 95, 95);
    line-height: 28px;
    font-size: 16px;
  }
}
</style>
