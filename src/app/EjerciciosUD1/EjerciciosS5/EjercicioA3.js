const libro = { titulo:"DrÁcuLa", autor:"Bram Stoker", paginas:418 };

function crearFicha({ titulo, autor, paginas }) {
    return `${titulo} - ${autor} (${paginas} pág.)`;
}
console.log(crearFicha(libro));
console.log(crearFicha({titulo:"DrÁcuLa", autor:"Bram Stoker", paginas:418}))