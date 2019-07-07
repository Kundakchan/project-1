<template>
  <div class="container">
    <div class="left">
      <h2 class="title">{{ contactInfon.title }}</h2>
      <p class="content">{{ contactInfon.content }}</p>
      <p class="address"><span>Address:</span> {{ contactInfon.address }}</p>
      <p class="phone"><span>Phone:</span> {{ contactInfon.phone }}</p>
      <p class="email"><span>Email:</span> {{ contactInfon.email }}</p>
      <p class="fax"><span>Fax:</span> {{ contactInfon.fax }}</p>
    </div>
    <div class="right">
      <form>
        <div class="row-1">
          <input type="text" placeholder="Your name" required>
          <input type="email" placeholder="your email" required>
        </div>
        <div class="row-2">
          <input type="text" placeholder="your title" required>
        </div>
        <div class="row-3">
          <textarea placeholder="your comment" required></textarea>
        </div>
        <div class="row-4">
          <button class="button">send message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactInfon: {
        title: 'Contact info',
        content: 'Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.',
        address: '10111 Santa Monica Boulevard, LA',
        phone: '+44 987 065 908',
        email: 'info@Example.com',
        fax: '+44 987 065 909'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 40% auto;
  margin: 100px 0;
  box-sizing: border-box;
}
.left{
  font-family: 'WorkSans';
  font-size: 15px;
  color: #5f5f5f;
  line-height: 24px;
  letter-spacing: 0.07px;
  font-weight: 400;
  padding-right: 30px;
  .title{
    color: #171717;
    font-size: 38px;
    font-weight: bold;
    letter-spacing: 0.95px;
    font-family: 'PlayfairDisplay';
  }
  .content{
    margin: 40px 0;
  }
  .address, .phone, .email, .fax{
    span{
      color: #171717;
      font-weight: bold;
    }
  }
}
.right{
  margin-left: 30px;
  form{
    display: grid;
    grid-row-gap: 30px;
    .row-1{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
    }
    .row-2, .row-3{
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  input, textarea{
    padding: 20px;
    background-color: white;
    font-family: 'WorkSans';
    font-size: 14px;
    outline: none;
    border: none;
    &::placeholder{
      text-transform: capitalize;
      color: #858585;
    }
  }
  textarea{
    height: 170px;
    resize: vertical;
  }
  .button{
    padding: 23px 33px;
    text-transform: uppercase;
    color: white;
    font-family: 'WorkSans';
    font-size: 14px;
    background-color: #252525;
    outline: none;
    border: none;
    &:hover{
      background-color: lighten(#252525, 5%)
    }
  }
}
@media only screen and (max-width: 1200px) {
  .container{
    padding: 0 20px;
  }
}
@media only screen and (max-width: 840px) {
  .right{
    form{
      .row-1{
        grid-template-columns: none;
        grid-row-gap: 30px;
      }
    }
  }
}
@media only screen and (max-width: 640px) {
  .container{
    grid-template-columns: none;
    padding: 0 40px;
  }
  .left{
    margin-right: 0;
    margin-bottom: 50px;
  }
  .right{
    margin-left: 0;
  }
}
</style>
