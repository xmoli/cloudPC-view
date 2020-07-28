<template>
<div>
    <appbar>
    </appbar>
    <sidebar/>
    <content/>
</div>
</template>
<script>
export default {
    components: {
        "appbar": ()=> import("../components/Appbar"),
        "sidebar": ()=> import("../components/sidebar/Sidebar"),
        "content": ()=> import("../components/FileContent.vue"),
    },
    data () {
        return {
            data: []
        }
    }
}
</script>