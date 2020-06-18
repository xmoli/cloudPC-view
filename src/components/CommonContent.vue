<template>
    <div class="container">
        <ul>
            <li v-for="item in items" :key="item.name"
                v-on:click="showDetail"
            >
                <span>{{item.name}}</span>
                <span>{{item.status}}</span>
                <task-option>
                    <li v-on:click="clone">克隆</li>
                    <li v-on:click="destory">删除</li>
                </task-option>
            </li>
        </ul>
        <div v-if="showItem" class="detail-box">
            <ul>
                <li>{{detail.name}}</li>
                <li>{{detail.status}}</li>
                <li>{{detail.createDate}}</li>
                <li>{{detail.frequey}}</li>
                <li>{{detail.lastTime}}</li>
            </ul> 
        </div>
    </div>
</template>
<script>

import fetchAPI from '../util/fetchAPI'

export default {
    props: ["taskSchedule"],
    components: {
        taskOption: () => import('../components/ItemOption')
    },
    data (){
        return {
            items: [],
            showItem: null,
            detail: null
        }
    },
    created () {
        this.getTaskSchedule()
    },
    methods: {
        showDetail (e) {
            if (this.showItem) {
                this.showItem.className = ''
            }
            e.current.target.className = 'showed-item'
            this.showItem = e.current.target
            this.detail = schedule[this.showItem]
        },
        async getTaskSchedule () {
            const res = await fetchAPI('api/task-schedule')
            if (res.error) {//@todo:有待考证api的用法
                this.error = res.error
            } else {
                this.items = res
            }
        },
        async addTask () {
            const res = await fetchAPI('api/task-schedule', {
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
    .container {
        display: flex;
        padding: 1em 16px;
    }
    ul {
        border-radius: 0.25em;
        background: white;
        width: 50%;
        margin: 0 8px 0 8px;
    }
    li {
        border-top: 1px solid rgba(185, 185, 185, 0.562);
        padding: 1em 16px;
    }
    li:hover {
        background: rgba(4, 66, 148, 0.342);
    }
    li:first-child {
        border:none;
        border-radius: 0.3em 0.3em 0 0;
    }
    li:last-child {
        border-radius: 0 0 0.3em 0.3em;
    }
    .detail-box {
        padding: 1em;
        width: 50%;
        margin: 0 8px 0 8px;
        background: white;
        border-radius: 0.3em;
    }
    /*显示项 */
    .showed-item {
        filter: grayscale(0.2);
    }
</style>