<template>
    <keep-alive>
        <div>
        <app-bar @search="showResult">
            <select class="filter">
                <option value="1">级别</option>
                <option value="2">节点</option>
                <option value="3">时间</option>
            </select>
        </app-bar>
        <message-box :message="message"/>
        <fetch-progress :status="progress"/>
        <side-bar/>
        <Content class="content" :items="items"></Content>
        </div>
    </keep-alive>
</template>

<script>
import getToken from '../util/getToken'

export default {
    mounted () {
        document.title = 'ADMIN | 日志'
        this.getLogs()
    },
    components: {
        Content: () => import('../components/LogContent.vue'),
        "app-bar": () => import('../components/Appbar.vue'),
        "side-bar": () => import('../components/sidebar/Sidebar.vue'),
        "fetch-progress": ()=> import('../components/FetchProgress'),
        "message-box": ()=> import('../components/Messagebox')
    },
    data () {
        return {
            data: [],
            keyword: '',
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
                return i.Message.search(this.keyword)+1
            })
        }
    },
    methods: {
        getLogs () {
            this.progress = true
            fetch("api/log",{
                method: "GET",
                headers: {
                    "X-Auth-Token": getToken()
                }
            })
                .then(res => res.json())
                .then( json => {
                    if (json.error) {
                        console.log(json.error)
                    } else {
                        this.data = json.data
                        this.progress = false
                    }
                })
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
    margin-left: 16vw;
    margin-top: 15vh;
    margin-bottom: 6em;
}
select.filter {
    margin-left: -2em;
    height: 2.5em;
    padding: 8px;
}
.progress {
    background: rgb(255, 97, 97) !important;
}
</style>
<style scoped>
/** mobile */
@media only screen and (max-width: 800px) {
    .content{
        margin: 0;
        margin-top: 3.5em;
        width: 100%;
    }
}
</style>