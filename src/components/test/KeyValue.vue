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
            <td><input type="checkbox"/></td>
            <td><input name="key" @change="addItem"/></td>
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
            items:['a','b']
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
    & td:first-child, & td:last-child
        padding 8px
    & td
        border 1px solid #bbb
        padding 0
        & input
            background none
            border none
            padding 8px
            outline-color $main-color
.key-value .header td
    padding 8px 0
</style>