const baseSize = 16
// 设置 rem 函数
function setRem() {
    let scale = document.documentElement.clientWidth / 1920
    scale = scale < 1 ? 1 : scale

    //console.log((baseSize * Math.min(scale, 2)) + 'px');

    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}