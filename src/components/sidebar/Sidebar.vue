<template>
    <div class="sidebar">
        <div class="logo">
            <router-link tag="div" to="/">
                <i class="fa fa-server"/>
            </router-link>
        </div>
        <ul>
            <router-link tabindex="1" tag="li" to="/file" >文件</router-link>
            <router-link tabindex="1" tag="li" to="/task" >任务</router-link>
            <router-link tabindex="1" tag="li" to="/log">日志</router-link>
            <router-link tabindex="1" tag="li" to="/user">用户</router-link>
            <router-link tabindex="1" tag="li" to="/about">关于</router-link>
        </ul>
    </div>
</template>
<style scoped>
@media screen and (min-width: 800px) {
    li:first-child {
        margin-top: 1em
    }
    li {
        line-height: 3em;
        outline: none;
    }
    li:hover {
        cursor: pointer;
    } 
    li:focus {
                box-shadow: -2px -2px 5px rgb(160, 43, 0),
        2px 2px 5px rgb(160, 43, 0),
        2px -2px 5px rgb(160, 43, 0),
        -2px 2px 5px rgb(160, 43, 0);
    }
    .router-link-active {
        background: rgb(4, 67, 148);
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
    div.logo {
        height: 9vh;
        line-height: 9vh;
        font-size: 2em;
    }
    .fa-server:hover{
        cursor: pointer;
    }
}
</style>
<style scoped>
/*mobile*/
@media screen and (max-width: 800px){
    .sidebar {
        position: fixed;
        z-index: 1100;
        bottom: 0;

        background: rgb(243, 243, 243);
        height: 3em;
        width: 100%;    }
    .logo, .sidebar ul li:last-child {
        display: none;
    }
    .sidebar ul {
        display: flex;
        width: 100%;
    }
    .sidebar ul li {
        width: 25%;
        height: 3em;
    }
    .router-link-active {
        background: rgb(4, 67, 148);
        color: white;
        border-radius: .3em;
    }
}
</style>