<template>
<div>
    <tab :tabs="tabs"/>
    <div class="body"/>
</div>
</template>
<script>
export default {
    components: {
        'tab': ()=>import('../Tab')
    },
    data(){
        return {
            tabs: ['响应体','响应头'],
            
        }
    }
}
</script>
<style scoped lang="stylus">
ul
    display flex
    & li
        padding 8px
div.body
    width 100%
</style>