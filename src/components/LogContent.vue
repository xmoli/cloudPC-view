<template>
    <div class="container">
        <ul class="list-head">
            <li>
                <span>级别</span>
                <span>信息</span>
                <span>类型</span>
                <span>时间</span>
                <span 
                    @click="toggleAllList"
                    class="last"
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
                <span>
                    {{item.Level}}
                </span>
                <span>
                    {{item.Message}}
                </span>
                <span>
                    {{item.Node}}
                </span>
                <span>
                    {{item.Ctime}}
                </span>
                <span>
                    <i :class="{'fa': true, 'fa-angle-left': !status[index], 'fa-angle-down': status[index]}"/>
                </span>
                </div>
                <div :class="{'list-content': status[index], 'close': !status[index]}"
                    @click.stop
                >
                    <p>
                        {{item.Content}}
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
    padding: 16px;
}
ul li {
    display: flex;
}
ul.list-body li {
    flex-direction: column;
    align-items: flex-start;
}
ul.list-body  li {
    border-top-width: 1px;
    border-top-color: rgba(128, 128, 128, 0.5);
    border-top-style: solid;
    padding: 16px 0;
}
ul li span {
    display: inline-block;
    width: 10em;
}
.list-content {
    width: 100%;
    line-height: 1.5em;
    box-shadow: inset 1px 1px 5px gray;
    margin-top: 16px;
    margin-bottom: -16px;
    color: grey;
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