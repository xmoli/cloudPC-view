<template>
    <div>
        <sidebar/>
        <div class="content">
        </div>
    </div>
</template>
<script>
export default {
    components: {
        "sidebar": () => import("../components/sidebar/Sidebar"),
    }
}
</script>
<style scoped>
.content {
    width: 60vw;
    min-height: 2em;
    margin: 0 20vw;
    margin-top: 15vh;
    padding: 8px;
}
</style>