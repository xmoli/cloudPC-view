<template>
    <div>
        <div>
            <i class="fa fa-bell-o" v-on:click="openMessageMenu"/>
            <item-menu 
                v-bind:open="messageMenu"
                v-on:close-menu="messageMenu=false"
            >
                <ul>
                    <li>消息</li>
                    <li>。。。</li>
                </ul>
            </item-menu>
        </div>
        <div>
            <i class="fa fa-user-o" v-on:click="openUserMenu"/>
            <item-menu 
                v-bind:open="userMenu"
                v-on:close-menu="userMenu=false"
            >
                <ul>
                    <li>设置</li>
                    <li>登出</li>
                </ul>
            </item-menu>
        </div>
    </div>
</template>

<script>
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
</style>