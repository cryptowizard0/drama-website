<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
$w100: 100%;
$w30: 30px;
$w20: 20px;
$w10: 10px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: unquote("-webkit-calc(100% - 30px - 25px)");
  border-left: 30px solid #87c6f7;
  border-right: 25px solid #87c6f7;
}
</style>
