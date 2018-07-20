<template>
  <div id="app">
    <profile class="profile"></profile>
  </div>
</template>

<script>
  import Profile from "@/components/Profile";

  export default {
    name: 'app',
    components: {
      Profile
    }
  }
</script>

<style lang="scss" scoped>
  @import "scss/mixins.scss";

  #app {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: $color1;
    @include responsiveFont(18px, 15px);
  }

  .profile {
    margin: 0 auto;
    max-width: 980px;
    min-width: 320px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
