<template>
    <div class="sidebar">
        <div class="logo">
            <router-link tag="div" to="/">
                <i class="fa fa-server"/>
            </router-link>
        </div>
        <ul>
            <router-link tabindex="0" tag="li" 
                v-for="item in items" :key="item.name"
                :to="item.path"
            >
                <i class="fa" :class="item.icon"/>{{item.cname}}
            </router-link>
        </ul>
    </div>
</template>
<script>
import {routes} from '../../router'

export default {
    data: function(){
        return {
            items: []
        }
    },
    created: function(){
        this.items = routes.filter(i => {
            if ((i.name === "Home") || (i.name==="Page404") || (i.name==="Login")) {
                return false
            }
            return true
        })
    }
}
</script>
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
    color alpha($contrast-color, .2)
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