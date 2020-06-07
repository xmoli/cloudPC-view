<template>
    <div>
        <i class="fa fa-filter"/>
        <ul>
            <li>错误</li>
            <li>警告</li>
            <li>调试</li>
            <li class="active">全部</li>
        </ul>
    </div>
</template>

<style scoped>
    div {
        padding: 0 8px 0 8px
    }
    .fa-filter {
        font-size: 1.25em;
        color: rgb(143, 143, 143);
    }
    ul {
        display: flex;
    }
    ul>li{
        margin: 0 8px 0 8px;
    }
    li:hover {
        cursor: pointer;
    }
    li.active {
        background: rgb(18, 74, 148);
        border-radius: 0.25em;
        padding: 2px;
    }
</style>