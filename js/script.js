var todoList = new Vue({
    el: '#todo',
    data: {
        todos: [
            'Fare la lista',
            'Fare un\'abbondante colazione',
            'Registrare videocassetta per Maggie',
            'Discorso da uomo a uomo con Bart',
            'Ascoltare Lisa suonare il sax',
            'Fare i preparativi per il funerale',
            'Fare pace con papà',
            'Birra con i ragazzi al bar',
            'Mandare al diavolo il capo',
            'Andare in deltaplano',
            'Piantare un albero',
            'Fare l\'ultima cena con la mia adorata famiglia',
            'Farsi un\'ultima intimata con Marge',
            '...ammirare l\'alba (suggerito da Marge)'
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
        },
        deleteMyTodo(){
            this.todos.splice(0);
        }
    }
});