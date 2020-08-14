<template>
    <keep-alive>
        <div>
        <message-box :message="message"/>
        <Appbar v-on:search="showResult">
            <div class="new-button"
                @click.stop="openAddPop"
            >
                <i class="fa fa-plus"/>
                新建
            </div>
            <pop-box 
                class="pop-box"
                v-bind:open="popboxAnchor"
                @keypress.esc="popboxAnchor = false"
                @close="popboxAnchor = false"
            >
                <form @submit.prevent="addTask">
                        <label>
                            名称 
                        <input v-model="taskName"/>
                        </label>
                        <label>
                            指令
                        <input v-model="taskCommand"/>
                        </label>
                        <label>
                            表达式
                        <input v-model="taskCron"/>
                        </label>
                        <input class="submit-button" type="submit" value="添加"/>
                </form>
            </pop-box>
        </Appbar>
        <fetch-progress :status="progress"/>
        <Sidebar>
        </Sidebar>
        <Content class="content"
            v-bind:items="items"
            v-on:delete-task="destoryTask"
            v-on:change-task="openChangePop"
            v-on:clone-task="cloneTask"
        ></Content>
        <pop-box class="pop-box" 
            v-bind:open="changeAnchor"
            @keypress.esc="changeAnchor = false"
            @close="changeAnchor = false"
        >
            <form @submit.prevent="changeTask">
                    <label>
                        名称 
                    <input v-model="taskNameC"/>
                    </label>
                    <label>
                        指令
                    <input v-model="taskCommandC"/>
                    </label>
                    <label>
                        表达式
                    <input v-model="taskCronC"/>
                    </label>
                    <input class="submit-button" type="submit" value="修改"/>
            </form>
        </pop-box>
        </div>
    </keep-alive>
</template>

<script>
import getToken from '../util/getToken'

export default {
    components: {
        Sidebar: () => import('../components/sidebar/Sidebar'),
        Appbar: () => import('../components/Appbar'),
        Content: () => import('../components/TaskContent.vue'),
        "pop-box": () => import('../components/popbox.vue'),
        "fetch-progress": ()=> import('../components/FetchProgress'),
        "message-box": ()=> import('../components/Messagebox')
    },
    data () {
        return {
            headers: null,
            data: [],
            keyword: '',
            popboxAnchor: false,
            changeAnchor: false,
            taskName: '',
            taskCommand: '',
            taskCron: '',
            taskNameC: '',
            taskCommandC: '',
            taskCronC: '',
            clipData: {},
            progress: false,
            message: null
        }
    },
    computed: {
        items () {
            return this.data.filter(i => {
                if (!this.keyword) {
                    return true
                }
                return i.Name.search(this.keyword)+1 | (i.Id == this.keyword)
            })
        }
    },
    mounted () {
        document.title = 'ADMIN | 任务'
        let headers = new Headers()
        headers.append("X-Auth-Token", getToken())
        this.headers = headers
        this.getTaskSchedule()
    },
    methods: {
        async getTaskSchedule () {
            this.progress = true
            const res = await fetch('api/scheduled-task',{
                method: "GET",
                headers: this.headers
            })
            const json = await res.json()
            if (json.error) {
                console.log(json.error)
            } else {
                this.data = json.data
                this.progress = false
            }
        },
        async addTask () {
            /*
                @todo: check input
            */
            let data = {
                Name: this.taskName,
                CronExpression: this.taskCron,
                Command: this.taskCommand
            }
            const res = await fetch('api/scheduled-task', {
                method: 'POST',
                headers: {
                    "X-Auth-Token": getToken()
                },
                body: JSON.stringify(data)
            })
            try {
                const json = await res.json()
                if (json.error) {
                    console.log(json.error)
                } else {
                    this.data.push(data)
                }
                this.popboxAnchor = false
            }catch{
                console.log('添加失败')
            }
        },
        async destoryTask (index) {
            console.log('delete')
            let id = this.items[index].Id
            const res = await fetch('api/scheduled-task/?id='+id,{
                method: 'DELETE',
                headers: this.headers,
            })
            try {
                const json = await res.json()
                if (json.error) {
                    console.log(json)
                } else {
                    this.data.splice(index,1)
                } 
            } catch (e) {
                console.log('删除第', id, '个任务失败')
            }
        },
        async changeTask (data) {
            const res = await fetch('api/scheduled-task/',{
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(data)
            })
            const json = await res.json()
            if (json.error) {
                console.log(json)
            } else {
                this.changeAnchor = false
            }
        },
        openAddPop () {
            this.taskName = ''
            this.taskCommand = ''
            this.taskCron = ''
            this.popboxAnchor = true
        }
        ,
        openChangePop (index) {
            let data = this.items[index]
            this.taskNameC = data.Name
            this.taskCommandC = data.Command
            this.taskCronC = data.CronExpression
            this.changeAnchor = true
        },
        checkInput () {
            let task
            if (this.taskName.trim().length == 0) {
                task.error.push(0)
            }else {
                task.name = this.taskName.trim()
            }
            if (this.taskCommond.trim().length == 0) {
                task.error.push(1)
            }else {
                task.command = this.taskCommand.trim()
            }
            if (this.taskCron.trim().length == 0) {
                task.error.push(2)
            }else {
                task.cron = this.taskCron.trim()
            }
            return task
        },
        cloneTask(index) {
            this.clipData = this.data[index]
        },
        showResult (keyword) {//显示搜索结果
            this.keyword = keyword
        }
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    min-width: 60vw;
    margin-left:16vw;
    margin-top: 15vh;
}
.pop-box form {
    display: flex;
    flex-direction: column;
}
.pop-box form label{
    margin: 8px;
    display: flex;
    letter-spacing: 0.25em;
}
.pop-box ul li {
    margin-bottom: 8px;
}
.pop-box .submit-button {
    margin-top: 8px;
    height: 2.5em;
    width: 100%;
    color: white;
    border-radius: 0.2em;
    border: 1px solid transparent;
    padding: 0;
    line-height: 1em;
    background: rgb(5, 5, 36)
}
.pop-box .submit-button:hover {
    cursor: pointer;
}
.pop-box input{
    border: 1px solid grey;
    outline: none;
    padding: 8px;
    width: 40em;
}
.pop-box input:focus{
    border: 1px solid rgb(21, 21, 138);
}
.new-button {
    display: flex;
    overflow: hidden;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 0.25em;
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
<style scoped>
/* moblie */
@media only screen and (max-width: 800px) {
    .content {
        margin: 0;
        margin-top: 3.5em;
        width: 100%;
    }
}
</style>