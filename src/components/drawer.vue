<template>
  <div class="drawer">
    <div class="button-drawer" @click="statusUpdate">
      <i class="fas fa-times" :class="{opacity :!status}"></i>
      <i class="fas fa-bars" :class="{opacity :status}"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: false
    }
  },
  methods: {
    statusUpdate: function () {
      this.status = !this.status
      this.$emit('status', this.status)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-drawer{
    width: 50px;
    display: flex;
    justify-content: center;
    i{
      font-size: 40px;
      display: inherit;
    }
    .fa-times{
      position: absolute;
      color: white;
    }
    .opacity{
      opacity: 0;
      transition-property: opacity;
      transition-duration: .3s;
    }
  }
  @media only screen and (max-width: 480px) {
    .button-drawer{
      i{
        font-size: 30px;
        margin-top: 3px;
      }
    }
  }
</style>
