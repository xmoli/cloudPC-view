<template>
    <div class="container">
        <ul>
            <li>
                <span>ID</span>
                <span>名称</span>
                <span>状态</span>
                <span></span>
            </li>
            <li v-for="item in items" :key="item.name">
                <span>{{item.Id}}</span>
                <span>{{item.Name}}</span>
                <span>{{item.Status}}</span>
                <span
                    v-on:click="openMenu"
                >
                <item-menu 
                    class="item-menu"
                    v-bind:open="open"
                    v-on:close-menu="closeMenu"
                >
                    <ul>
                        <li>克隆</li>
                        <li>立即执行</li>
                        <li>删除</li>
                    </ul>
                </item-menu>
                <i class="fa fa-ellipsis-h" />
                </span>
            </li>
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
            open: false
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
        openMenu () {
            this.open = true;
        },
        closeMenu () {
            this.open = false;
        }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
        padding: 1em 16px;
    }
    .container>ul {
        border-radius: 0.25em;
        background: white;
        margin: 0 8px 0 8px;
        border-spacing: 0; 
    }
    ul li span {
        display: inline-block;
        width: 7em;
        text-align: left;
        padding: 0 8px;
    }
    ul li span:hover {
        cursor: pointer;
    }
    .container>ul>li>span:last-child {
        text-align: end;
        width: 2em;
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
    }
    .item-menu>ul>li {
        margin: 8px 0;
    }
</style>