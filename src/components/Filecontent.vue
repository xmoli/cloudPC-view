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
            <li v-for="(item,index) in items" :key="index" 
                :class="{'gray': !(index%2)}" 
            >
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
    display: flex;
}
.header li span , .body li span{
    padding: .8em 8px;
    min-width: 10em;
    text-align: start;
}
.header li span:first-child, .body li span:first-child {
    min-width: 3em;
}
.gray {
    background:rgba(193, 212, 255, 0.2);
}
</style>