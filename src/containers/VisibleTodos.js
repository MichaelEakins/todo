import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDipatchToProps = dispatch => ({
    toggleTodo: id => dispatch({ type: 
    'TOGGLE_TODO', id})
})

export default connect(mapStateToProps, mapDipatchToProps)(TodoList)