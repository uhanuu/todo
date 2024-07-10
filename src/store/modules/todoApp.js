const storage = {
    fetch() {
        const arr = [];
        for (var i = 0; i < localStorage.length; i++) {
            const todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
            arr.push(todoItem);
        }
        return arr;
    }
};

// 여러 컴포넌트에서 공유되는 데이터 (data)
const state = {
    todoItems: storage.fetch()
};

// 연산된 state 값을 접근하는 속성 (computed)
const getters = {
    getTodoItems(state) {
        return state.todoItems;
    }
};

// state 값을 변경하는 이벤트 로직, 메서드 (methods)
const mutations = {
    addTodoItem(state, newTodoItem) {
        const todoItem = { completed: false, item: newTodoItem };
        localStorage.setItem(newTodoItem, JSON.stringify(todoItem));
        state.todoItems.push(todoItem);
    },

    removeTodoItem(state, removeTodoItem) {
        const { todoItem, index } = removeTodoItem;
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },

    completeTodoItem(state, complteTodoItem) {
        const { todoItem, index } = complteTodoItem;
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.setItem(todoItem.item, JSON.stringify(state.todoItems[index]));
    },

    clearAllItems(state) {
        state.todoItems.length = 0;
        localStorage.clear();
    }
};

// actions => 비동기 처리 로직을 선언하는 메서드 (aysnc methods)

export default {
    state,
    getters,
    mutations
};