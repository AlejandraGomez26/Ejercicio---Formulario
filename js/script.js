// Se le solicita al aspirante la construccion de un formulario con las siguiemtes caracyeristicas 
// 1. nombres y apellidos 
// 2.aspiracion salarial
// 3. correo electronico 
// 4.genero
// 5.cargo a ocupar (entre los cargos disponibles van a tener desarrollador, gerente de proyecto, lider administrativo, conductor y otro en caso dado de que se seleccione la opcion otro este debe habilitar un nuevo campo que le permita al usuario escribir el nuevo campo)
// al dar click en el boton guardar este debe almacenar en un objeto tipo json dentro de una lista y debera vaciar el formulario para un nuevo registro 
//  restricciones :
//  todos los campos deben ser obligatorios 
//  si el genero es masculino el boton para subir la informacion debe ser de color azul, si es femenino de color rosa


// Paso 1: Obtener el elemento form
const $form = document.querySelector( '#form-data' );

// console.log( $form );

// Paso 1.1: Agrego un evento de tipo submit al elemento form
$form.addEventListener( 'submit', function( event ) {   
    event.preventDefault();         // Evito el envio de datos por defecto del elemento form a traves del evento
    
    console.log( 'Enviando datos...' );
    iniciar();
});


function iniciar() {
    let 
        data = [],      // Contener todos los registros hechos en formulario
        cargos = [];

    // Paso 2: Obtener todos los valores del formulario
    const 
        nombres = document.querySelector( '[data-field-nombres]' ).value,       // Usando dataSet
        apellidos = document.querySelector( '[data-field-apellidos]' ).value,   // Usando dataSet
        salario = document.querySelector( '#salario' ).value,                   // Usando id
        genero = document.querySelector( '#genero' ).value,                     // Usando id
        $cargos = document.querySelectorAll( '.checkbox' );

    console.log( $cargos );     // Array con objectos del DOM (Document Object Model) <inputs/>

    // Paso 2.1: Itero, Recorro Arreglo con los inputs de los cargos
    for( const $cargo of $cargos ) {
        if( $cargo.checked ) {
            cargos = [ ...cargos, $cargo.value ];     // Guardando los valores seleccionado, es decir, los cargos
        }
    }

    // console.log( cargos );

    // Paso 3: Crear un objeto con los datos recopilados del formulario
    const registro = {
        nombres: nombres,
        apellidos: apellidos,
        salario: Number( salario ),
        genero: genero,
        cargos: cargos
    };

    // TODO: Paso 4: Insertar los datos del objeto a un Arreglo (Me acumule los registros)
    data = [ registro, ...data ];

    console.log( registro );
    // console.log( data );
}

