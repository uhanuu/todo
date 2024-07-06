<template>
    <div>
        <ul>
            <li class="shadow" v-for="(item, index) in todoItems" :key="index">
                <i class="checkBtn" @click="toggleComplete">V</i>
                {{ item }}
                <span class="removeBtn" @click="removeTodo(item, index)">
                    <i>삭제</i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
const todoItems = [];
for (var i = 0; i < localStorage.length; i++) {
    todoItems.push(localStorage.key(i));
}

const removeTodo = (todoItem, index) => {
    localStorage.removeItem(todoItem);
    todoItems.splice(index, 1);
};

const toggleComplete = () => {};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 10px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
