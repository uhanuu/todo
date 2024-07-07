<template>
    <div class="inputBox shadow" @click="focusItem">
        <input class="todo-input" type="text" v-model="newTodoItem" @keypress.enter="addTodo" />
        <span class="addContainer" @click="addTodo">
            <i class="addBtn">추가</i>
        </span>

        <!-- use the modal component, pass in the prop -->
        <TodoModal :show-modal="showModal" @close="showModal = false">
            <!-- you can use custom content here to overwrite default content -->
            <template #header>
                <h3>경고!</h3>
            </template>
            <template #body>
                <h3>아무것도 입력하지 않았습니다.</h3>
            </template>
        </TodoModal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoModal from './common/TodoModal.vue';

const emit = defineEmits(['add-todo-item']);

const focusItem = () => {
    const input = document.querySelector('.todo-input');
    input.focus();
};

const newTodoItem = ref('');
const addTodo = () => {
    if (newTodoItem.value !== '') {
        emit('add-todo-item', newTodoItem.value);
        clearInput();
        return;
    }
    showModal.value = !showModal.value;
};
const clearInput = () => {
    newTodoItem.value = '';
};

const showModal = ref(false);
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
h3 {
    display: inline-block;
    padding: 0;
    margin: 0 10px;
}
</style>
