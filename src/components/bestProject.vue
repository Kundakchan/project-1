<template>
  <div class="best">
    <div class="box">
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img01.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">vinyl recird</h4>
          <p>mockup</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img02.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Modern T-shirt</h4>
          <p>print</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img03.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">minimal bag</h4>
          <p>branding</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img04.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img05.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img06.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img07.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img08.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="../assets/image/home/el-3/img09.jpg" alt="img">
        </div>
        <div class="hover">
          <h4 class="animated fadeinUp">Lorem, ipsum dolor.</h4>
          <p>Lorem.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../style/main';
  .best{
    width: 100%;
    //background-color:bisque;
  }
  .box{
    display: grid;
    grid-template-columns: repeat(3,400px);
    grid-template-rows: repeat(3, 400px);
  }
  .item{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
      >.hover{
        opacity: initial;
        >h4{
          animation-name: fadeInUp;
          animation-duration: .2s;
        }
        >p{
          animation-name: fadeInUp;
          animation-duration: .5s;
        }
      }
    }
    img{
      width: 400px;
      height: 400px;
    }
    .hover{
      background-color:rgba(0, 0, 0, 0.822);
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition-duration: .3s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4{
        color: white;
        text-transform: capitalize;
        font-family: 'PlayfairDisplay';
        font-size: 30px;
        margin: 0;
        margin-bottom: 14px;
        padding: 0 20px;
        text-align: center;
      }
      p{
        color: white;
        text-transform: uppercase;
        font-family: 'WorkSans';
        font-size: 15px;
        margin: 0;
        padding: 0 20px;
        text-align: center;
      }
    }
  }
  .item:nth-child(even){
    background-color: rgb(230, 218, 218)
  }
  .item:nth-child(odd){
    background-color: rgb(238, 238, 238);
  }

@media only screen and (max-width: 1200px){
  .box{
    grid-template-columns: repeat(3,300px);
    grid-template-rows: repeat(3, 300px);
  }
  .img{
    img{
      width: 250px;
      height: 250px;
    }
  }
}
@media only screen and (max-width: 1024px){
  .box{
    grid-template-columns: repeat(2,380px);
    grid-template-rows: repeat(4, 380px);
  }
  .img{
    img{
      width: 350px;
      height: 350px;
    }
  }
}
@media only screen and (max-width: 768px){
  .box{
    grid-template-columns: repeat(2,300px);
    grid-template-rows: repeat(4, 300px);
  }
  .img{
    img{
      width: 250px;
      height: 250px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .box{
    grid-template-columns: repeat(1,340px);
    grid-template-rows: repeat(8, 350px);
  }
  .img{
    img{
      width: 300px;
      height: 300px;
    }
  }
}
@media only screen and (max-width: 320px) {
  .box{
    grid-template-columns: repeat(1,300px);
    grid-template-rows: repeat(8, 300px);
  }
  .img{
    img{
      width: 250px;
      height: 250px;
    }
  }
}

</style>

