<template>
    <div class="sidebar">
        <div class="logo">
            <router-link tag="div" to="/">
                <i class="fa fa-server"/>
            </router-link>
        </div>
        <ul>
            <router-link tabindex="1" tag="li" to="/file" >
                <i class="fa fa-folder-o"/>文件
            </router-link>
            <router-link tabindex="1" tag="li" to="/task" >
                <i class="fa fa-tasks" /> 任务
            </router-link>
            <router-link tabindex="1" tag="li" to="/log">
                <i class="fa fa-file-o" />日志
            </router-link>
            <router-link tabindex="1" tag="li" to="/user">
                <i class="fa fa-user-o" />用户
            </router-link>
            <router-link tabindex="1" tag="li" to="/about">
                <i class="fa fa-info"/>关于
            </router-link>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
@import '../../main.styl'
.sidebar
    z-index $sidebr-z-index
    width $sidebar-width
    top 0
    left 0
    height  100vh
    position fixed
    background #ebebeb
.logo
    font-size 62px
    color $contrast-color
    & .router-link-active
        background #ebebeb
.sidebar ul li
    margin 8px 8px
    height 36px
    line-height 36px
    outline none
    border-radius 4px
    & .fa
        font-size 1.2em
        margin 0 8px
        color $contrast-color
.router-link-active
        background #cbcbcb
</style>
<style lang="stylus" scoped>
@media only screen and (max-width 1040px)
    .sidebar
        display none
</style>