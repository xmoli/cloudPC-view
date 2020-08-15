<template>
    <div class="log-filter">
        <select class="level" v-model="level" @change="$emit('change',level)">
            <option v-for=" item in levelItem" :key="item.name" :value="item.value">
                {{item.name}}
            </option>
        </select>
        <select class="type" v-model="type" @type="$emit('change', type)">
            <option v-for="item in typeItem" :key="item.name" :value="item.value">
                {{item.name}}
            </option>
        </select>
        <div class="day">
            今日
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            level: null,
            type: null,
            levelItem: [
                {
                    value: 'error',
                    name: 'ERROR'
                },
                {
                    value: 'debug',
                    name: 'DEBUG'
                },
                {
                    value: 'info',
                    name: 'INFO'
                }
            ],
            typeItem: [
                {
                    value: 'task',
                    name: 'TASK'
                },
                {
                    value: 'file',
                    name: 'NAME'
                }
            ],
        }
    },
    created() {
        this.level = this.levelItem[0].value
        this.type = this.typeItem[0].value
    }
}
</script>
<style lang="stylus" scoped>
.log-filter
    margin: 0 8px
    display: flex

.log-filter select, .log-filter>div
    margin 0 8px
    padding 8px
.log-filter>div
    border 1px solid gray
</style>
