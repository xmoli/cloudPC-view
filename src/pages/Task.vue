<template>
    <div>
        <Appbar/>
        <Sidebar/>
        <Content>task</Content>
    </div>
</template>

<script>

export default {
    created () {
        document.title = 'admin - task'
    },
    updated () {
        document.title = 'admin - task'
    },
    components: {
        Sidebar: () => import('../components/Sidebar'),
        Appbar: () => import('../components/Appbar'),
        Content: () => import('../components/CommonContent.vue')
    }    
}
</script>

<style scoped>
</style>