<template>
    <div>
        <app-bar @search="showResult">
            <select class="filter">
                <option value="1">类型</option>
                <option value="2">日期</option>
                <option value="3">级别</option>
                <option value="4">时间</option>
            </select>
        </app-bar>
        <side-bar/>
        <Content class="content" :items="items"></Content>
    </div>
</template>

<script>
import getToken from '../util/getToken'

export default {
    mounted () {
        document.title = 'ADMIN | 日志',
        this.headers = new Headers()
        this.headers.append("X-Auth-Token", getToken())
        this.getLogs()
    },
    components: {
        Content: () => import('../components/LogContent.vue'),
        "app-bar": () => import('../components/Appbar.vue'),
        "side-bar": () => import('../components/sidebar/Sidebar.vue')
    },
    data () {
        return {
            data: [],
            token: '',
            keyword: ''
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
            fetch("api/log",{
                method: "GET",
                headers: this.headers
            })
                .then(res => res.json())
                .then( json => {
                    if (json.error) {
                        console.log(json.error)
                    } else {
                        this.data = json.data
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
    width: 60vw;
    margin-left: 16vw;
    margin-top: 15vh;
    margin-bottom: 6em;
}
select.filter {
    margin-left: -2em;
    height: 2.5em;
    padding: 8px;
}
</style>