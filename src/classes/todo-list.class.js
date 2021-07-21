

export class TodoList {

    constructor () {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }


    eliminarTodo(id){

       this.todos = this.todos.filter( todo => todo.id != id ); //crea un nuevo arreglo sin el todo cliqueado
       this.guardarLocalStorage();

    }

    marcarCompletado(id){

        for ( const todo of this.todos ){

            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !this.todos.completado);
        this.guardarLocalStorage();
    }

    //métodos para guardar/leer en el localStorage

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));


    };

    cargarLocalStorage(){

        // if ( localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo') );
        //     console.log('cargarLocal: ', this.todos);
        // } else {
        //     this.todos = [];
        // };

        this.todos = (localStorage.getItem('todo')) 
                        ? this.todos = JSON.parse(localStorage.getItem('todo')) 
                        : this.todos = [];

    };

}




