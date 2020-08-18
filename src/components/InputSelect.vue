<template>
    <div class="select">
    <div class="selected">
        <input v-model="selected" 
            @focus="selectFocus" @blur="focus=false"
            ref = "selected"
        />
        <i :class="{fa:true, 'fa-times':true, invisibly: !focus}" aria-hidden="true"
            v-on:click="clearSelected"
        />
        <i v-if="!focus" class="fa fa-caret-down" aria-hidden="true"/>
        <i v-else class="fa fa-caret-up" aria-hidden="true"/>
    </div>
    <ul>
        <li></li>
    </ul>
    </div>
</template>
<script>
export default {
    props: ['options'],
    data() {
        return {
            selected: this.options[0],
            focus: false
        }
    },
    computed: {
        items () {
            let options =this.options
            return options.filter(i=> (i!== this.selected))
        }
    },
    methods: {
        openOption(){

        },
        selectFocus() {
            this.focus = true
            this.$refs.selected.select()
        },
        clearSelected(e){
            console.log(e)
            let input = this.$refs.selected
            this.selected = ''
            input.focus()
        }
    }
}
</script>
<style lang="stylus" scoped>
.select 
    overflow hidden
    border 1px solid gray
.selected
    background white
    display flex
    aligin-items center
    & input
        padding 8px
        width 3em
        outline none
        border none
    & i
        margin 0 4px
        display flex
        align-items center
.fa-times:hover
    cursor pointer
.invisibly
    visibility hidden
</style>