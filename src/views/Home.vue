<template>
  <div class="wj_home">
    <wj-menu></wj-menu>
    <wj-main></wj-main>
    <wj-faq></wj-faq>
    <wj-calender></wj-calender>
    <wj-team></wj-team>
  </div>
</template>

<script>
import WjMenu from '../components/WjMenu.vue'
import WjMain from '../components/WjMain.vue'
import WjFaq from '../components/WjFAQ.vue'
import WjCalender from '../components/WjCalender.vue'
import WjTeam from '../components/WjTeam.vue'
export default {
  name: 'Home',
  components: {
    WjMenu,
    WjMain,
    WjFaq,
    WjCalender,
    WjTeam
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.wj_home {}
</style>
