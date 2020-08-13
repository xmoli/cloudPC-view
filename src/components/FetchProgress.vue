<template>
    <div :class="{mid: status, end: !status}">
    </div>
</template>
<script>
export default {
    props: ['status']
}
</script>
<style lang="stylus" scoped>
@import "../main.styl"
div
    position fixed
    height 4em
    width 0
    background black
    z-index $appbar-z-index - 1
    border-bottom 1px solid lighten($main-color,90%)
    transition width  0.3s ease-in
div.mid
    width 50vw
div.end
    width 100vw
</style>