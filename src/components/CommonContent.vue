<template>
    <div class="container">
        <ul class="title">
            <li class="first">
                <span>ID</span>
                <span>名称</span>
                <span>状态</span>
                <span class="last-span">
                    操作
                </span>
            </li>
        </ul>
        <ul class="content">
            <li v-for="(item, index) in items" :key="index">
                <span>{{item.Id}}</span>
                <span>{{item.Name}}</span>
                <span v-if="item.Status" class="fa fa-circle-o">
                </span>
                <span v-else class="fa fa-stop-circle-o" />
                <span
                    class="last-span"
                    v-on:click="openMenu($event, index)"
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
                    <li class="warn" v-on:click.stop="$emit('delete-task', targetItem)">删除</li>
                    <li v-on:click.stop="$emit('change-task', targetItem)" >修改</li>
                    <li v-on:click.stop="$emit('clone-task', targetItem)" >克隆</li>
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
            targetItem: null,
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
        openMenu (e, index) {
            this.targetItem = index
            let target = e.currentTarget
            let newPosition = {
                x: target.scrollLeft,
                y: target.scrollHeight,
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
    ul li {
        display: flex;
    }
    ul li span {
        display: inline-block;
        min-width: 15vw;
    }
    ul.title li span {
        text-indent: .5em;
    }
    ul.content li:hover {
        cursor: pointer;
        background: rgba(0,0,0,.1);
    }
    .container ul.content {
        max-height: 75vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .container>ul>li>span.last-span:hover{
        background: white;
    }
    .container>ul>li {
        padding: 0.7em 0;
        border-top: 1px solid rgba(128, 128, 128, 0.493);
    }
    .container>ul:first-child>li:first-child {
        font-weight: bold;
        border-top: none;
    }
    .item-menu {
        overflow: hidden;
        width:fit-content;
    }
    .item-menu ul li {
        display: block;
        padding: 8px 3em;
    }
    .item-menu .warn {
        background: rgba(185, 0, 0, 0.808);
        color: white;
    }
    .item-menu .warn:hover {
        background: rgb(212, 0, 0);
    }
    .content .fa-circle-o {
        color: green
    }
    .content .fa-stop-circle-o {
        color: orange;
    }
</style>