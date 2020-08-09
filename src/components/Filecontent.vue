<template>
    <div class="container">
        <ul class="header">
            <li>
                <span>
                    <label><input type="checkbox"/>选择</label>
                </span>
                <span>名称</span>
                <span>大小</span>
            </li>
        </ul>
        <ul class="body">
            <li v-for="(item,index) in items" :key="index">
                <span><label><input type="checkbox"/></label></span>
                <span>{{item.name}}</span>
                <span>{{item.length}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"]
}
</script>

<style scoped>
.header li, .body li{
    border-bottom: 1px solid rgba(128, 128, 128, 0.445);
    display: flex;
}
.header li span , .body li span{
    padding: 1em;
    min-width: 10em;
    text-align: start;
}
.header li span:first-child, .body li span:first-child {
    min-width: 3em;
}
</style>