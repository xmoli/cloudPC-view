<template>
    <transition-group class="wrapper" tag="ul" name="fade">
        <li class="tip-box" v-for="(item,index) in messagebox" :key="index">
            {{item.message}}
            <i class="fa fa-close" @click="remove(index,$event)" />
        </li>
    </transition-group>
</template>
<script>
export default {
    props: ['message', 'delay'],
    data () {
        return {
            messagebox: []
        }
    },
    watch: {
        message(val, oldval) {
            let m = val
            this.show(m)
            this.store(m)
        }
    },
    methods: {
        show(message){
            this.messagebox.push(message)
            let delay_t
            if (!this.delay){
                delay_t = 6000
            } else {
                delay_t = this.delay
            }
            setTimeout(function(){
                let index = this.messagebox.indexOf(message)
                if(index >= 0){
                    this.messagebox.splice(index,1)
                }
            }.bind(this),delay_t)
        },
        store(message) {
            console.log(message.message)
        },
        remove(index, e){
            this.messagebox.splice(index, 1)
        }
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 2000;
    top: 1em;
    right: 1em;
}
.tip-box .fa-close {
    margin-left: 1em;
    color: black;
}
.tip-box .fa-close:hover {
    cursor: pointer;
}
</style>
<style lang="stylus" scoped>
@import "../main.styl"
.tip-box {
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
    background: #cbcbcb;
    color: #333;
    letter-spacing: 1px;
    box-shadow: 2px 2px 3px #cbcbcb;
    border-left 3px solid $main-color
}
.fade-enter-active, .fade-leave-active
    transition all  .5s
.fade-enter
    opacity 0
    transform translateY(-1em)
.fade-enter-to
    opacity 100
.fade-leave
    opacity 100
.fade-leave-to
    transform translateY(-1em)
    opacity 0
</style>