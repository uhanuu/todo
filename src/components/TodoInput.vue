<template>
    <div class="inputBox shadow" @click="focusItem">
        <input class="todo-input" type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
        <span class="addContainer" @click="addTodo">
            <i class="addBtn">추가</i>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const focusItem = () => {
    const input = document.querySelector('.todo-input');
    input.focus();
};

const newTodoItem = ref('');
const addTodo = () => {
    if (newTodoItem.value !== '') {
        const todoItem = { completed: false, item: newTodoItem.value };
        localStorage.setItem(newTodoItem.value, JSON.stringify(todoItem));
    }
    clearInput();
};
const clearInput = () => {
    newTodoItem.value = '';
};
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
