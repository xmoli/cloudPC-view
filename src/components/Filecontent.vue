<template>
    <content-base class="container">
        <ul class="header">
            <li>
                <span @click="toggleSelectAll" class="wrapper-checkbox">
                    <input type="checkbox" ref="allCheckedbox"/>
                </span>
                <span class="icon"/>
                <span class="name">名称</span>
                <span class="length">大小</span>
            </li>
        </ul>
        <ul class="body" ref="body">
            <li v-for="(item,index) in items" :key="index" 
                @click="openFile($event, item)"
                :class="{'file':item.type !='folder'}"
            >
                <span class="wrapper-checkbox" @click.stop="select($event, index)">
                    <input type="checkbox"/>
                </span>
                <filetype-icon class="icon" :filetype="item.type"/>
                <span class="name">{{item.name}}</span>
                <span class="length">{{item.length}}</span>
            </li>
        </ul>
    </content-base>
</template>

<script>
export default {
    components: {
        "filetype-icon": () => import('./FileTypeIcon'),
        "content-base": () => import('./Content')
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
                this.$emit('find', item)
            }else {
                this.$emit('download', item)
            }
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 800px) {
    ul {
        margin: 0 8px;
    }
}
</style>
<style lang="stylus" scoped>
@import "../main.styl"
ul li
    display flex
    height 4em
    align-items center
    & span 
        display flex
        algin-items center
.wrapper-checkbox input
    width 16px
    height @width
.wrapper-checkbox::before /*添加一个罩子以免直接点击checkbox引发bug*/
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
.wrapper-checkbox
    width 40px
.length, .name
    height 2em
    border-bottom 1px solid #cecece
.icon
    font-size 2em
    color $main-color
    width 40px
.name
    width 360px
.file
    color #555
    font-size .95em
    & .icon
        color lighten($main-color,50%)
</style>