<template>
    <content-base class="container">
        <ul class="header">
            <li>
                <span @click="toggleSelectAll" class="wrapper-checkbox">
                    <input type="checkbox" v-model="allChecked"/>
                </span>
                <span class="icon"/>
                <span class="name">名称</span>
                <span class="length">大小</span>
            </li>
        </ul>
        <ul class="body" ref="body">
            <li v-for="(item,index) in items" :key="index" 
                :class="{'file':item.type !='folder'}"
            >
                <span class="wrapper-checkbox">
                    <input type="checkbox" 
                        :value="index" v-model="selected"
                        @click.stop
                    />
                </span>
                <filetype-icon class="icon" :filetype="item.type"/>
                <span class="name" @click="openFile($event, item)" >{{item.name}}</span>
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
            selected: [],
            allChecked: false,
        }
    },
    methods: {
        toggleSelectAll() {
            if (this.allChecked == false) {
                this.selected = this.items.map((item,index) => {
                    return index
                })
                this.allChecked = true
            } else {
                this.selected.splice(0,this.selected.length)
                this.allChecked = false
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
.wrapper-checkbox
    width 40px
.length, .name
    height 2em
    border-bottom 1px solid #cecece
    &:hover
        cursor pointer
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
        font-size 1.5em
        color lighten($main-color,50%)
</style>