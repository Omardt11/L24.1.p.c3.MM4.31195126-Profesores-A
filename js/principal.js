/*PROFESORES-A 
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y 
sexo (F - M). 
Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
retorne otro arreglo de objetos con solamente los profesores de una categoría dada. 
Función: profesoresCategoria. 
Parámetros: profesores (array de objetos profesor), categoria (un número). 
Retorno: array de objetos profesor que pertenecen a la categoría indicada.*/

let profesoresCategoria = (profesores, categoria) => {
    
    let profesor = []
    profesores.forEach((profesores) => {
    if(profesores.categoria == categoria)
        profesor.push({nombre: profesores.nombre, sexo: profesores.sexo})    
    });
    return profesor; 
}

let profesores = [
    {categoria: 1, nombre: "Felix", sexo: "M"},
    {categoria: 5, nombre: "Maria", sexo: "F"},
    {categoria: 3, nombre: "Antonio", sexo: "M"},
    {categoria: 4, nombre: "Ana", sexo: "F"},
    {categoria: 2, nombre: "Jose", sexo: "M"},
    {categoria: 5, nombre: "Alicia", sexo: "F"},
    {categoria: 3, nombre: "Jorge", sexo: "M"},
]

let salida = document.getElementById("salida");


salida.innerHTML = ` Los profesores de la categoria 5 (titular) son:`
salida.innerHTML += `<br>`+JSON.stringify(profesoresCategoria(profesores, 5));

salida.innerHTML += `<br><br> Los profesores de la categoria 4 (Asociado) son:`
salida.innerHTML += `<br>`+JSON.stringify(profesoresCategoria(profesores, 4));

salida.innerHTML += `<br><br> Los profesores de la categoria 3 (Agregado) son:`
salida.innerHTML += `<br>`+JSON.stringify(profesoresCategoria(profesores, 3));

salida.innerHTML += `<br><br> Los profesores de la categoria 2 (Asistente) son:`
salida.innerHTML += `<br>`+JSON.stringify(profesoresCategoria(profesores, 2));

salida.innerHTML += `<br><br> Los profesores de la categoria 1 (Instructor) son:`
salida.innerHTML += `<br>`+JSON.stringify(profesoresCategoria(profesores, 1));