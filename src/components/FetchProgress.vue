<template>
    <div :class="{hidden: status, mid: status, end: !status}">
    </div>
</template>
<script>
export default {
    props: ['status']
}
</script>
<style lang="stylus" scoped>
@import '../main.styl'
div
    position fixed
    height 4em
    z-index $appbar-z-index - 1
    border-bottom 2px solid $main-color
    transition width 0.3s ease-out
div.mid
    width 50vw
div.end
    width 100vw
div.hidden
    display none
</style>