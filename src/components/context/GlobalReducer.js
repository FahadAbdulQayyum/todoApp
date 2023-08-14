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
                todo: state.todo.filter((v,i)=>v!==action.payload)
            }
        }
        case 'MARK_TODO': {
            const index = state.todo.findIndex((td, i) => td === action.payload.data)
            const newArr = [...state.todo]
            newArr[index].mark = action.payload.mark
            return {
                ...state,
                todo: newArr,
                // todo: [...state.todo, state.todo.mark = !action.payload.mark]
                // todo: action.payload
                // todo: state.todo.map((t,i) => t === action.payload.data ? state.todo.mark=action.payload.mark : t)
                // todo: state.todo.map(t => t === action.payload.data ? action.payload : t)
                // todo: state.todo.map(t => t === action.payload.data && action.payload)
                // todo: state.todo.map((t,i) => console.log('t === action.payload.data',action.payload) )
                // todo[action.payload.index]: [...state.todo, action.payload.data]
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