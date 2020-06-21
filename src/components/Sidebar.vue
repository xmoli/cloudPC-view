<template>
    <div class="sidebar">
        <div class="logo">
            <i class="fa fa-server"/>
        </div>
        <ul>
            <router-link tag="li" to="/statistics" >统计</router-link>
            <router-link tag="li" to="/task" >任务</router-link>
            <router-link tag="li" to="/logs">日志</router-link>
            <router-link tag="li" to="/user">用户</router-link>
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
        background: black;
    }
    .sidebar {
        position: fixed;
        z-index: 1100;
        top: 0;
        left: 0;
        width: 12vw;
        height: 100vh;

        background: rgb(29, 31, 46);
        color : white;
    }
    .logo {
        height: 9vh;
        background:rgb(75, 87, 112);
        line-height: 9vh;
        font-size: 3em;
    }
    .fa-server:hover{
        color: rgba(4, 66, 148);
        cursor: pointer;
    }
</style>