<template>
  <transition name="slide">
    <div id="hero" :key="currentPage.key">
      <div class="title">
        <vue-typer class="title" :type-delay='160' :text="currentPage.title" :repeat='0'></vue-typer>
      </div>
      <div class="box">
        <div class="image">
          <img :src="currentPage.image" />
        </div>
        <div class="body"><pre>{{currentPage.body}}</pre></div>
      </div>
        <img v-if="isEndPage(steps, page)" class="button" src="../assets/img/btn_end.png" alt="おしまい"/>
        <img v-else class="button" src="../assets/img/btn_next.png" alt="次へ" @click="NEXT_PAGE"/>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import types from '../vuex/mutation-types'
import _ from 'lodash'
import { VueTyper } from 'vue-typer'

export default {
  computed: {
    ...mapGetters([
      'page',
      'steps',
      'currentPage',
    ]),
  }, 
  methods: {
    ...mapActions([
      types.NEXT_PAGE,
    ]),
    isEndPage: (steps, page) => _.size(steps)-1 === page,
  },
  components: {
    'vue-typer': VueTyper,
  },
}
</script>

<style lang="scss" scoped>
  @import '../styles/hero.scss';
  @import '../styles/animation.scss';
</style>
