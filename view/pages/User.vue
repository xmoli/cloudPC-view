<template>
    <div>
        <appbar>
        </appbar>
        <sidebar />
        <user-content/>
    </div>
</template>
<script>
export default {
    components: {
        "appbar": () => import('../components/Appbar'),
        "sidebar": () => import('../components/sidebar/Sidebar'),
        "user-content": () => import('../components/UserContent')
    }
}
</script>