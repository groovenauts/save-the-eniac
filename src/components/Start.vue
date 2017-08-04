<template>
  <transition name="slide">
    <div id="start" :key="currentPage.key">
      <div class="box">
        <div class="title"><pre>{{currentPage.title}}</pre></div>
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

export default {
  computed: {
    ...mapGetters(['currentPage'])
  },  
  methods: {
    ...mapActions([types.NEXT_PAGE])
  },
}
</script>

<style lang="scss" scoped>
  @import '../styles/start.scss';
  @import '../styles/animation.scss';
</style>
