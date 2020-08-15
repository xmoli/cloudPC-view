<template>
    <div class="container">
        <ul class="lhead">
            <li>
                <span class="level">级别</span>
                <span class="node">服务器节点</span>
                <span class="time">时间</span>
            </li>
        </ul>
        <ul class="lbody">
            <li v-for="(item, index) in items" :key="index"
                @click="toggleList($event,index)"
            >
                <ul class="item">
                    <li class="row">
                        <span :class="level(item.level)">{{item.level.toUpperCase()}}</span>
                        <span class="node">{{item.node}}</span>
                        <span class="time">{{item.time}}</span>
                    </li>
                    <li class="message">
                        {{item.message}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["items"],
    data () {
        return {
            status: [],
            hasOpen: false
        }
    },
    methods: {
        toggleList (e,index) {
            this.status[index] = !this.status[index]
            this.status = Object.assign([], this.status)
            //控制全列表状态
            if (this.status[index]) {
                this.hasOpen = true
            }else {
                if (this.status.indexOf(true) === -1) {
                    this.hasOpen = false
                }
            }
        },
        toggleAllList () {
            this.status = []
            this.hasOpen = false
            this.status = Object.assign({}, this.status)
        },
        level (level) {
            let base = "level "
            return base + level
        }
    }

}
</script>
<style scoped>
/**mobile */
@media only screen and (max-width: 800px){
    ul li span.node {
        width: 31vw;
    }
    ul li span.time {
        width: 31vw;
    }
    ul li span.level {
        width: 21vw;
    }
    ul {
        margin: 0 8px;
    }
    .angle {
        display: none;
    }
    ul.list-head span{
        padding: .8em 0;
    }
}
</style>
<style lang="stylus" scoped>
ul li 
    background white

.level 
    width 20vw
.node
    width 25vw
.time
    width 25vw
.lhead li, .lbody .row, .lbody .item
    display flex
    padding .9em
.lbody .item
    flex-direction column
    margin-bottom .5em
.lbody .item .message
    width 75vw
    color gray
.info
    color gray
.debug
    color black
.error
    color red
</style>