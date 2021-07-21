
export class Todo{


    constructor( tarea ){

        this.tarea = tarea;

        this.id = new Date().getTime(); //generea la hora, minuto, segundo y milisegundo 123255234
        this.completado = false;
        this.creado = new Date();

    }

}


