<template>
    <span>
        <i :class="typeIcon"/>
    </span>
</template>
<script>
export default {
    props: ['type'],
    computed: {
        typeIcon (type) {
            if (type=== 'folder') {
                return "fa fa-folder"
            } else {
                return `fa fa-file-${type}-o`
            }
        }
    }
}
</script>