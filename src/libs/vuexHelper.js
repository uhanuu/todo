import { computed } from 'vue';
import { useStore } from 'vuex';

const mapState = () => {
    const store = useStore();
    return Object.fromEntries(Object.keys(store.state).map(key => [key, computed(() => store.state[key])]));
};

/**
 * 모듈 설명: <script setup> 내부에서 Vuex 헬퍼 함수를 사용하기 위한 모듈
 *
 * 기존 <script>에서 사용법:
 * @example
 * ```javascript
 * export default {
 *   computed: {
 *     ...mapGetters(['getTodoItems'])
 *
 *      혹은 다른 이름으로 사용하기
 *
 *     ...mapGetters({
 *      todoItemsAlias: 'getTodoItems'
 *     })
 *   }
 * };
 * ```
 *
 * <script setup> 내부에서 사용법:
 * @example
 * ```javascript
 * import { mapGetters } from '@/libs/vuexHelper';
 * const { storeFunctionName } = mapGetters();
 * ```
 *
 * 참고:
 * @see {@link https://stackoverflow.com/questions/64010072/how-to-use-vuex-mapgetters-with-vue-3-sfc-script-setup-syntax|Stack Overflow: How to use Vuex mapGetters with Vue 3 SFC script setup syntax}
 */

const mapGetters = () => {
    const store = useStore();
    return Object.fromEntries(Object.keys(store.getters).map(getter => [getter, computed(() => store.getters[getter])]));
};

const mapMutations = () => {
    const store = useStore();
    return Object.fromEntries(Object.keys(store._mutations).map(mutation => [mutation, value => store.commit(mutation, value)]));
};

const mapActions = () => {
    const store = useStore();
    return Object.fromEntries(Object.keys(store._actions).map(action => [action, value => store.dispatch(action, value)]));
};

export { mapState, mapGetters, mapMutations, mapActions };
