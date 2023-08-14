import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import { useReducer } from 'react';

const GlobalState = props => {
    const initialState = {
        todo: [],
        // todo: null
        // todo: {}
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const addTodo = data => {
        let todoObj = {data, mark:false};
        dispatch({type: 'ADD_TODO', payload: todoObj});
        console.log('addTodo function');
    }

    const deleteTodo = data => {
        dispatch({type: 'DELETE_TODO', payload: data});
    }

    // const onCheckBox = (e, data) => {
    // const onCheckBox = (e, index) => {
    const onCheckBox = (e, index, data) => {
        console.log('oncheckbox', e.target.checked);
        // console.log('checkbox data', data);
        console.log('checkbox index',index);
        // let todoObj = {data, mark: e?.target?.checked}
        let todoObj = {index, mark: e?.target?.checked, data}
        dispatch({type: 'MARK_TODO', payload: todoObj})
        // dispatch({type: 'MARK_TODO', payload: {index, mark: e?.target?.checked}})

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