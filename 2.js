/*2. Implementar una función que invierta una pila.*/

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado","Domingo"];

class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }

    //Metodo para invertir la pila
        invertStack(){
        //Se imprime la pila antes de ser revertida
        console.log(this.stack);
        //Se invierte la pila
        this.stack.reverse();
        //Se imprime la pila invertida
        console.log(this.stack);
    }
}

var dayStack = new Stack()

for (let i = 0; i < days.length; i++) {
    dayStack.push(days[i]);
}