<template>
    <div>
        <div v-if="page">
            <TaskTool />
        </div>
        <div v-else-if="page">
            <LogsTool />
        </div>
    </div>
</template>

<script>
import TaskTool from './TaskTool.vue'
import LogsTool from './LogsTool.vue'

export default {
    name: 'PageTool'
}
</script>