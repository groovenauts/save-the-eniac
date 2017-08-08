<template>
  <transition name="slide">
    <div id="start" :key="currentPage.key">
      <div class="box">
        <vue-typer class="title" :type-delay='180' :text="currentPage.title" :repeat='0'></vue-typer>
        <div class="subtitle">{{currentPage.subtitle}}</div>
      </div>
        <img class="button" src="../assets/img/btn_start.png" alt="はじめる" @click="NEXT_PAGE"/>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import types from '../vuex/mutation-types'
import { VueTyper } from 'vue-typer'

export default {
  computed: {
    ...mapGetters(['currentPage'])
  },  
  methods: {
    ...mapActions([types.NEXT_PAGE])
  },
  components: {
    'vue-typer': VueTyper,
  },
}
</script>

<style lang="scss" scoped>
  @import '../styles/start.scss';
  @import '../styles/animation.scss';
</style>
