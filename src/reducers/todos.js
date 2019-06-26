const todos = (state=[], actions) => {
    switch(actions.type) {
        case 'ADD_TODO':
            return[
                ...state, {
                    id: action.id,
                    test: actions.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
                return state.map(todo => 
                    (todo.id === actions.id)
                    ?{...todo, completed: !todo.completed}: todo)
        default:
            return state
    }
}

export default todos;