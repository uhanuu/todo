<template>
    <div>
        <transition-group name="list" tag="ul">
            <li class="shadow" v-for="(todoItem, index) in getTodoItems" :key="index">
                <i class="checkBtn" :class="{ checkBtnCompleted: todoItem.completed }" @click="toggleComplete(todoItem, index)">V</i>
                <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i>삭제</i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<!-- template 안에서 표현하는 것들은 자바스크립트 간단한 연산만하고 
    추가로 전체적인 속성 접근은 줄이자 깔끔하게 표현하기 위한 연산들은 script 안에서 처리하자 -->
<script setup>
import { useStore } from 'vuex';
import { mapGetters } from '@/libs/vuexHelper';

const store = useStore();
const { getTodoItems } = mapGetters();

const removeTodo = (todoItem, index) => {
    store.commit('removeTodoItem', { todoItem, index });
};

const toggleComplete = (todoItem, index) => {
    store.commit('completeTodoItem', { todoItem, index });
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
