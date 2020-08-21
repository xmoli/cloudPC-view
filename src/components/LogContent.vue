<template>
    <content-base class="container">
        <ul class="list lhead">
            <li>
                <span class="level">级别</span>
                <span class="node">服务器节点</span>
                <span class="time">时间</span>
            </li>
        </ul>
        <ul class="list lbody">
            <li v-for="(item, index) in items" :key="index"
                @click="toggleList($event,index)"
            >
                <ul class="item">
                    <li class="row">
                        <span :class="level(item.level)">{{item.level.toUpperCase()}}</span>
                        <span class="node">{{item.node}}</span>
                        <span class="time">{{item.time}}</span>
                    </li>
                    <li>
                        <span class="level"></span>
                        <span class="message">{{item.message}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </content-base>
</template>
<script>
export default {
    props: ["items"],
    components: {
        "content-base": ()=>import('./Content')
    },
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
.level 
    width 100px
    text-align left
.node
    text-align left
    width 430px
.time
    text-align left
    width 162px
.lhead>li , .lbody>li
    display flex
    padding 8px
.lbody .item
    margin 24px 0
    flex-direction column
    margin-bottom .5em
    & li
        display flex
    & .row
        border-top 1px solid #cbcbcb
        padding 8px 0
.lbody .item .message
    font-size .9em
    text-indent 2em
    text-align start
    width 642px
    padding 8px 0
.info
    color gray
.debug
    color black
.error
    color red
</style>