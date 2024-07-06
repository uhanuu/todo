<template>
    <div>
        <ul>
            <li class="shadow" v-for="(todoItem, index) in todoItems" :key="index">
                <i class="checkBtn" :class="{ checkBtnCompleted: todoItem.completed }" @click="toggleComplete(todoItem)">V</i>
                <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i>삭제</i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
const todoItems = [];
for (var i = 0; i < localStorage.length; i++) {
    const todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoItems.push(todoItem);
}

const removeTodo = (todoItem, index) => {
    localStorage.removeItem(todoItem.item);
    todoItems.splice(index, 1);
};

const toggleComplete = todoItem => {
    console.log('toggle');
    todoItem.completed = !todoItem.completed;
    console.log(todoItem);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
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
