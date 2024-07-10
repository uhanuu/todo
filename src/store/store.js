import { createStore } from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';

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

// state, getters, mutations, actions, modules
export default createStore({
    // 여러 컴포넌트에서 공유되는 데이터 (data)
    state: {
        todoItems: storage.fetch()
    },
    // 연산된 state 값을 접근하는 속성 (computed)
    getters,
    // state 값을 변경하는 이벤트 로직, 메서드 (methods)
    mutations,
    // 비동기 처리 로직을 선언하는 메서드 (aysnc methods)
    actions: {}
});
