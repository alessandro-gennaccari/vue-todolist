var todoList = new Vue({
    el: '#todo',
    data: {
        todos: [
            'cane',
            'prova2',
            'prova3?'
        ],
        todosDeleted: [],
        addTodo: ''
    },
    methods: {
        deleteTodo(index){
            this.todosDeleted.push(this.todos[index]);
            this.todos.splice(index,1);
        },
        restoreTodo(index){
            this.todos.push(this.todosDeleted[index]);
            this.todosDeleted.splice(index,1);
        },
        addTodos(){
            (this.addTodo.length < 3) ? alert('Inserisci almeno 3') : this.todos.push(this.addTodo);
            this.addTodo = '';
        },
        permanentDelete(index){
            this.todosDeleted.splice(index,1);
        },
        fullDeleteTrash(){
            this.todosDeleted.splice(0);
        }
    }
});