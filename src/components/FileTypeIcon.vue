<template>
    <span>
        <i :class="typeIcon()"/>
    </span>
</template>
<script>
export default {
    props: {
        filetype: String
    },
    methods: {
        typeIcon () {
            let type =  this.filetype
            if (type=== 'folder') {
                return "fa fa-folder"
            } else {
                return `fa fa-file-${type}-o`
            }
        }
    }
}
</script>