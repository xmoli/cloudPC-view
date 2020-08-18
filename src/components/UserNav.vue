<template>
    <div class="user-nav">
        <ul>
            <li><i class="fa fa-cogs"/>设置</li>
            <li><i class="fa fa-inbox"/>消息</li>
        </ul>
    </div>
</template>
<style scoped lang="stylus">
@import "../main.styl"
.user-nav
    position fixed
    top 0
    left 0
    width 100vw
ul
    display flex
    width 100%
    margin-left $sidebar-width
    padding-left 16px
    border-bottom 2px solid lighten($main-color, 80%)
    & li
        padding 8px
        line-height 2em
        letter-spacing 2px
        color gray
        transform translateY(2px)
        & i 
            font-size 1.5em
        & .fa
                color inherit
        &:hover
            border-bottom 2px solid lighten($main-color,40%)
            color $main-color
</style>