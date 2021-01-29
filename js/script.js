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
        addTodo: '',
        modify: ''
    },
    methods: {
        // Cancella un todo
        deleteTodo(index){
            this.todosDeleted.push(this.todos[index]);
            this.todos.splice(index,1);
        },
        // Ripristina un todo
        restoreTodo(index){
            this.todos.push(this.todosDeleted[index]);
            this.todosDeleted.splice(index,1);
        },
        // Aggiunge il todo
        addTodos(){
            (this.addTodo.length < 3) ? alert('Inserisci almeno 3') : this.todos.push(this.addTodo);
            this.addTodo = '';
        },
        // Cancella completamente il todo dal cestino
        permanentDelete(index){
            this.todosDeleted.splice(index,1);
        },
        // Cancella tuti i todo dal cestino
        fullDeleteTrash(){
            this.todosDeleted.splice(0);
        },
        // Sposta tutti i todo nel cestino
        deleteMyTodo(){
            for (let i = 0; i < this.todos.length; i++){
                this.todosDeleted.push(this.todos[i]);
            }
            this.todos.splice(0);
        },
        // Ripristina tutte le voci dal cestino
        restoreAllTodo(){
            for (let i = 0; i < this.todosDeleted.length; i++){
                this.todos.push(this.todosDeleted[i]);
            }
            this.todosDeleted.splice(0);
        },
        // modificare un todo con controllo per impedire un campo vuoto
        modifyTodo(index){
            this.todos.splice(index,0);
            this.modify = prompt('Modifica la tua todo');
            console.log(this.modify);
            (this.modify == '' || this.modify == null) ? this.modify = this.todos[index] : this.todos[index] = this.modify;
        }
    }
});

