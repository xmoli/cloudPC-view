<template>
    <div class="messagebox">
        <div>
            <i class="fa fa-bell-o" v-on:click="openMessageMenu"/>
            <item-menu 
                class="item-menu"
                ref="messageMenu"
                v-bind:open="messageMenu"
                v-on:close-menu="messageMenu=false"
            >
                <ul>
                    <li ><button>消息</button></li>
                    <li ><button>...</button></li>
                </ul>
            </item-menu>
        </div>
        <div>
            <i class="fa fa-user-o" v-on:click="openUserMenu"/>
            <item-menu 
                class="item-menu"
                ref="userMenu"
                v-bind:open="userMenu"
                v-on:close-menu="userMenu=false"
            >
                <ul>
                    <li ><router-link tag="button" to="/user">设置</router-link></li>
                    <li>
                        <router-link  tag="button" to="/login">
                            <span @click="logout"> 登出 </span>
                        </router-link>
                    </li>
                </ul>
            </item-menu>
        </div>
    </div>
</template>

<script>
import clearToken from '../token/clearToken'
import getToken from '../token/getToken'

export default {
    name: 'Message',
    components: {
        "item-menu": () => import('./Menu.vue')
    },
    data () {
        return {
            messageMenu: false,
            userMenu: false,
        }
    },
    methods: {
        logout () {
            fetch('/user/logout',{
                method:'DELETE',
                headers: {
                    "X-Auth-Token": getToken()
                }
            })
            clearToken()
        },
        openUserMenu () {
            this.userMenu = true
        },
        openMessageMenu () {
            this.messageMenu = true
        }
    }
}
</script>

<style scoped>
    div {
        color: rgb(143, 143, 143);
        display: flex;
        flex-wrap: nowrap;
    }
    i:hover {
        cursor: pointer;
        color: rgb(4, 67, 148);
    }
    i {
        margin: 0 8px;
        font-size: 1.25em;
        font-weight: bold;
    }
    .item-menu {
        width:fit-content;
        transform: translateY(1em);
    }
    .item-menu ul button{
        outline: none;
        width:100%;
        border: none;
        background: transparent;
        padding: 8px 16px;
        color: black;
    }
    .item-menu ul button:hover, .item-menu ul button:focus{
        cursor: pointer;
        background: rgba(0, 0, 0, .2);
    }
</style>