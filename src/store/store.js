import { createStore } from 'vuex';
import todoApp from './modules/todoApp';

// state, getters, mutations, actions, modules
export default createStore({
    modules: {
        todoApp
    }
});
