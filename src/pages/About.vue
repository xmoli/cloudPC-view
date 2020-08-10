<template>
    <div>
        <sidebar/>
        <div class="content">
            <ul>
                <li>后端支持：golang</li>
                <li>技术支持：vue、docker</li>
                <li>作者：github/xmoli</li>
            </ul>
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
    background: rgb(7, 34, 80);
}
.content ul li{
    padding: .8em;
    color: gray;
}
</style>