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
                <span><i class="fa fa-plus" /></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    components: {
        //"item-menu": () => import('../components/Menu.vue')
    },
    props: ["items"],
    data (){
        return {
            showItem: null,
            detail: null
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
        }
    }
}
</script>
<style scoped>
    .container {
        display: flex;
        padding: 1em 16px;
    }
    ul {
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
    ul li span:last-child {
        text-align: end;
        width: 2em;
    }
    ul li {
        padding: 0.7em 0;
        border-top: 1px solid rgba(128, 128, 128, 0.493);
    }
    ul li:first-child {
        font-weight: bold;
        border-top: none;
    }
</style>