<template>
    <section class="profile-photo-skills">
        <div class="profile-photo-skills__first">
            <img :src="imgSrc" alt="Фотография профиля">
        </div>
        <div class="profile-photo-skills__second">
            <div class="profile-photo-skills__top">
                <div class="profile-photo-skills__top__left">
                    <div class="profile-photo-skills__wrap profile-photo-skills__wrap__name">
                        <label><input class="profile-photo-skills__input profile-photo-skills__input_name" type="text"
                                      @keyup.enter="onInputPressEnter($event)"
                                      @keyup.esc="onInputPressEscape($event)"
                                      @focusin="onInputFocusIn"
                                      @focusout="onInputFocusOut('name', $event)"
                                      :value="name">
                        </label>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-good"
                              @click="onIconGoodClick('Name', $event)"></span>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-bad"
                              @click="onIconBadClick('name', $event)"></span>
                    </div>

                    <div class="profile-photo-skills__wrap">
                        <label><input class="profile-photo-skills__input" type="text"
                                      @keyup.enter="onInputPressEnter($event)"
                                      @keyup.esc="onInputPressEscape($event)"
                                      @focusin="onInputFocusIn"
                                      @focusout="onInputFocusOut('address', $event)"
                                      :value="address">
                        </label>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-good"
                              @click="onIconGoodClick('Address', $event)"></span>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-bad"
                              @click="onIconBadClick('address', $event)"></span>
                    </div>

                    <div class="profile-photo-skills__wrap">
                        <label><input class="profile-photo-skills__input" type="text"
                                      @keyup.enter="onInputPressEnter($event)"
                                      @keyup.esc="onInputPressEscape($event)"
                                      @focusin="onInputFocusIn"
                                      @focusout="onInputFocusOut('lang', $event)"
                                      :value="lang">
                        </label>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-good"
                              @click="onIconGoodClick('Lang', $event)"></span>
                        <span class="profile-photo-skills__icon profile-photo-skills__icon-bad"
                              @click="onIconBadClick('lang', $event)"></span>
                    </div>
                </div>
                <div class="profile-photo-skills__top__right">
                    <button class="profile-photo-skills__btn-print"
                            @click="onBtnPrintClick($event)">
                        Print this page
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
            <div class="profile-photo-skills__wrap profile-photo-skills__wrap_add-skill" ref="addSkill">
                <label><input class="profile-photo-skills__input profile-photo-skills__input_add-skill" type="text"
                              @keyup.enter="onInputPressEnter($event)"
                              @focusin="onInputFocusIn"
                              placeholder="Add skills">
                </label>
                <label>
                    <select class="profile-photo-skills__select profile-photo-skills__icon"
                            @click="onSelectClick($event)">
                        <option selected>Strong</option>
                        <option> > 10 years</option>
                        <option>9 years</option>
                        <option>8 years</option>
                        <option>7 years</option>
                        <option>6 years</option>
                        <option>5 years</option>
                        <option>4 years</option>
                        <option>3 years</option>
                        <option>2 years</option>
                    </select>
                </label>
                <span class="profile-photo-skills__icon profile-photo-skills__icon-good  profile-photo-skills__icon-good_add-skill"
                      @click="onIconGoodClick('Skills', $event)"
                ></span>
            </div>
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
      onBtnPrintClick(event) {
        event.target.style.display = 'none'
        this.$refs.addSkill.style.display = 'none'
        window.print()
        event.target.style.display = ''
        this.$refs.addSkill.style.display = ''
      },
      onIconGoodClick(propsName, event) {
        event.stopPropagation()
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT = 'profile-photo-skills__input'
        const CLASS_INPUT_ERROR = 'profile-photo-skills__input_error'
        const wrap = event.target.closest(`.${CLASS_INPUT_WRAP}`)
        const input = wrap.querySelector(`.${CLASS_INPUT}`)

        if (!input.value) {
          input.classList.add(CLASS_INPUT_ERROR)
          return
        }

        if (propsName === 'Skills') {
          const CLASS_SELECT = 'profile-photo-skills__select'
          const CLASS_INPUT_ACTIVE = 'profile-photo-skills__input_active'
          const select = wrap.querySelector(`.${CLASS_SELECT}`)
          const experience = {
            skill: input.value,
            years: select.value
          }
          this.$store.commit(`change${propsName}`, experience);
          this.toggleIcons(event, false, 'force')
          input.value = ''
          input.classList.remove(CLASS_INPUT_ACTIVE)

          return
        }

        this.$store.commit(`change${propsName}`, input.value);
        this.toggleIcons(event, false, 'force')

      },

      onIconBadClick(propsName, event) {
        event.stopPropagation()
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT = 'profile-photo-skills__input'

        const input = event.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT}`)

        input.value = this[propsName]
        this.toggleIcons(event, false, 'force')
      },

      onInputFocusIn(event) {
        this.toggleIcons(event, true)
      },

      onInputFocusOut(propsName, event) {
        if (event.target.value === this[propsName]) {
          this.toggleIcons(event)
        } else {
          event.target.focus();
          const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
          const CLASS_INPUT = 'profile-photo-skills__input'
          const CLASS_INPUT_ERROR = 'profile-photo-skills__input_error'
          const input = event.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT}`)
          setTimeout(() => {
              if (input.value !== this[propsName]) {
                input.classList.add(CLASS_INPUT_ERROR)
              }
            },
            200
          )
        }
      },

      toggleIcons(e, show, forceHide) {
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT_ICON = 'profile-photo-skills__icon'
        const CLASS_INPUT_ICON_SHOW = 'profile-photo-skills__icon_show'
        const CLASS_INPUT = 'profile-photo-skills__input'
        const CLASS_INPUT_ERROR = 'profile-photo-skills__input_error'

        let icons = e.target.closest(`.${CLASS_INPUT_WRAP}`).querySelectorAll(`.${CLASS_INPUT_ICON}`)
        const input = e.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT}`)

        for (let iconItem of icons) {
          if (forceHide) {
            setTimeout(() => {
              input.blur()
              iconItem.classList.remove(CLASS_INPUT_ICON_SHOW)
              input.classList.remove(CLASS_INPUT_ERROR)
            }, 0)
          } else {
            if (show && iconItem.classList.contains(CLASS_INPUT_ICON_SHOW)) {
              return
            }
            iconItem.classList.toggle(CLASS_INPUT_ICON_SHOW)
          }
        }
      },

      onInputPressEnter(event) {
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT_ICON_GOOD = 'profile-photo-skills__icon-good'

        event.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT_ICON_GOOD}`).click()
      },

      onInputPressEscape(event) {
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT_ICON_BAD = 'profile-photo-skills__icon-bad'
        event.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT_ICON_BAD}`).click()
      },

      onSelectClick(event) {
        event.preventDefault()
        const CLASS_INPUT_WRAP = 'profile-photo-skills__wrap'
        const CLASS_INPUT = 'profile-photo-skills__input'
        const CLASS_INPUT_ACTIVE = 'profile-photo-skills__input_active'

        event.target.closest(`.${CLASS_INPUT_WRAP}`).querySelector(`.${CLASS_INPUT}`).classList.add(CLASS_INPUT_ACTIVE)
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
        @media only screen and (max-width: 600px) {
            flex-wrap: wrap;
        }

        &__first {
            width: 100%;
            max-width: 238px;
            @media only screen and (max-width: 400px) {
                max-width: 100%;
                text-align: center;
            }
            img {
                width: 100%;
            }
        }

        &__second {
            padding: 1.5em 5%;
            flex-grow: 1;
            @media only screen and (max-width: 935px) and (min-width: 600px) {
                padding-bottom: 3.5em;
            }
        }

        &__top {
            display: flex;
        }

        &__top__left {
            margin-bottom: 1em;
        }

        &__top__right {
            flex-grow: 1;
            text-align: right;
        }

        &__wrap {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 0.2em;
            @include responsiveFont(18px, 15px);
            width: 100%;
            label {
                width: 100%;
            }
        }

        &__wrap__name {
            @include responsiveFont(30px, 25px);
        }

        &__wrap_add-skill {
            max-width: 420px;
            width: 100%;
            margin-top: 0.5em;
        }

        $iconWidth: 1em;

        &__input {
            display: block;
            position: relative;
            padding: 0.05em 4em 0.05em 1%;
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
                border: 1px solid #bababa;
            }
            &:focus {
                border: 1px solid #bababa;
                background-color: #fff;
                font-weight: normal;
            }
            &_active {
                background-color: #fff;
                font-weight: normal;
                border: 1px solid #00ff00;
            }
            &_error {
                border-color: red !important;
            }
            &_name {
                @include responsiveFont(30px, 25px);
                color: #000;
                font-weight: 400;
            }
            &_add-skill {
                &:hover,
                &:focus {
                    border: 1px solid #00ff00;
                }
            }
        }

        &__icon {
            display: none;
            &_show {
                display: block;
            }
        }
        &__icon-good,
        &__icon-bad {
            position: absolute;
            top: 50%;
            margin-top: calc(#{$iconWidth} / -2);
            border-radius: 50%;
            background-color: #e7e7e7;
            width: $iconWidth;
            height: $iconWidth;
            cursor: pointer;
            z-index: 10;
        }

        &__icon-good {
            right: calc(#{$iconWidth} * 2);
            &_add-skill {
                right: calc(#{$iconWidth} / 2);
            }
            &::before {
                content: "";
                position: absolute;
                top: calc(#{$iconWidth} / 1.8);
                left: calc(#{$iconWidth} / 4);
                width: calc(#{$iconWidth} / 4);
                height: calc(#{$iconWidth} / 15);
                background-color: #fff;
                transform: rotate(45deg);
            }

            &::after {
                content: "";
                position: absolute;
                top: calc(#{$iconWidth} / 2);
                left: calc(#{$iconWidth} / 2.6);
                width: calc(#{$iconWidth} / 2.4);
                height: calc(#{$iconWidth} / 15);
                background-color: #fff;
                transform: rotate(-47deg);
            }
        }
        &__icon-bad {
            right: calc(#{$iconWidth} / 2);
            &::before,
            &::after {
                content: "";
                top: 50%;
                left: calc(50% - (#{$iconWidth} / 2 / 2));
                position: absolute;
                width: calc(#{$iconWidth} / 2);
                height: calc(#{$iconWidth} / 22);
                background-color: #fff;
            }
            &::before {
                transform: rotate(53deg);
            }
            &::after {
                transform: rotate(-53deg);
            }
        }

        &__select {
            position: absolute;
            top: calc(50% - 1px);
            right: 3em;
            height: 75%;
            transform: translateY(-50%);
            @include responsiveFont(12px, 10px);
            line-height: 1.5;
            border-radius: 3px;
            z-index: 2;
        }

        &__btn-print {
            position: absolute;
            top: 2em;
            right: 2em;
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
            outline: none;
            @media only screen and (max-width: 935px) and (min-width: 600px) {
                top: auto;
                bottom: 2em;
            }
        }
    }
</style>
