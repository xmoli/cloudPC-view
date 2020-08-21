<template>
    <form @submit.prevent>
        <admin-select class="select" :options="agreement"
            @dchange="changeAgreement"
        />
        <admin-select v-if="methodsSwitch" class="select methods" :options="methods"/>
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
            methodsSwitch: false,
            methods: ['GET','POST','PUT','DELETE'],
            save: ['SAVE','SAVE AS']
        }
    },
    methods:{
        changeAgreement(val){
            console.log(val)
            if (val=== this.agreement[1]){
                this.methodsSwitch = false
            } else {
                this.methods = true
            }
        }
    }
}
</script>
<style scoped lang="stylus">
@import "../../main.styl"
form
    display flex
    align-items center
input
    padding 8px
    outline none
    border 1px solid #cbcbcb
    border-left none
.select
    margin-right 8px
.input 
    width 360px
    background #ebebeb
.methods
    border-radius 4px 0 0 4px
    margin-right 0
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