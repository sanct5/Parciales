/*1.	Escriba una función que reciba una Cola de 
números flotantes y devuelva una nueva Cola pero 
con los elementos invertidos, es decir el último de la 
Cola C, pasará a ser el primero de la nueva Cola.*/

const floatNumbers = [1.3 , 2.2 , 3.2 , 4.345 , 5.23 , 6.23 , 7.32 , 8.9, 9.4536, 10.873];

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return console.log(this.queue);
    }

    //Metodo para invertir la cola
    invertQueue(){
        //Se imprime la cola antes de ser revertida
        console.log(this.queue);
        //Se invierte la cola
        this.queue.reverse();
        //Se imprime la cola invertida
        console.log(this.queue);
        return
    }
}

var floatQueue = new Queue()

for (let i = 0; i < floatNumbers.length; i++) {
    floatQueue.enqueue(floatNumbers[i]);
}