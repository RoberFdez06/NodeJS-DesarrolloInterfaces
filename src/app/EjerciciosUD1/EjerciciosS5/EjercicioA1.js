const libro = { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 310 };

const { titulo, autor } = libro;
console.log(`Título:${titulo}\nAutor:${autor}`);

const describir = ({ titulo, autor, paginas, editorial }) => {
    console.log(`Título:${titulo}\nAutor:${autor}\nPáginas:${paginas}`);
};

console.log(describir(libro));

//No, indefinido