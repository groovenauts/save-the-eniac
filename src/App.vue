<template>
  <div id="app">
    <start v-if="currentPage.type === 'start'" />
    <hero v-if="currentPage.type === 'hero'" />
    <question v-if="currentPage.type === 'question'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Start from './components/Start'
import Hero from './components/Hero'
import Question from './components/Question'

export default {
  name: 'app',
  components: {
    Start,
    Hero,
    Question,
  },
  computed: {
    ...mapGetters(['currentPage'])
  },  
}
</script>

<style lang="scss" scoped>
  @import 'styles/app.scss'
</style>
