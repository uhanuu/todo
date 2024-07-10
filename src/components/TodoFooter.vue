<template>
    <div class="clearAllContainer">
        <span class="claerAllBtn" @click="clearAllItems">Clear All</span>
    </div>
</template>

<script setup>
import { mapMutations } from '@/libs/vuexHelper';

const { clearAllItems } = mapMutations();
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
