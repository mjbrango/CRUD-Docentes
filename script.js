let docentes = [];
let editIndex = -1;

const form = document.getElementById("formDocente");
const tabla = document.getElementById("tablaDocentes");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let docente = {
        tipoDocumento: tipoDocumento.value,
        nombre: nombre.value,
        apellido: apellido.value,
        fechaNacimiento: fechaNacimiento.value,
        nivel: nivel.value,
        area: area.value,
        asignatura: asignatura.value,
        grado: grado.value,
        eps: eps.value,
        salario: salario.value
    };

    if (editIndex === -1) {
        docentes.push(docente);
    } else {
        docentes[editIndex] = docente;
        editIndex = -1;
    }

    form.reset();
    mostrarDocentes();
});

function mostrarDocentes() {

    tabla.innerHTML = "";

    docentes.forEach((d, index) => {

        tabla.innerHTML += `
<tr>
<td>${d.nombre} ${d.apellido}</td>
<td>${d.area}</td>
<td>${d.asignatura}</td>
<td>
<button onclick="editar(${index})">Editar</button>
<button onclick="eliminar(${index})">Eliminar</button>
</td>
</tr>
`;

    });
}

function eliminar(index) {
    docentes.splice(index, 1);
    mostrarDocentes();
}

function editar(index) {

    let d = docentes[index];

    tipoDocumento.value = d.tipoDocumento;
    nombre.value = d.nombre;
    apellido.value = d.apellido;
    fechaNacimiento.value = d.fechaNacimiento;
    nivel.value = d.nivel;
    area.value = d.area;
    asignatura.value = d.asignatura;
    grado.value = d.grado;
    eps.value = d.eps;
    salario.value = d.salario;

    editIndex = index;
}