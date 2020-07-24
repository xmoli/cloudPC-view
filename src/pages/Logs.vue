<template>
    <div>
        <app-bar>
            <ul class="filter">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
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
        this.token = getToken()
        this.getLogs()
    },
    components: {
        Content: () => import('../components/LogContent.vue'),
        "app-bar": () => import('../components/Appbar.vue'),
        "side-bar": () => import('../components/Sidebar.vue')
    },
    data () {
        return {
            data: [],
            token: ''
        }
    },
    computed: {
        items () {
            return this.data.filter(i => {
                if (!this.keyword) {
                    return true
                }
                return i.Name.search(this.keyword)+1
            })
        }
    },
    methods: {
        getLogs () {
            fetch("api/log",{
                method: "GET",
                Token: this.token
            })
                .then(res => res.json())
                .then( json => {
                    if (json.error) {
                        console.log(json.error)
                    } else {
                        this.data = json.data
                    }
                })
        }
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    margin: 16px auto;
}
</style>