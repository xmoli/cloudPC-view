<template>
    <div class="select" >
    <div class="selected" @click.stop="$refs.selected.focus()">
        <input v-model="selected" 
            @focus="selectFocus"
            ref = "selected"
        />
        <i :class="{'fa': true,'fa-caret-down': !focus, 'fa-caret-up': focus}" aria-hidden="true"/>
    </div>
    <ul v-if="focus" class="options" 
        @click.self="focus=false"
        @keyup.tab="blur"
    >
        <li class="option" v-for="(item,index) in items" :key="index"
        >
            <button  @click.stop="selectOption">
                {{item}}
            </button>
        </li>
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
        selectOption(e){
            this.selected = e.target.innerText
            this.$emit('dchange',this.selected)
            this.focus = false
        },
        selectFocus() {
            this.focus = true
            this.openOption()
            this.$refs.selected.select()
        },
        blur(){
            console.log('tab')
            this.focus =false
        }
    }
}
</script>
<style lang="stylus" scoped>
$bg-color = #ebebeb
.select 
    border 1px solid #cbcbcb
    background  #ebebeb
    width 5em
.selected
    display flex
    align-items center
    & input
        font-size 1em
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
.options
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh
    background rgba(3,3,3,.3)
    backdrop-filter saturate(180%) blur(4px)
</style>