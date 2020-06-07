<template>
    <div>
        <i class="fa fa-bell-o" v-on:click="openMessageMenu"/>
        <i class="fa fa-user-o" v-on:click="openUserMenu"/>
    </div>
</template>

<script>
export default {
    name: 'Message',
    methods: {
        openUserMenu () {

        },
        openMessageMenu () {

        }
    }
}
</script>

<style scoped>
    div {
        color: rgb(143, 143, 143);
        display: flex;
        flex-wrap: nowrap;
    }
    i:hover {
        cursor: pointer;
        color: rgb(4, 67, 148);
    }
    i {
        margin: 0 8px;
        font-size: 1.25em;
        font-weight: bold;
    }
</style>