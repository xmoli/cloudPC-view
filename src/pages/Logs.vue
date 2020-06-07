<template>
    <Content></Content>
</template>

<script>
import Content from '../components/CommonContent.vue'

export default {
    created () {
        document.title = 'admin - logs'
    },
    updated () {
        document.title = 'admin - logs'
    },
    components: {
        Content
    }
}
</script>

<style scoped>
    div {
        margin: 8px;
    }
</style>