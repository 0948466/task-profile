<template>
  <section class="profile">
    <profile-photo-skills :imgSrc="imgSrc"
                          :name="name"
                          :address="address"
                          :lang="lang"
                          :experience="experience"
    ></profile-photo-skills>
    <profile-description
      :experience="experience"
    ></profile-description>
  </section>
</template>

<script>
  import ProfilePhotoSkills from '@/components/ProfilePhotoSkills'
  import ProfileDescription from '@/components/ProfileDescription'
  import { mapState } from 'vuex';

  export default {
    name: 'Profile',
    computed: mapState([
      'imgSrc', 'name', 'address', 'lang', 'experience'
    ]),
    components: {
      ProfilePhotoSkills,
      ProfileDescription
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/mixins.scss";

  .profile {
    padding: 10px;
    border: 1px solid $color1;
    background-color: #fff;
    @include w320-767 {
      padding: 1%;
    }
  }
</style>
