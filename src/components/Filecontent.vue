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
                <span class="wrapper-checkbox">
                    <input type="checkbox"/>
                    <i v-show="item.type === 'folder'" class="fa fa-folder"/>
                    <i v-show="item.type === 'photo'" class="fa fa-file-photo-o"/>
                    <i v-show="item.type === 'text'" class="fa fa-file-text-o"/>
                    <i v-show="item.type === 'pdf'" class="fa fa-file-pdf-o"/>
                    <i v-show="item.type === 'excel'" class="fa fa-file-excel-o"/>
                    <i v-show="item.type === 'word'" class="fa fa-file-word-o"/>
                    <i v-show="item.type === 'audio'" class="fa fa-file-audio-o"/>
                    <i v-show="item.type === 'movie'" class="fa fa-file-movie-o"/>
                    <i v-show="item.type === 'archive'" class="fa fa-file-archive-o"/>
                </span>
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
    background:rgb(205, 220, 255);
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