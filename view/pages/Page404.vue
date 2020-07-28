<template>
<div>
    <h1>
        Oops! 网页走丢了
    </h1>
    <ul>
        <li>
            <router-link to="/">
                <i class="fa fa-home"/>
                返回首页
            </router-link>
        </li>
        <li>
            <span v-on:click="back">
                <i class="fa fa-arrow-left"/>
                返回上一级
            </span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Page404',
    created () {
      document.title =   "404 page"
    },
    methods: {
        back () {
            window.history.back()
        }
    }
}
</script>

<style scoped>
    a {
        color: white;
    }
    div {
        color: white;
        background: #1d1f2e;
        padding: 2em;
    }
    span:hover {
        cursor: pointer;
    }
</style>