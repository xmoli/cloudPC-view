<template>
    <div>
        <sidebar/>
        <content-base class="content">
            <ul>
                <li>后端：golang</li>
                <li>开发者：https://github.com/OnlyOneFace</li>
                <li>前端：vue</li>
                <li>开发者：https://github.com/xmoli</li>
            </ul>
        </content-base>
    </div>
</template>
<script>
export default {
    components: {
        "sidebar": () => import("../components/sidebar/Sidebar"),
        "content-base": ()=>import("../components/Content")
    }
}
</script>
<style scoped>
.content ul li{
    padding: .8em;
    color: gray;
}
</style>