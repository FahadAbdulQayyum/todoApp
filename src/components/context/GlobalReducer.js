const GlobalReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                // todo: [...state.todo, action.payload]
                todo: [...state.todo, action.payload]
                // todo: todo?.map(p=>[...p, action.payload])
            }
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todo: state.todo.filter((v,i)=>v.data!==action.payload)
            }
        }
        case 'MARK_TODO': {
            const index = state.todo.findIndex((td, i) => td === action.payload.data)
            const newArr = [...state.todo]
            newArr[index].mark = action.payload.mark
            return {
                ...state,
                todo: newArr,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default GlobalReducer;