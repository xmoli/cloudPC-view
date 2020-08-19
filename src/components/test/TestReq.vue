<template>
    <div>
        <tab :tabs="tabs"/>
        <key-value-table v-if="!edit" :content="null" class="key-value"/>
        <textarea :value="null" v-else/>
    </div>
</template>
<script>
export default {
    components: {
        "key-value-table": ()=>import('./KeyValue'),
        "tab":()=>import('../Tab')
    },
    data() {
        return {
            tabs: ['参数', '请求头', '请求体'],
            active: '',
            edit: false
        }
    },
    created() {
        this.active = this.tabs[0]
    },
    methods:{
        tabTo(e,index){
            this.active = this.tabs[index]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../main.styl"
ul
    display flex
    li
        padding 8px
        margin-bottom 16px
        &:hover
            cursor pointer
    .active
        border-bottom 2px solid $main-color
</style>