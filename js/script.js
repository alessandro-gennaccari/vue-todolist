var todoList = new Vue({
    el: '#todo',
    data: {
        todos: [
            'cane',
            'prova2',
            'prova3?'
        ],
        todosDeleted: []
    },
    methods: {
        deleteTodo(index){
            this.todosDeleted.push(this.todos[index])
            this.todos.splice(index,1);
        }
    }
});