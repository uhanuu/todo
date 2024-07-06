<template>
    <div class="clearAllContainer">
        <span class="claerAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script setup>
const clearTodo = () => {
    localStorage.clear();
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.claerAllBtn {
    color: #e20303;
    display: block;
}
</style>
