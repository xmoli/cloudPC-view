<template>
    <div>
        <appbar/>
        <sidebar/>
        <div class="content">
        </div>
    </div>
</template>
<script>
export default {
    components: {
        "appbar": () => import("../components/Appbar"),
        "sidebar": () => import("../components/Sidebar"),
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