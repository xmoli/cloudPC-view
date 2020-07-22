<template>
    <div>
        <app-bar/>
        <side-bar/>
        <Content class="content"></Content>
    </div>
</template>

<script>

export default {
    created () {
        document.title = 'admin - logs'
    },
    updated () {
        document.title = 'admin - logs'
    },
    components: {
        Content: () => import('../components/TaskContent.vue'),
        "app-bar": () => import('../components/Appbar.vue'),
        "side-bar": () => import('../components/Sidebar.vue')
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    left: 12vw;
    top: 10vh;
}
</style>