<template>
    <div class="container">
        <ul class="title">
            <li class="first">
                <span>ID</span>
                <span>名称</span>
                <span>状态</span>
                <span/>
            </li>
        </ul>
        <ul class="content">
            <li v-for="item in items" :key="item.name">
                <span>{{item.Id}}</span>
                <span>{{item.Name}}</span>
                <span>{{item.Status}}</span>
                <span
                    class="last"
                    v-on:click="openMenu"
                >
                <i class="fa fa-ellipsis-h" />
                </span>
            </li>
            <item-menu 
                class="item-menu"
                v-bind:position="menuPosition"
                v-on:close-menu="closeMenu"
                >
                <ul>
                    <li class="warn" v-on:click.stop="$emit('delete-task')">删除</li>
                    <li v-on:click.stop="$emit('change-task')" >修改</li>
                    <li v-on:click.stop="$emit('clone-task')" >克隆</li>
                </ul>
            </item-menu>
        </ul>
    </div>
</template>
<script>
export default {
    components: {
        "item-menu": () => import('../components/Menu.vue')
    },
    props: ["items"],
    data (){
        return {
            showItem: null,
            detail: null,
            menuPosition: {
                x: 0,
                y: 0,
                open: false
            }
        }
    },
    methods: {
        showDetail (e) {
            if (this.showItem) {
                this.showItem.className = ''
            }
            e.current.target.className = 'showed-item'
            this.showItem = e.current.target
            this.detail = this.items[this.showItem]
        },
        openMenu (e) {
            let target = e.currentTarget
            let newPosition = {
                x: target.offsetLeft,
                y: target.offsetTop,
                open: true,
            }
            this.menuPosition = newPosition//为了能监听
        },
        closeMenu (e) {
            this.menuPosition = {
                x: 0,
                y: 0,
                open: false
            }
        },
        delTargetTask () {

        }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
        padding: 1em 16px;
        flex-direction: column;
    }
    .container>ul {
        background: white;
        margin: 0 8px 0 8px;
        border-spacing: 0; 
    }
    .container>ul.title {
        border-radius: .2em .2em 0 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.486);
    }
    ul li span {
        display: inline-block;
        width: 18vw;
        text-align: left;
        padding: 0 8px;
    }
    ul.content li:hover {
        cursor: pointer;
        background: rgba(0,0,0,.1);
    }
    .container>ul.content {
        max-height: 75vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .container>ul>li>span:last-child {
        text-align: center;
        width: 4em;
    }
    .container>ul>li>span.last:hover{
        background: white;
    }
    .container>ul>li {
        padding: 0.7em 0;
        border-top: 1px solid rgba(128, 128, 128, 0.493);
    }
    .container>ul>li:first-child {
        font-weight: bold;
        border-top: none;
    }
    .item-menu {
        text-align: left;
        overflow: hidden;
        width:fit-content;
        transform: translateX(1em);
    }
    .item-menu ul li {
        display: block;
        padding: 4px 8px;
    }
    .item-menu .warn {
        background: rgba(185, 0, 0, 0.808);
        color: white;
    }
    .item-menu .warn:hover {
        background: rgb(212, 0, 0);
    }

</style>