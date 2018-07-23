<template>
    <div id="app">
        <profile class="profile"></profile>
    </div>
</template>

<script>
  import Profile from "@/components/Profile";
  import polyfillClosest from '@/js/polyfill'

  export default {
    name: 'app',
    beforeMount() {
      polyfillClosest((Element.prototype))
    },
    components: {
      Profile
    }
  }
</script>

<style lang="scss" scoped>
    @import "scss/mixins.scss";

    #app {
        display: flex;
        align-items: center;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: $color1;
        @include responsiveFont(18px, 15px);
        min-width: 320px;
        min-height: 100vh;
    }

    .profile {
        margin: 0 auto;
        max-width: 980px;
        min-width: 320px;
        width: 100%;
        box-sizing: border-box;
    }
</style>

<style>
    input::-ms-clear {
        display: none;
    }
</style>
