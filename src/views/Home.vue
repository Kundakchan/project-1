<template>
  <div>
    <section class="home">
      <div class="content">
        <div class="box">
          <div class="title-box">
            <div class="title-4">
              <p>New brending agencty</p>
            </div>
            <div class="title-1">
              <p>We are sbout to chsnge the way</p>
            </div>
            <div class="title-1 italic">
              <p>you publish on the web</p>
            </div>
            <div class="button">
              <button>Free download</button>
            </div>
          </div>
          <div class="bottom-box">
            <div class="button-battom">
              <button><i class="fas fa-angle-down"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="el-1">
      <div id="about" class="el-content">
        <h1>about our agency</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique sint omnis voluptatibus dolores molestias nemo, sapiente suscipit! Impedit distinctio minima aut inventore repudiandae sit debitis consectetur est nisi doloribus.</p>
        <div class="signing-up">
          <img src="../assets/image/home/el-1/img.png" alt="signing-up">
        </div>
      </div>
    </section>
    <section class="el-2">
      <div class="el-content">
        <div class="item">
          <div class="icon">
            <img src="../assets/image/home/el-2/img01.webp" alt="img">
          </div>
          <div class="text">
            <p class="namber">548</p>
            <p class="name">projects completed</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="../assets/image/home/el-2/img02.webp" alt="img">
          </div>
          <div class="text">
            <p class="namber">1465</p>
            <p class="name">working hours</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="../assets/image/home/el-2/img03.webp" alt="img">
          </div>
          <div class="text">
            <p class="namber">612</p>
            <p class="name">positive feedbacks</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="../assets/image/home/el-2/img04.webp" alt="img">
          </div>
          <div class="text">
            <p class="namber">735</p>
            <p class="name">happy klients</p>
          </div>
        </div>
      </div>

      
    </section>
    <div class="el-3">
      <div class="el-content">
        <div class="item">
          <h2>Best Prpjects</h2>
          <p>Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.</p>
        </div>
        <div class="item best">
          <best-projects></best-projects>
        </div>
      </div>
    </div>
    <div class="el-4">
      <el-4></el-4>
    </div>
    <div class="el-5">
      <el-5></el-5>
    </div>
    <section class="el-6">
      <el-6></el-6>
    </section>
    <section id="contact" class="el-7">
      <el-7></el-7>
    </section>
  </div>
</template>

<script>
import bestProjects from '../components/bestProject.vue'
import el4 from '../components/slideHome.vue'
import el5 from '../components/clients.vue'
import el6 from '../components/latestBlog.vue'
import el7 from '../components/contackInfo.vue'
export default {
  components: {
    'best-projects': bestProjects,
    'el-4': el4,
    'el-5': el5,
    'el-6': el6,
    'el-7': el7
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
}
.home{
  background-image: url(http://www.businesselement.net/wp-content/uploads/2017/11/Office-Budget.jpg);
  background-size: cover;
  height: 100vh;
  width: 100%;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #221212b4;
    z-index: 0;
  }
  display: grid;
  justify-items: center;
}
.content{
  position: absolute;
  display: grid;
  width: 100%;
  height: 100vh;
  justify-items: center;
  align-items: end;
  color: white;
  //background-color: antiquewhite;
  .box{
    //background-color:rgb(121, 126, 126);
    display: grid;
    grid-template-rows: 1fr 20%;
    height: 75%;
    padding: 0 50px;
  }
  .title-1{
    font-size: 48px;
    font-family: 'PlayfairDisplay';
    text-align: center;
    letter-spacing: 1.44px;
    line-height: 60px;
  }
  .title-4{
    font-size: 14px;
    font-family: 'WorkSans';
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2.8px;
    line-height: 84px;

  }
  .italic{
    font-style: italic;
  }
  .button{
    text-align: center;
    margin-top: 50px;
    button{
      text-transform: uppercase;
      background: rgb(22, 22, 22);
      padding: 20px 40px;
      color: white;
      border: none;
      &:hover{
        background-color: rgb(48, 47, 47);
        transition-property: background-color;
        transition-duration: .3s;
      }
    }
  }
  .bottom-box{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      background: none;
      color: white;
      border: 1px white solid;
      border-radius: 100%;
      font-size: 20px;
      //padding: 20px;
      width: 50px;
      height: 50px;
      opacity: .6;
      cursor: pointer;
      &:hover{
        opacity: 1;
      }
      &:focus{
        outline: none;
      }
      &:active{
        opacity: .6;
      }
    }
    
  }
}
.el-1{
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  .el-content{
    width: 750px;
    padding: 0 50px;
  }
  h1{
    text-align: center;
    font-family: 'PlayfairDisplay';
    text-transform: capitalize;
    font-size: 38px;
  }
  p{
    margin: 35px 0;
    font-family: 'WorkSans';
    font-size: 15px;
    line-height: 24px;
    color: #5f5f5f;
    text-align: center;
  }
  .signing-up{
    display: flex;
    justify-content: center;
  }
}
.el-2{
  height: 260px;
  background-image: url(../assets/image/home/el-2/background.png);
  display: flex;
  justify-content: center;
  .el-content{
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item{
    display: flex;
  }
  .text{
    color: white;
    text-transform: uppercase;
    font-family: 'WorkSans';
    margin-left: 30px;
  }
  .namber{
    font-size: 18px;
  }
  .name{
    font-size: 14px;
  }
}
.el-3{
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  .el-content{
    margin: 100px 0;
    max-width: 1200px;
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;
  }
  .item{
    h2{
      font-family: 'PlayfairDisplay';
      font-size: 38px;
      line-height: 60px;
      text-align: center;
    }
    p{
      font-family: 'WorkSans';
      font-size: 15px;
      line-height: 24px;
      color: #5f5f5f;
      width: 100%;
      max-width: 680px;
      text-align: center;
      margin: 30px 0;
    }
  }
}
.el-4{
  display: flex;
  justify-content: center;
  background-image: url(../assets/image/home/el-2/background.png);
}
.el-5{
  display: flex;
  justify-content: center;
  background-color: white;
}
.el-6{
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  padding: 50px 0;
}
.el-7{
  display: flex;
  justify-content: center;
  background-color: darken(#f6f6f6, 2%);
  border-top: 1px rgba(187, 186, 186, 0.287) solid;
}



@media only screen and (max-width: 1200px){
  .el-2{
    .el-content{
      padding: 0 20px;
    }
  }
}
@media only screen and (max-width: 1024px){
  .el-2{
    .el-content{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }
}
@media only screen and (max-width: 768px){
  .home{
    .title-1{
      font-size: 35px;
      line-height: 50px;
    }
    .title-4{
      line-height: 30px;
      font-size: 12px;
    }
    .button{
      font-size: 12px;
    }
  }
  .el-2{
    height: auto;
    .el-content{
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 100px);
      justify-items: start;
    }
  }
}
@media only screen and (max-width: 480px){
  .home{
    .title-1{
      font-size: 15px;
      line-height: 30px;
    }
    .title-4{
      line-height: 30px;
      font-size: 8px;
    }
    .button{
      font-size: 9px;
      button{
        padding: 10px 15px;
      }
    }
  }
  .el-1{
    h1{
      font-size: 20px;
    }
    p{
      font-size: 10px;
      line-height: 20px;
    }
  }
  .el-2{
    .namber{
      font-size: 13px;
    }
    .name{
      font-size: 10px;
    }
    img{
      width: 30px;
      height: 30px;
    }
  }
  .el-3{
    .el-content{
      margin: 20px;
    }
    .item{
      h2{
        font-size: 25px;
        line-height: 30px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>

