<template>
    <div>
        <sidebar/>
        <div class="wrapper">
            <div class="req-wrapper">
                <test-input/>
                <req-params/>
            </div>
            <div class="res-wrapper">
            <res-data/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        "sidebar": ()=> import('../components/sidebar/Sidebar'),
        "test-input": ()=> import('../components/test/TestInput'),
        "req-params": ()=>import('../components/test/TestReq'),
        "res-data": ()=>import('../components/test/TestRes')
    }
}
</script>
<style lang="stylus" scoped>
@import '../main.styl'
.wrapper
    position absolute
    left $sidebar-width
    padding 16px
.req-wrapper, .res-wrapper
    padding 8px
    border 1px solid #bbb
    border-radius 4px
    margin 8px
</style>