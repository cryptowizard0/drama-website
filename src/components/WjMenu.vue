<template>
  <div class="wj-nav">
    <div>
      <img src="../assets/img/nav/tou.png" alt="" />
    </div>
    <div>
      <img src="../assets/img/nav/niao.png" alt="" @click="openLink" />
    </div>
    <div>
      <img disabled src="../assets/img/nav/mao.png" alt="" />
    </div>
    <div>
      <img class="wj_scale1" disabled src="../assets/img/nav/jury.png" alt="" />
    </div>
    <div>
      <div disabled class="wj-nav-line"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wj",
  components: {},
  data() {
    return {};
  },
  methods: {
    openLink() {
      window.open("https://twitter.com/DramaNFTz");
    },
  },
};
</script>
<style lang="scss" scoped>
.wj-nav {
  height: 140px;
  display: flex;
  background: linear-gradient(#a3ebd2 10px, #a3ebd2 100%);
  padding: 10px;
  justify-content: space-between;
  border-bottom: 30px solid #88c6f7;

  img {
    height: 140px;
  }

  .wj-nav-line {
    width: 260px;
    height: 26px;
    border-radius: 13px;
    background-color: #69a9ee;
  }

  > :last-child {
    display: flex;
    align-items: center;
    margin-right: 216px;
  }
  > div {
    img {
      transform: scale(1.2);
    }
  }

  > :first-child,
  > :nth-child(2) {
    display: flex;
    align-items: center;
    margin-left: 100px;
    img {
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.4);
    }
  }
  .wj_scale1 {
    transform: scale(1.8) translateY(10px);
  }
}
</style>
