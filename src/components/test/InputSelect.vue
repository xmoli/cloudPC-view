<template>
    <div class="select" @click="$refs.selected.focus()">
    <div class="selected" >
        <input v-model="selected" 
            @focus="selectFocus" @blur="focus=false"
            ref = "selected"
        />
        <i :class="{'fa': true,'fa-caret-down': !focus, 'fa-caret-up': focus}" aria-hidden="true"/>
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
        }
    }
}
</script>
<style lang="stylus" scoped>
.select 
    border 1px solid gray
    background  #ebebeb
.selected
    display flex
    align-items center
    & input
        background  #ebebeb
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