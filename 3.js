/*3.	Escriba un método que, dadas dos
listas ordenadas de números enteros, realice la concatenación
en forma ordenada de ambas listas. El método debe recibir los
apuntadores a los primeros nodos de cada lista.*/

const integers1 = [1,3,5,7,9,11,13,15];
const integers2 = [2,4,6,8,10,12,14,16];

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insertar un nodo en una posición dada
    append(value, position) {
        const newNode = new Node(value);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            return `El elemento ${value} se insertó como cabeza`;
        }

        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < position - 1) {
            current = current.next;
            currentIndex++;
        }

        if (current === null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = current.next;
            current.next = newNode;
        }

        return `${value} insertado en la posición: ${position}`;
    }

    // Buscar un valor en la lista
    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.value === value) {
                return truw;
            } else {
                return this.peek(value, current.next);
            }
        }

        return false;
    }

    // Obtener el tamaño de la lista
    size(current = this.head, acum = 0) {
        if (current === null) {
            return acum;
        }
        
        return this.size(current.next, acum + 1);
    }    

    // Eliminar un valor de la lista
    remove(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        if (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            } else {
                return this.remove(value, current.next);
            }
        }
        
        return false;
    }

    // Imprimir la lista
    print() {
        let node = this.head;
        while (node !== null) {
            console.log(`Número: ${node.value} --> | Next: ${node.next ? node.next.value : null}`);
            node = node.next;
        }
    }

    //Concatenar valores de otra lista "list1.concatList(list2);"
    concatList(list2) {
        let tempList = new LinkedList();

        let current1 = this.head;
        let current2 = list2.head;

        while (current1 !== null && current2 !== null) {
            if (current1.value < current2.value) {
                tempList.append(current1.value, tempList.size());
                current1 = current1.next;
            } else {
                tempList.append(current2.value, tempList.size());
                current2 = current2.next;
            }
        }

        this.head = null;
        this.tail = null;
        let currentNode = this.head;

        for (let i = 0; i < tempList.size(); i++) {
            if (i == 0){
                this.head = tempList.head
                currentNode = this.head;
            }else if(i == tempList.size()){
                this.tail = tempList.tail;
                currentNode = this.head;
            }else{
                if(currentNode.next == null){

                }
                else{
                    this.append(currentNode.next)
                    currentNode = currentNode.next;
            }
            
        }
    }
        return console.log(this.print());
    }
}


var list1 = new LinkedList();
var list2 = new LinkedList();

//Agregar elementos a las dos listas

console.log("-----------Primera lista-----------------")
for (const i of integers1) {
    console.log(list1.append(i, integers1.indexOf(i)));
}
console.log("---------------Segunda lista----------------")
for (const i of integers2) {
    console.log(list2.append(i, integers2.indexOf(i)));
}