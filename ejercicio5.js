const grades = {
    metodologia: 70,
    matematicas: 80,
    intefases: 60,
    informatica: 50
};

let notas = Object.values(grades); //devuelve array
let menores70 = notas.filter(nota => nota < 70); //devuelve array

if (menores70.length > 0) {
    alert(`Tienes ${menores70.length} notas menores a 70.`);
} else {
    alert('No tienes notas menores a 70.');
}

