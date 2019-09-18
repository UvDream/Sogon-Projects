import { ADD, REDUCE } from "../constants/counter";
const INIT_DATA = {
    num: 0
}
export default function counter(state = INIT_DATA, action: any) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num: state.num + 1
            }
        case REDUCE:
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return state;
    }
}