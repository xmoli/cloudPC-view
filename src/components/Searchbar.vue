<template>
    <form v-on:submit.prevent="searchSubmit">
        <i class="fa fa-search" v-on:click="searchSubmit"/>
        <input v-model="search"/>
    </form>
</template>

<script>
export default {
    name: 'Searchbar',
    data (){
        return {
            search: null
        }
    },
    watch: {
        search (n, old) {
            this.searchSubmit()
        }
    },
    methods: {
        searchSubmit() {
            this.$emit('search',this.search)
        }
    }
}
</script>

<style scoped>
    input{
        margin: 0 2em;
        border-radius: 0.2em;
        min-width: 3em;
        height: 2.5em;
        background: rgb(221, 221, 221);
        border: none;
        padding: 0 8px 0 2.5em;
        outline: none;
        border: 1px solid transparent;
    }
    input:hover, input:focus {   
        border: 1px solid rgb(4, 67, 148);
    }
    .fa-search {
        position: absolute;
        font-size: 1.25em;
        color: rgb(143, 143, 143);
        margin: 0.35em 0 0 1.8em;
    }
    .fa-search:hover{
        cursor: pointer;
        color: rgb(4, 67, 148);
    }
</style>
<style scoped>
@media only screen and (max-width: 800px) {
    .fa-search {
        color:rgb(4, 67, 148)
    }
    input:focus {
        background: white;
    }
}
</style>