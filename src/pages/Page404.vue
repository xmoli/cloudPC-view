<template>
<div>
    <h1>
        404 not found!
    </h1>
    <router-link to="/">返回首页</router-link>
    <span v-on:click="back">
        返回上一级
    </span>
</div>
</template>

<script>
export default {
    name: 'Page404',
    methods: {
        back () {
            window.history.back()
        }
    }
}
</script>

<style scoped>
    h1 {
        color: rgb(4, 67, 148);
    }
    div {
        background: white;
        padding: 2em;
    }
    span {
        color:rgb(4, 67, 148);
    }
    span:hover {
        cursor: pointer;
    }
</style>