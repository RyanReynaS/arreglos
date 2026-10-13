// ==========================================
// 1. ARREGLOS
// ==========================================
// edadesIzquierda: edades de la tabla izquierda.
// edadesDerecha: edades de la tabla derecha.
let edadesIzquierda = [];
let edadesDerecha = [];

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================
// Devuelven el arreglo completo. No las llama la página, sirven para consultarlo.
function arregloEdadesIzquierda() {
    return edadesIzquierda;
}

function arregloEdadesDerecha() {
    return edadesDerecha;
}

// ==========================================
// 2. FUNCIÓN AGREGAR EDAD
// ==========================================
// Se ejecuta con el botón "Agregar". Lee el input y añade la edad a la izquierda.
function agregarEdad() {
    // Toma el input con id "nuevaEdad"
    let campoEdad = document.getElementById("nuevaEdad");
    let valor = campoEdad.value.trim();

    // Si está vacío, no hace nada
    if (valor === "") return;

    // Convierte el texto a número entero
    let edad = parseInt(valor, 10);

    // Solo agrega si es un número válido
    if (!isNaN(edad)) {
        // Guarda la edad en el arreglo izquierdo
        edadesIzquierda.push(edad);

        // Vacía el input para el siguiente valor
        campoEdad.value = "";

        // Vuelve a dibujar la tabla izquierda
        pintarArregloIzquierda();
    }
}

// ==========================================
// 3. FUNCIÓN PINTAR ARREGLO IZQUIERDA
// ==========================================
// Dibuja la tabla izquierda según el contenido de edadesIzquierda.
function pintarArregloIzquierda() {
    let tablaIzquierda = document.getElementById("tablaIzquierda");
    // Borra las filas anteriores
    tablaIzquierda.innerHTML = "";

    // Crea una fila por cada edad. "i" es la posición en el arreglo.
    for (let i = 0; i < edadesIzquierda.length; i++) {
        let edad = edadesIzquierda[i];
        // Botón Eliminar borra la fila i; botón ➜ la pasa a la derecha
        tablaIzquierda.innerHTML += `
            <tr>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button>
                </td>
                <td>
                    <button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button>
                </td>
            </tr>
        `;
    }
}

// ==========================================
// 4. FUNCIÓN ELIMINAR IZQUIERDO
// ==========================================
// Borra una edad de la izquierda usando su posición.
function eliminarIzquierdo(indice) {
    // Quita 1 elemento en esa posición
    edadesIzquierda.splice(indice, 1);
    // Actualiza la tabla izquierda
    pintarArregloIzquierda();
}

// ==========================================
// 5. FUNCIÓN PINTAR ARREGLO DERECHA
// ==========================================
// Dibuja la tabla derecha según el contenido de edadesDerecha.
function pintarArregloDerecha() {
    let tablaDerecha = document.getElementById("tablaDerecha");
    // Borra las filas anteriores
    tablaDerecha.innerHTML = "";

    // Crea una fila por cada edad. Columnas: Mover | Valor | Eliminar
    for (let i = 0; i < edadesDerecha.length; i++) {
        let edad = edadesDerecha[i];
        // Botón ⬅ pasa la fila i a la izquierda; botón Eliminar la borra
        tablaDerecha.innerHTML += `
            <tr>
                <td>
                    <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button>
                </td>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button>
                </td>
            </tr>
        `;
    }
}

// ==========================================
// 6. FUNCIÓN ELIMINAR DERECHO
// ==========================================
// Borra una edad de la derecha usando su posición.
function eliminarDerecho(indice) {
    // Quita 1 elemento en esa posición
    edadesDerecha.splice(indice, 1);
    // Actualiza la tabla derecha
    pintarArregloDerecha();
}

// ==========================================
// 7. FUNCIÓN MOVER HACIA DERECHA
// ==========================================
// Saca una edad de la izquierda y la pone al final de la derecha.
function moverHaciaDerecha(indice) {
    // Quita la edad de la izquierda y la guarda en "elemento"
    let elemento = edadesIzquierda.splice(indice, 1)[0];
    // La agrega al final de la derecha
    edadesDerecha.push(elemento);

    // Actualiza ambas tablas
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

// ==========================================
// 8. FUNCIÓN MOVER HACIA IZQUIERDA
// ==========================================
// Saca una edad de la derecha y la pone al final de la izquierda.
function moverHaciaIzquierda(indice) {
    // Quita la edad de la derecha y la guarda en "elemento"
    let elemento = edadesDerecha.splice(indice, 1)[0];
    // La agrega al final de la izquierda
    edadesIzquierda.push(elemento);

    // Actualiza ambas tablas
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
