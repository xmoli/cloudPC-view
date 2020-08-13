<template>
    <div class="container">
        <ul class="list-head">
            <li>
                <span class="level">级别</span>
                <span>服务器节点</span>
                <span>时间</span>
                <span 
                    @click="toggleAllList"
                    class="last angle"
                >
                    <i :class="{'fa': true, 'fa-angle-down': hasOpen, 'fa-angle-left': !hasOpen}"/>
                </span>
            </li>
        </ul>
        <ul class="list-body">
            <li v-for="(item, index) in items" :key="index"
                @click="toggleList($event,index)"
            >
                <div class="list-info">
                <span :class="{level: true, info: item.level==='info', warn: item.level === 'warn' , error: item.level == 'error'}">
                    {{item.level.toUpperCase()}}
                </span>
                <span class="node">
                    {{item.node}}
                </span>
                <span class="time">
                    {{item.time}}
                </span>
                <span class="angle">
                    <i :class="{'fa': true, 'fa-angle-left': !status[index], 'fa-angle-down': status[index]}"/>
                </span>
                </div>
                <div :class="{'list-content': status[index], 'close': !status[index]}"
                    @click.stop
                >
                    <p>
                        {{item.message}}
                    </p>
                </div>
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
        }
    }

}
</script>

<style scoped>
.container {
    background: white;
    border-radius: 0.25em;
}
ul.list-head {
    font-weight: bold;
}
.container>ul {
    padding: 0 1em;
}
.container>ul>li {
    display: flex;
    border-bottom: 1px solid rgb(189, 189, 189);
}
ul.list-body li {
    flex-direction: column;
    align-items: flex-start;
}
ul li span {
    width: 20em;
    display: inline-block;
    padding: 0.8em 0;
}
span.level {
    width: 3em;
}
span.angle {
    width: 2em;
}
.info {
    color: gray;
}
.warn {
    color: orange;
}
.error {
    color: red;
}
.list-content {
    width: 100%;
    line-height: 1.5em;
    box-shadow: inset 1px 1px 5px gray;
    color: grey;
    margin-bottom: 1em;
}
.list-content:hover {
    cursor: text;
}
p {
    text-indent: 2em;
    text-align: left;
    margin: 1em 16px;
    margin-bottom: 2em;
}
.close {
    display: none;
}
ul.list-body li:hover {
    cursor: pointer;
}
ul.list-head span.last:hover {
    cursor: pointer;
}
</style>
<style scoped>
/**mobile */
@media only screen and (max-width: 800px){
    ul li span {
        width: 20vw;
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