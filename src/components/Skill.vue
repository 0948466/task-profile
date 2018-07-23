<template>
    <section class="skill" ref="skill" :style="{backgroundColor: getBackgroundColor}">
        <div class="skill__icon-del"
             :style="{width: iconDelWidth}"
             @click="onIconDelClick"
        ></div>
        {{skill}}
    </section>
</template>

<script>
  export default {
    name: 'Skill',
    props: {
      skill: {
        required: true,
        type: String
      },

      experience: {
        required: true,
        type: String
      }
    },
    data: () => ({
      skillHover: false,
      iconDelWidth: 0
    }),
    mounted() {
      this.iconDelWidth = `${this.$refs.skill.offsetHeight * 0.6}px`
    },
    methods: {
      onIconDelClick() {
        this.$store.commit('deleteSkill', this.skill);
      }
    },
    computed: {
      getBackgroundColor() {
        return `rgba(0, 0, 0, ${parseInt(this.experience) / 6})`
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins.scss";

    .skill {
        position: relative;
        padding: 0.2em 10px;
        margin: 0 1% 2.5%;
        @include responsiveFont(14px, 12px);
        line-height: 1.5;
        text-transform: uppercase;
        color: #fff;
        background-color: black;
        border-radius: 3px;
        cursor: default;
        &:hover {
            .skill__icon-del {
                position: absolute;
                display: block;
                top: 20%;
                right: 5px;
                height: 60%;
                border-radius: 50%;
                background-color: #fa726f;
                cursor: pointer;
                &::before,
                &::after {
                    content: "";
                    top: 45%;
                    left: 25%;
                    position: absolute;
                    width: 50%;
                    height: 2px;
                    background-color: #fff;
                }
                &::before {
                    transform: rotate(45deg);
                }
                &::after {
                    transform: rotate(-45deg);
                }
            }
        }

        &__icon-del {
            display: none;
        }
    }

</style>
