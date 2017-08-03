<template>
  <div>
    <header class="header">
      <img class="right" src="../assets/img/img_mauchly.png"/>
      <img class="left" src="../assets/img/img_cloud_small.png"/>
      <div class="title"><pre>{{currentPage.title}}</pre></div>
      <div class="nav">
        <div class="title">{{toStageTitle(currentPage.stage)}}</div>
        <div class="subtitle">{{toStageSubTitle(currentPage.stage)}}</div>
      </div>
    </header>
    <div class="content">
      <div class="content-left"><pre>{{currentPage.question}}</pre></div>
      <div class="line"></div>
      <div class="center">
        <textarea rows="9" :placeholder="currentPage.placeholder" :value="answer" :disabled="correct" @change="CHANGE_ANSWER"></textarea>
        <img v-if="showGoodStamp(showStamp, correct)" class="stamp" src="../assets/img/img_stamp_good.png" />
        <img v-else-if="showChallengeStamp(showStamp, correct)" class="stamp" src="../assets/img/img_stamp_challenge.png" />
      </div>
      <img v-if="power === 0" class="content-right" src="../assets/img/img_power_gage_empty.png"/>
      <img v-else-if="power === 3" class="content-right" src="../assets/img/img_power_gage_3.png"/>
      <img v-else-if="power === 6" class="content-right" src="../assets/img/img_power_gage_6.png"/>
      <img v-else-if="power === 9" class="content-right" src="../assets/img/img_power_gage_9.png"/>
      <img v-else-if="power > 9" class="content-right" src="../assets/img/img_power_gage_full.png"/>
    </div>
    <footer class="footer">
      <img class="right" src="../assets/img/img_eniac_charge.png" />
      <img class="left" src="../assets/img/img_raptop.png" />
    </footer>
    <img v-if="correct" class="button" src="../assets/img/btn_next.png" alt="次へ" @click="NEXT_PAGE"/>
    <img v-else class="button" src="../assets/img/btn_ok.png" alt="OK" @click="CHECK_ANSWER"/>
    <!--img v-else-if="!!answer" class="button" src="../assets/img/btn_ok.png" alt="OK" @click="CHECK_ANSWER"/>
    <img v-else class="button" src="../assets/img/btn_ok_disable.png" alt="OK"/-->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import types from '../vuex/mutation-types'
import _ from 'lodash'

export default {
  computed: {
    ...mapGetters([
      'currentPage',
      'power',
      'answer',
      'correct',
      'showStamp',
    ]),
  },
  methods: {
    ...mapActions([
      types.NEXT_PAGE,
      types.CHANGE_ANSWER,
      types.CHECK_ANSWER,
    ]),
    toStageTitle: num => `ステージ ${Math.floor(num)}`,
    toStageSubTitle: num => `stage${_.replace(_.toString(num), '.', '-')}`,
    showGoodStamp: (showStamp, correct) => showStamp && correct,
    showChallengeStamp: (showStamp, correct) => showStamp && !correct,
  },
}
</script>

<style lang="scss" scoped>
  @import '../styles/question.scss'
</style>
