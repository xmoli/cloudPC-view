<template>
    <div class="container">
        <i class="fa fa-ellipsis-v"/>
        <item-menu >
        <ul>
            <li>下载</li>
            <li>移动</li>
            <li>重命名</li>
            <li>删除</li>
            <li>属性</li>
        </ul>
        </item-menu>
    </div>
</template>
<script>
export default {
    components: {
        "item-menu": () => import("../components/Menu")
    }
}
</script>
<style scoped>
@media only screen and (min-width: 800px) {
    .container {
        display: none;
    }
}
    .container i {
        color: white;
    }
</style>