/*
Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequeña que se puede "testear" o probar en una aplicacion, por ejemplo:

     - Ciclos
     - Funciones
     - Metodos
     - Etc.

Realizar pruebas unitarias tiene demasiadas ventajas, ya que va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma muchho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionado o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios.

*/

// Escenario ficticio
/*function promedio(cal1, cal2, cal3) {
    let promedio = (cal1 + cal2 + cal3) / 3; // formula para calcular el promedio

    // Ciclo para calcular aprobado o reprobado
    if (promedio >= 6) {
        console.log("Felicidades, aprobaste");
    } else {
        console.log("Necesitas estudiar mas, estas reprobado");
    }
}*/

//promedio (0, 7, -8) // promedio 7
// Que pasa si no ingreso las 3 calificaciones?
// Que sucede si una de esas calificacionnes es un valor no numerico?
// Que pasa si una de las calificaciones es un numero negativo?


// Creamos una calculadora basica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicacion y division) para trabajar con pruebas unitarias

// Suma
function suma (num1,  num2){
    return num1 + num2;
}

// Resta
function resta (num1, num2){
    return num1 - num2;
}

// Multiplicacion
function multiplicacion (num1, num2){
    return num1 * num2;
}

// Division
function division (num1, num2){
    return num1 / num2;
}

/*

Para manejar nuestras pruebas unitarias, utilizamos JEST

    - JUnit (JAVA)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)


JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:

npm -v para revisar si esta instalado npm
*/

module.exports = {suma, resta, multiplicacion, division};
