<template>
    <div>
        <sidebar/>
        <div class="wrapper">
            <div class="req-wrapper">
                <test-input/>
                <req-params class="req-params"/>
            </div>
            <div v-if="resData" class="res-wrapper">
                <res-data :data="resData"/>
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
    },
    created(){
        document.title = 'ADMIN | 测试'
    }, 
    data(){
        return {
            resData: null
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../main.styl'
.wrapper
    caret-color $main-color
    width 700px
    position absolute
    left $sidebar-width
    padding 16px
.req-wrapper, .res-wrapper
    margin-bottom 16px
    padding 16px
    background white
    border-radius 4px
.req-params
    margin-top 16px
</style>