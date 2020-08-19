<template>
    <div class="appbar">
        <div class="switch-sidebar fa fa-bars" @click="$emit('toggle-sidebar')"></div>
        <div class="search-box">
            <Searchbar @search="search"/>
        </div>
        <div class="page-tool-box">
            <slot/>
        </div>
        <div class="message-box">
            <Message/>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Appbar',
    components: {
        Searchbar: ()=> import('./Searchbar.vue'),
        Message: ()=> import('./Message.vue'),
    },
    methods: {
        search (keyword) {
            this.$emit('search',keyword)
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 800px) {
    .message-box{
        display: none;
    }
    .appbar{
        justify-content: space-around;
        height: 3.5em;
        background: rgb(42, 45, 70);
    }
}
</style>
<style lang="stylus" scoped>
@import "../main.styl"
.appbar
    position fixed
    top 0
    left 0
    backdrop-filter saturate(180%) blur(20px)
    z-index $appbar-z-index
    height $appbar-height
    width 100vw
    padding-left $sidebar-width

    display flex
    align-items center
    border-bottom 1px solid #cbcbcb
.page-tool-box
    display flex
    align-items center
.switch-sidebar
    display none
    margin 8px
    font-size 1.8em
    color #bbb

@media only screen and (max-width 1040px)
    .appbar
        padding-left 0
    .switch-sidebar
        display block
</style>