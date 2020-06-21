<template>
    <div>
        <Appbar/>
        <Sidebar/>
        <Content class="content"
            v-bind:items="items"
        ></Content>
    </div>
</template>

<script>

export default {
    components: {
        Sidebar: () => import('../components/Sidebar'),
        Appbar: () => import('../components/Appbar'),
        Content: () => import('../components/CommonContent.vue')
    },
    data () {
        return {
            items: []
        }
    },
    created () {
        document.title = 'admin - task'
        this.getTaskSchedule()
    },
    updated () {
        document.title = 'admin - task'
    },
    methods: {
        async getTaskSchedule () {
            const res = await fetch('api/task-schedule')
            const json = await res.json()
            if (res.error) {//@todo:有待考证api的用法
                this.error = json
            } else {
                this.items = json
            }
        },
        async addTask () {
            const res = await fetch('api/task-schedule', {
                method: 'PUT'
            })
            if (res.error) {
                this.error = res.error
            } else {
                this.message = res
            }
        },
        async destoryTask () {
            const res = await fetch('api/task-schedule',{
                method: 'DELETE'
            })
            if (res.error) {
                this.error = res.error
            } else {
                this.message = res
            }
        }
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    left: 12vw;
    top: 10vh;
}
</style>