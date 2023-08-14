import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import { useReducer } from 'react';

const GlobalState = props => {
    const initialState = {
        todo: [],
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const addTodo = data => {
        let todoObj = { data, mark: false };
        dispatch({ type: 'ADD_TODO', payload: todoObj });
        console.log('addTodo function');
    }

    const deleteTodo = data => {
        dispatch({ type: 'DELETE_TODO', payload: data });
    }

    const onCheckBox = (e, index, data) => {
        let todoObj = { index, mark: e?.target?.checked, data }
        dispatch({ type: 'MARK_TODO', payload: todoObj })
    }

    return <GlobalContext.Provider
        value={{
            todo: state.todo,
            addTodo,
            deleteTodo,
            onCheckBox
        }}
    >
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState;