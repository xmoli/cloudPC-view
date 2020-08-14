<template>
    <transition>
        <div v-if="status">
        </div>
    </transition>
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
    z-index $appbar-z-index - 1
    border-bottom 2px solid lighten($main-color,90%)
.v-enter-active
    transition width  0.3s ease
.v-enter
    width 0

.v-enter-to
    width 50vw
.v-leave-active
    animation percent-out 0.3s
@keyframes percent-out {
    0% {
        width 50vw
    }
    99% {
        width 99vw
    }
    100% {
        width 0
    }
}

</style>