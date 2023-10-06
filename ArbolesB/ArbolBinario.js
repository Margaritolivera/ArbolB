// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
    }
    }
    
    // Definimos el arbol
    class BinaryTree {
    constructor() {
    this.raiz = null;
    }
    
    // Función del árbol para agregar un valor
    insertar(valor) {
    // Crear nodo
    const nodoNuevo = new Nodo(valor);
    // Si el árbol está vacío
    if (this.raiz === null) {
    this.raiz = nodoNuevo;
    return true;
    }
    else {
    // Buscar la posición en el árbol si ya tiene datos
    let nodoActual = this.raiz;
    while (true) {
    // Si es menor se va al sub- árbol de la izquierda
    if (valor < nodoActual.valor) {
    // Si el hijo de la izquierda está vacío se inserta un nodo
    if (nodoActual.izquierda === null) {
    nodoActual.izquierda = nodoNuevo;
    return true;
    }
    // Se mueve hacia el nodo de la izquierda
    nodoActual = nodoActual.izquierda;
    }
    // Si es mayor o igual te vas a la derecha
    else {
    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
    if (nodoActual.derecha === null) {
    nodoActual.derecha = nodoNuevo;
    return true;
    }
    // Te mueves al nodo de la derecha
    nodoActual = nodoActual.derecha;
    }
    }
    }
    }
    
    // Función para la búsqueda
    buscar(valor) {
    //Se inicializa con un array de valores coincientes
        const coincidencias = [];
    //Llama a la función para verificar la busqueda
        this.buscarRecursivo(this.raiz, valor, considencias);

        //Retornamos el valor de coninsidencias
    return coninsidencias;
        
    }
        //Se compara el valor del nodo actual con el valor buscado
        buscarRecursivo(nodo, valor, coinsidencias){
            if (nodo === valor){
                coinsidencias.push(nodo.valor);
        }

        //Realiza la busqueda del sub-árbol derecho
            this.buscarRecursivo(nodo.izquierda, valor, concidencias);
        }
    }

        //Ejemplo de uso
    const bynaryTree = new BinaryTree();
    binaryTree. insertar (3);
    binaryTree. insertar (3);
    binaryTree. insertar (3);
    binaryTree. insertar (9);

console.log ( binaryTree.buscar(3));
console.log ( binaryTree.buscar(9));
    

