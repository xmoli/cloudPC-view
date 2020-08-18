<template>
    <div>
        <ul>
            <li>参数</li>
            <li>请求头</li>
            <li>请求体</li>
        </ul>
        <key-value-table class="key-value" @change="$emit('change')"/>
    </div>
</template>
<script>
export default {
    components: {
        "key-value-table": ()=>import('./KeyValue')
    }
}
</script>
<style lang="stylus" scoped>
ul
    display flex
    & li
        padding 8px
</style>