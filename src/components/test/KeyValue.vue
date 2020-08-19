<template>
    <table class="key-value">
        <tr class="header">
            <td/>
            <td>键</td>
            <td>值</td>
            <td>描述</td>
            <td>编辑</td>
        </tr>
        <tr v-for="(item,index) in items" :key="index">
            <td><input type="checkbox"/></td>
            <td><input name="key" :value="item"/></td>
            <td><input name="value"/></td>
            <td><input name="descript"/></td>
            <td><i class="fa fa-times"/></td>
        </tr>
        <tr>
            <td/>
            <td><input name="key"/></td>
            <td><input name="value"/></td>
            <td><input name="descript"/></td>
            <td/>
        </tr>
    </table>
</template>
<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        addItem(){

        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../main.styl"
table.key-value
    border-collapse collapse
    & td:first-child
        min-width 1.5em
    & td
        padding 8
        border 1px solid #bbb
        outline-color $main-color
        resize none
        input
            outline none
            border none
            padding 8px
.key-value .header td
    padding 8px 0
.wrapper
    overflow hidden
    height 1em
    padding 0

</style>