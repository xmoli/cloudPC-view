<template>
    <div class="log-filter">
        <select class="level" v-model="level" @change="$emit('change',level)">
            <option value="error">ERROR</option>
            <option value="debug">DEBUG</option>
            <option value="info">INFO</option>
        </select>
        <select class="type" v-model="type" @change="$emit('change', type)">
            <option value="task">TASK</option>
            <option value="file">FILE</option>
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
            type: null
        }
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
