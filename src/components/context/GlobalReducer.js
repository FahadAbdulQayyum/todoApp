const GlobalReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todo: state.todo.filter((v,i)=>v!==action.payload)
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