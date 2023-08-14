import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import { useReducer } from 'react';

const GlobalState = props => {
    const initialState = {
        todo: []
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const addTodo = data => {
        dispatch({type: 'ADD_TODO', payload: data})
        console.log('addTodo function')
    }

    const deleteTodo = data => {
        dispatch({type: 'DELETE_TODO', payload: data})
    }

    return <GlobalContext.Provider
    value={{
        todo: state.todo,
        addTodo,
        deleteTodo
    }}
    >
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState;