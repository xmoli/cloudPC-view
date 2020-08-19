<template>
    <form @submit.prevent>
        <admin-select class="select" :options="agreement"/>
        <admin-select class="select methods" :options="methods"/>
        <input class="input"/>
        <input class="submit" type="submit"/>
        <button>
            保存
        </button>
    </form>
</template>
<script>
export default {
    components: {
        "admin-select": () => import('./InputSelect')
    },
    data() {
        return {
            agreement: ['HTTP','TCP'],
            methods: ['GET','POST','PUT','DELETE'],
            save: ['SAVE','SAVE AS']
        }
    }
}
</script>
<style scoped lang="stylus">
@import "../../main.styl"
form
    display flex
    align-items center
.select
    border none !important
input
    padding 8px
    outline none
    border 1px solid gray
    border-left none
.input 
    width 360px
    background #ebebeb
    border none !important
.methods
    border-radius 4px 0 0 4px
    margin-left 8px
.submit
    border none
    margin-left 8px
    border-radius 0 4px 4px 0
    width 5em
    background $main-color
    color white
    &:focus
        shadow-holo($main-color)
    &:hover
        cursor pointer
button
    border none
    width 5em
    border-radius 4px
    background #cbcbcb
    padding 8px
    margin-left 8px
    outline none
    &:focus
        shadow-holo(#cbcbcb)

</style>