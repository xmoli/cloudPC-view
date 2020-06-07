<template>
    <Content>task</Content>
</template>

<script>
import Content from '../components/CommonContent.vue'

export default {
    created () {
        document.title = 'admin - task'
    },
    updated () {
        document.title = 'admin - task'
    },
    components: {
        Content
    }    
}
</script>

<style scoped>
</style>