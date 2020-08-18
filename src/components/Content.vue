<template>
    <div class="wrapper">
    <div class="content-base">
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

.content-base
    position absolute
    top $appbar-height
    width 780px
    padding 0 8px
    background white
    border-radius 4px
    transform translate($sidebar-width/2, 8px)

@media only screen and (max-width 1040px)
    .content-base
        transform none
</style>