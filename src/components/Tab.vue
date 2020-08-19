<template>
    <ul>
        <li v-for="(tab,index) in tabs" :key="index"
            :class="{active: tab===active}"
            @click="tabTo($event,index)"
        >
            {{tab}}
        </li>
    </ul>
</template>
<script>
export default {
    props: ['tabs'],
    data(){
        return {
            active: '',
        }
    },
    created(){
        this.active = this.tabs[0]
    },
    methods:{
        tabTo(event, index){
            this.active = this.tabs[index]
            this.$emit('tabTo',{ index: event.target.innerText})
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../main.styl"
ul
    padding 8px
    li 
        padding 8px
.active
    border-bottom 2px solid $main-color
</style>