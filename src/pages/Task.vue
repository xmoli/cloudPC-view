<template>
    <div>
        <Appbar>
            <div class="new-button">
                <i class="fa fa-plus"/>
                新建
            </div>
        </Appbar>
        <Sidebar>
        </Sidebar>
        <Content class="content"
            v-bind:items="items"
            v-on:delete-task="destoryTask"
            v-on:change-task="changeTask"
            v-on:clone-task="cloneTask"
        ></Content>
        <pop-box class="pop-box" v-bind:open="false">
            <ul>
                <li>
                    <label>
                        名称:
                    </label>
                    <input/>
                </li>
                <li>
                    <label>
                        指令:
                    </label>
                    <input/>
                    </li>
                <li>
                    <label>
                        cron表达式:
                    </label>
                    <textarea/>
                </li>
                <li class="submit-button">
                    修改
                </li>
            </ul>
        </pop-box>
    </div>
</template>

<script>

export default {
    components: {
        Sidebar: () => import('../components/Sidebar'),
        Appbar: () => import('../components/Appbar'),
        Content: () => import('../components/CommonContent.vue'),
        "pop-box": () => import('../components/popbox.vue')
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
        },
        async changeTask () {

        },
        cloneTask() {

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
.pop-box ul li {
    display: flex;
}
.pop-box ul li label{
    width: 6em;
}
.pop-box ul li {
    margin-bottom: 8px;
}
.pop-box .submit-button {
    display: inline-block;
    margin-top: 8px;
    height: 2.5em;
    width: 100%;
    color: white;
    border-radius: 0.2em;
    padding: 0;
    line-height: 2.5em;
    background: rgb(5, 5, 36)
}
.pop-box .submit-button:hover {
    cursor: pointer;
}
.pop-box textarea {
    height: 1.5em;
    padding: 4px;
}
.pop-box input {
    padding: 4px;
}
.new-button {
    display: flex;
    overflow: hidden;
    width: 5em;
    justify-content: center;
    align-items: center;
    border-radius: 0.2em;
    line-height: 1em;
    min-width: 1.75em;
    min-height: 1.75em;
    color: white;
    background: rgb(0, 26, 110);
}
.new-button i {
    margin-right:5px;
}
.new-button:hover {
    cursor: pointer;  
}
</style>