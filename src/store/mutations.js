const addTodoItem = (state, newTodoItem) => {
    const todoItem = { completed: false, item: newTodoItem };
    localStorage.setItem(newTodoItem, JSON.stringify(todoItem));
    state.todoItems.push(todoItem);
};

const removeTodoItem = (state, removeTodoItem) => {
    const { todoItem, index } = removeTodoItem;
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
};

const completeTodoItem = (state, complteTodoItem) => {
    const { todoItem, index } = complteTodoItem;
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.setItem(todoItem.item, JSON.stringify(state.todoItems[index]));
};

const clearAllItems = state => {
    state.todoItems.length = 0;
    localStorage.clear();
};

export { addTodoItem, removeTodoItem, completeTodoItem, clearAllItems };
