<template>
    <div class="container">
        <ul class="header">
            <li>
                <span @click="toggleSelectAll" class="wrapper-checkbox">
                    <input type="checkbox" ref="allCheckedbox"/>
                    选择
                </span>
                <span>名称</span>
                <span>大小</span>
            </li>
        </ul>
        <ul class="body" ref="body">
            <li v-for="(item,index) in items" :key="index" 
                :class="{'gray': !(index%2)}" 
                @click="select($event, index)"
            >
                <span class="wrapper-checkbox"><input type="checkbox"/></span>
                <span>{{item.name}}</span>
                <span>{{item.length}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["items"],
    data() {
        return {
            selects: []//列表多选框的抽象
        }
    },
    methods: {
        select(event, index) {
            let checkbox = this.$refs.body.children[index].getElementsByTagName('input')[0]
            if (checkbox.getAttribute('checked') === null) {
                checkbox.setAttribute('checked','checked')
                this.selects[index] = true
            }else{
                checkbox.removeAttribute('checked')
                this.selects[index] = false
            }
        },
        toggleSelectAll() {
            let all = this.$refs.allCheckedbox
            let hasSelected = false
            for (let i = 0; i < this.selects.length; i++ ){
                if (this.selects[i]) {
                    hasSelected = true
                    break;
                }
            }
            let list = this.$refs.body.children
            if (hasSelected) {
                this.selects = []
                list.forEach(ele => {
                    let checkbox = ele.getElementsByTagName('input')[0]
                    checkbox.setAttribute('checked', 'checked')
                });
                all.setAttribute('checked','checked')
            } else {
                this.selects = new Array(this.items.length).fill(true)
                list.forEach(ele => {
                    let checkbox = ele.getElementsByTagName('input')[0]
                    checkbox.removeAttribute('checked')
                });
                all.removeAttribute('checked')
            }
        }
    }
}
</script>

<style scoped>
.header li, .body li{
    display: flex;
}
.header li span , .body li span{
    padding: .8em 8px;
    min-width: 10em;
    text-align: start;
}
.header li span:first-child, .body li span:first-child {
    min-width: 3em;
}
.gray {
    background:rgba(193, 212, 255, 0.2);
}
ul.body li:hover {
    cursor: pointer;
}
.wrapper-checkbox::before {/*添加一个罩子以免直接点击checkbox引发bug*/
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
}
</style>