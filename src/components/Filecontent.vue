<template>
    <div class="container">
        <ul class="header">
            <li>
                <span @click="toggleSelectAll" class="wrapper-checkbox">
                    <input type="checkbox" ref="allCheckedbox"/>
                    选择
                </span>
                <span class="icon"/>
                <span>名称</span>
                <span>大小</span>
            </li>
        </ul>
        <ul class="body" ref="body">
            <li v-for="(item,index) in items" :key="index" 
                @click="openFile($event, item)"
            >
                <span class="wrapper-checkbox" @click.stop="select($event, index)">
                    <input type="checkbox"/>
                </span>
                <filetype-icon class="icon" :filetype="item.type"/>
                <span>{{item.name}}</span>
                <span>{{item.length}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {
        "filetype-icon": () => import('./FileTypeIcon')
    },
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
        },
        openFile(event, item){
            if(item.type === 'folder') {
                this.$emit('find', item.name)
            }
        }
    }
}
</script>

<style scoped>
.header li, .body li{
    display: flex;
    border-bottom: 1px solid rgb(221, 221, 221);
}
.header li span , .body li span{
    padding: .8em 8px;
    min-width: 10em;
    text-align: start;
}
.header li span:first-child, .body li span:first-child {
    min-width: 3em;
}
li span.icon {
    min-width: 1em;
}
ul.body li:hover {
    cursor: pointer;
}
.wrapper-checkbox {
    display: flex;
    align-items: center;
}
.wrapper-checkbox::before {/*添加一个罩子以免直接点击checkbox引发bug*/
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
}
.wrapper-checkbox i {
    margin-left: 8px;
    color: rgb(0, 26, 110);
}
</style>
<style scoped>
@media only screen and (max-width: 800px) {
    ul {
        margin: 0 8px;
    }
}
</style>