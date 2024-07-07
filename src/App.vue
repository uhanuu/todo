<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput @add-todo-item="addTodoItem"></TodoInput>
        <TodoList :todo-items="todoItems" @remove-todo-item="removeTodoItem" @toggle-complete="completeTodoItem"></TodoList>
        <TodoFooter @clear-todo="clearAllItems"></TodoFooter>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

const todoItems = reactive([]);
for (var i = 0; i < localStorage.length; i++) {
    const todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoItems.push(todoItem);
}

const addTodoItem = newTodoItem => {
    const todoItem = { completed: false, item: newTodoItem };
    localStorage.setItem(newTodoItem, JSON.stringify(todoItem));
    todoItems.push(todoItem);
};

const removeTodoItem = (todoItem, index) => {
    localStorage.removeItem(todoItem.item);
    todoItems.splice(index, 1);
};

const completeTodoItem = (toggleTodoItem, index) => {
    // todoItem을 todoList에 넘기고 event로 다시 올려받는것은 좋지 않다. (안티패턴)
    // todoItem.completed = !todoItem.completed;
    todoItems[index].completed = !todoItems[index].completed;
    localStorage.setItem(toggleTodoItem.item, JSON.stringify(todoItems[index]));
};

const clearAllItems = () => {
    todoItems.length = 0;
    localStorage.clear();
};
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}

input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
