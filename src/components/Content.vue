<template>
    <div class="wrapper">
    <div class="content">
        <slot/>
    </div>
    </div>
</template>
<style lang="stylus" scoped>
@import "../main.styl"
.wrapper
    display flex
    justify-content center
    align-items center
    width 100vw

.content
    position absolute
    top $appbar-height
    width 780px
    padding 0 8px
    background white
    transform translateX($sidebar-width/2)

@media only screen and (max-width 1040px)
    .content
        transform none
</style>