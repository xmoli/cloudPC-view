<template>
    <ul class="wrapper">
            <li class="tip-box" v-for="(item,index) in tips" :key="index">
                {{item.message}}
                <i class="fa fa-close"/>
            </li>
    </ul>
</template>
<script>
export default {
    props: ['tips'],
    watch: {
        tips(n, old) {
            console.log('new message')
        }
    },
    methods: {
        
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
.tip-box {
    border-radius: .3em;
    padding: .8em;
    margin-bottom: 8px;
    background: rgb(12, 12, 114);
    color: white;
    font-size: 0.8em;
    letter-spacing: 1px;

    box-shadow: 2px 2px 3px gray;

    transition: all .3s ease-out;
}
.tip-box .fa-close {
    margin-left: 1em;
    color: white;
}
.tip-box .fa-close:hover {
    cursor: pointer;
}
</style>