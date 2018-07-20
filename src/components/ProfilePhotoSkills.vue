<template>
  <section class="profile-photo-skills">
    <div class="profile-photo-skills__first">
      <img :src="imgSrc" alt="Фотография профиля">
    </div>
    <div class="profile-photo-skills__second">
      <div class="profile-photo-skills__top">
        <div class="profile-photo-skills__top__left">
          <label class="profile-photo-skills__label profile-photo-skills__label__name">
            <input class="profile-photo-skills__input profile-photo-skills__input_name" type="text"
                   @focus="this.input['name'] "
                   :value="name">
            <span class="profile-photo-skills__icon-good"
            @click="onIconGoodClick"></span>
            <span class="profile-photo-skills__icon-bad"></span>
          </label>
          <label class="profile-photo-skills__label">
            <input class="profile-photo-skills__input" type="text"
                   :value="address">
            <span class="profile-photo-skills__icon-good"
                  @click="onIconGoodClick('address')"></span>
            <span class="profile-photo-skills__icon-bad"></span>
          </label>
          <label class="profile-photo-skills__label">
            <input class="profile-photo-skills__input" type="text"
                   :value="lang">
            <span class="profile-photo-skills__icon-good">
           </span>
            <span class="profile-photo-skills__icon-bad"></span>
          </label>
        </div>
        <div class="profile-photo-skills__top__right">
          <button class="profile-photo-skills__btn-print"
                  @click="onBtnPrintClick">Print this page
          </button>
        </div>
      </div>

      <div class="profile-photo-skills__wrap">
        <skill class="profile-photo-skills__item" v-for="(skillItem, index) in experience"
               :key="index"
               :skill="skillItem.skill"
               :experience="skillItem.years"
        ></skill>
      </div>
      <label class="profile-photo-skills__label">
        <input class="profile-photo-skills__input" type="text"
               value="Add skills">
        <select class="profile-photo-skills__select">
         <option>234234</option>
         <option>234234</option>
        </select>
        <span class="profile-photo-skills__icon-good"></span>
      </label>
    </div>
  </section>
</template>

<script>
  import Skill from '@/components/Skill'

  export default {
    name: 'ProfilePhotoSkills',
    props: {
      imgSrc: {
        type: String
      },
      name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      lang: {
        type: String,
        required: true
      },
      experience: {
        type: Array,
        required: true
      },
    },
    methods: {
      onBtnPrintClick() {
        window.print()
      },
      onIconGoodClick() {
        console.log(123)
        // console.log(document.querySelector(`.profile-photo-skills__input__${inputName}`))
      }
    },
    components: {
      Skill
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/mixins.scss";

  .profile-photo-skills {
    position: relative;
    display: flex;
    background-color: $color1;

    &__second {
      padding: 1.5em 5%;
      flex-grow: 1;
    }

    &__top {
      display: flex;
    }

    &__top__right {
      flex-grow: 1;
      text-align: right;
    }

    &__label {
      position: relative;
      display: block;
      margin-bottom: 0.2em;
      @include responsiveFont(15px, 13px);
    }

    &__label__name {
      @include responsiveFont(30px, 25px);
    }

    &__input {
      display: block;
      padding: 0.05em 1%;
      max-width: 420px;
      width: 100%;
      box-sizing: border-box;
      @include responsiveFont(15px, 13px);
      line-height: 1.3;
      color: $colorText;
      background-color: transparent;
      outline: none;
      font-weight: bold;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid grey;
      }
      &:focus {
        border: 1px solid grey;
        background-color: #fff;
        & ~ .profile-photo-skills__icon-good,
        & ~ .profile-photo-skills__icon-bad {
          display: block;
        }

      }
      &_name {
        @include responsiveFont(30px, 25px);
        color: #000;
        font-weight: 400;
      }
    }

    $iconWidth: 1em;

    &__icon-good,
    &__icon-bad {
      display: block;
      position: absolute;
      top: 50%;
      margin-top: calc(#{$iconWidth} / -2);
      border-radius: 50%;
      background-color: #e7e7e7;
      background-color: red;
      width: $iconWidth;
      height: $iconWidth;
      cursor: pointer;
    }

    &__icon-good {
      right: calc(#{$iconWidth} * 2);
    }
    &__icon-bad {
      right: calc(#{$iconWidth} / 2);
    }

    &__select {
      position: absolute;
      top: 0;
      right: 20px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      margin-top: .8em;
      @include responsiveFont(18px, 15px);
      width: 100%;
    }

    &__btn-print {
      padding: 0.2em 4%;
      @include responsiveFont(12px, 10px);
      line-height: 1.5;
      text-transform: uppercase;
      border: none;
      border-radius: 1em;
      color: #fff;
      background-color: #000;
      cursor: pointer;
      white-space: nowrap;
    }
  }
</style>
