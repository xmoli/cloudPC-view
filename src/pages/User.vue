<template>
    <div>
        <user-nav>
        </user-nav>
        <sidebar />
        <router-view/>
    </div>
</template>
<script>
export default {
    components: {
        "user-nav": () => import('../components/UserNav'),
        "sidebar": () => import('../components/sidebar/Sidebar')
    },
    created(){
        document.title = "ADMIN | 用户"
    }
}
</script>