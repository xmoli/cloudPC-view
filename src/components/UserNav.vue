<template>
    <div class="user-nav">
        <ul>
            <li>设置</li>
            <li>消息</li>
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
    font-size 1.5em
    border-bottom 2px solid lighten($main-color, 80%)
    & li
        width 3.2em
        height 2em
        line-height 2em
        letter-spacing 2px
        color gray
        transform translateY(2px)
        &:hover
            border-bottom 2px solid lighten($main-color,40%)
            color black
</style>