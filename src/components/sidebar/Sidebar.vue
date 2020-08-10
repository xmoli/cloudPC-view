<template>
    <div class="sidebar">
        <div class="logo">
            <router-link tag="div" to="/">
                <i class="fa fa-server"/>
            </router-link>
        </div>
        <ul>
            <router-link tag="li" to="/file" >文件</router-link>
            <router-link tag="li" to="/task" >任务</router-link>
            <router-link tag="li" to="/log">日志</router-link>
            <router-link tag="li" to="/user">用户</router-link>
            <router-link tag="li" to="/about">关于</router-link>
        </ul>
    </div>
</template>
<style scoped>
    li:first-child {
        margin-top: 1em
    }
    li {
        line-height: 3em;
    }
    li:hover {
        background: rgb(4, 67, 148);
        cursor: pointer;
    }
    .router-link-active {
        background: rgb(12, 12, 114);
    }
    .sidebar {
        position: fixed;
        z-index: 1100;
        top: 0;
        left: 0;
        width: 12vw;
        height: 100vh;
        background: rgb(42, 45, 70);
        color : white;
    }
    .logo {
        height: 9vh;
        background:rgb(75, 87, 112);
        line-height: 9vh;
        font-size: 2em;
    }
    .fa-server:hover{
        cursor: pointer;
    }
</style>