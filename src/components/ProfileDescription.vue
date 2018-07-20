<template>
  <section class="profile-description">
    <div class="profile-description__item">
      <div class="profile-description__top">
        <h2 class="profile-description__title">Portfolio</h2>
        <p class="profile-description__title-bottom">PHP, Ruby, Javascript</p>
      </div>
      <ul class="profile-description__list">
        <li class="profile-description__text"><b>NavalPlan</b>, PHP, Ruby</li>
        <li class="profile-description__text"><b>MyTime</b>, Javascript</li>
        <li class="profile-description__text"><b>Formidable</b>, PHP, Ruby</li>
        <li class="profile-description__text"><b>MyTime</b>, Javascript</li>
        <li class="profile-description__text"><b>Monsoon</b>, ActionScript</li>
      </ul>
    </div>
    <div class="profile-description__item">
      <h2 class="profile-description__title profile-description__top">Experience</h2>
      <ul class="profile-description__list">
        <li v-for="(experienceItem, index) in experience" :key="index"
            class="profile-description__text">
          <b>{{experienceItem.skill}}</b>, {{experienceItem.years}}
        </li>

      </ul>
    </div>
    <div class="profile-description__item profile-description__item_code">
      <h2 class="profile-description__title profile-description__top">Sample code and algorithms</h2>
    </div>
    <div class="profile-description__item profile-description__item-wrap">
      <div class="profile-description__item profile-description__item_small">
        <h2 class="profile-description__title profile-description__top">Availability</h2>
        <p class="profile-description__text-big">Full-time</p>
      </div>
      <div class="profile-description__item profile-description__item_small">
        <h2 class="profile-description__title profile-description__top">Preferred environment</h2>
        <p class="profile-description__text">Git, GitHub, vim, emacs, Jenkins, Mac OSX</p>
      </div>
    </div>
    <div class="profile-description__item  profile-description__item_quote">
      <h2 class="profile-description__title profile-description__top">The most amazing …</h2>
      <div class="profile-description__quote-wrap">
      <p class="profile-description__quote">
        … Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua et dolore magna aliqua et dol ut labore et dolore
      </p>
        <p  class="profile-description__signature">- Martin</p>
      </div>
    </div>
    <div class="profile-description__item  profile-description__item_quote">
      <h2 class="profile-description__title profile-description__top">In clients I look for …</h2>
      <div class="profile-description__quote-wrap">
        <p class="profile-description__quote">
          … Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p  class="profile-description__signature">- Martin</p>
      </div>
    </div>
    <div class="profile-description__item"></div>
    <div class="profile-description__item profile-description__item_quote">
      <h2 class="profile-description__title profile-description__top">Note</h2>
      <div class="profile-description__quote-wrap">
        <p class="profile-description__quote">
          … Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ProfileDescription',
    props: {
      experience: {
        type: Array,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/mixins.scss";

  .profile-description {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid $color1;
    border-right: none;

    $heightTitle: 3em;

    &__item {
      padding: 1em 1%;
      max-width: 400px;
      min-width: 150px;
      width: 25%;
      box-sizing: border-box;
      border-right: 1px solid $color1;
      border-bottom: 1px solid $color1;
      @include w320-767 {
        width: 50%;
      }
      @media only screen and (max-width: 400px) {
        width: 100%;
      }


      &_code {
        position: relative;
        background: url("../assets/background-code.png") no-repeat center;
        background-size: cover;
        filter: grayscale(0.8);
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: calc(#{$heightTitle} + 1.5em);
          background-color: rgba(255,255,255, 0.7);
        }
      }
    }
    &__item-wrap {
      display: flex;
      flex-direction: column;
      padding: 0;
      border: 0;
    }

    &__item_small {
      width: 100%;
      height: 100%;
    }

    &__item_quote {
      display: flex;
      flex-direction: column;
    }

    &__title {
      position: relative;
      @include responsiveFont(17px, 14px);
      line-height: 1.2;
      font-weight: bold;
      color: $colorText;
    }

    &__top {
      min-height: $heightTitle;
    }

    &__title-bottom {
      @include responsiveFont(14px, 12px);
      line-height: 1;
      color: $colorText;
    }

    &__list {
      $listWidth: 0.3em;

      text-align: left;
      > li {
        position: relative;
        padding: 0 3% 0 7%;
        @include responsiveFont(15px, 13px);
        line-height: 1.3;
        color: $colorText;
        &::before {
          content: '';
          position: absolute;
          top: 60%;
          left: 2%;
          margin-top: calc(#{$listWidth} / -2);
          width: $listWidth;
          height: $listWidth;
          background-color: $colorText;
          border-radius: 50%;
        }
      }
    }

    &__text-big {
      margin-top: -.5em;
      @include responsiveFont(28px, 24px);
      line-height: 1.5;
      color: $colorText;
      font-weight: 600;
    }

    &__quote-wrap {
      position: relative;
      height: 100%;
      &::before, &::after {
        content: '\201C';
        position: absolute;
        @include responsiveFont(130px, 100px);
        line-height: 1;
        color: #ececec;
      }
      &::before {
        top: -.25em;
        left: 0;
      }
      &::after {
        bottom: 0;
        right: 0;
        margin-bottom: -.2em;
        transform: rotate(180deg);
      }
    }

    &__quote {
      position: relative;
      padding: 0.2em 5%;
      @include responsiveFont(15px, 13px);
      line-height: 1.3;
      color: $colorText;
      font-style: italic;
      text-align: left;
    }

    &__signature {
      position: relative;
      @include responsiveFont(14px, 12px);
      line-height: 1.5;
      font-weight: bold;
      color: #000;
      text-align: right;
      z-index: 2;
    }
  }

</style>
