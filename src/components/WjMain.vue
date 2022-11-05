<template>
  <div class="wj-main">
    <div class="wj-info">
      <div class="wj-dt_img">
        <img src="../assets/img/ls/首页动图.gif" alt="" />
      </div>
      <div class="wj-drama_img">
        <img src="../assets/img/ls/dramahunter.png" alt="" />
        <p class="wj-text">
          They're a bunch of cute little who keep their eyes open on
          everything going on in the Cosmos, they want the community to be
          active, but they refuse to be fooled. Again, they reject all opaque
          operations and bad behavior.
        </p>
      </div>
    </div>
    <div class="wj-border">
      <div class="wj_animation">
        <img :src="getImgSrc(i)" v-for="i in borderList" :key="i" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wj",
  components: {},
  data() {
    return {
      borderList: Array.from({ length: 65 * 2 }, (v, k) => k).map((v) => v + 1),
    };
  },
  mounted() {},
  computed: {
    getImgSrc() {
      return (index) => {
        let _index;
        if (index > 65) {
          _index = index - 65;
          return require(`../assets/img/picgroup/${_index}.png`);
        }
        _index = index;
        return require(`../assets/img/picgroup/${_index}.png`);
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.wj-main {
  padding: 70px 25px 10px 25px;
  background-color: #fff;
}

.wj-info {
  background-color: #88c6f7;
  text-indent: 2em;
  padding-left: 36px;
  padding-right: 60px;
  display: flex;
  padding-bottom: 60px;
}

.wj-drama_img {
  width: 100%;

  img {
    width: 60%;
    margin-top: 20px;
  }
}

.wj-text {
  font-size: 48px;
  text-decoration: underline;
  padding: 0 200px;
  padding-top: 30px;
}

.wj_boder {
  width: 100%;
}

.wj-dt_img {
  width: 800px;
  // margin-right: 190px;
  margin-top: 20px;

  img {
    width: 800px;
  }
}

.wj-border {
  overflow: hidden;
  height: 280px;

  div {
    height: 280px;
    white-space: nowrap;
    width: 100%;

    img {
      width: 280px;
      height: 280px;
    }
  }
}
@keyframes run {
  to {
    transform: translateX(-578%);
  }
}
.wj_animation {
  //   transform: translateX(-1%);
  animation: run 180s linear infinite;
}
</style>
