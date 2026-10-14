/**a) Para cada situación, di si usarías Link o router.push y por qué, con el
criterio de la sesión (¿el destino es siempre el mismo, o depende de algo que ocurre en el código?):

1. Un enlace «Acerca de» que siempre lleva a /acerca.
link
2. Pulsar un libro de la lista para ver su ficha.
router.push
3. Un enlace «Términos y condiciones» en la parte de abajo de la pantalla de inicio.
link
4. Al terminar de guardar un libro nuevo, abrir automáticamente la ficha del libro que se acaba de crear.
router.push
5. Un botón «Ayuda» siempre visible que lleva a /ayuda.
link

b) Aquí tienes una versión simplificada (sin React) de lo que ocurre con onPress. router.push solo
escribe un mensaje, y Pressable guarda lo que le des y lo ejecuta al "pulsar". Escribe lo que saldría por
consola, en orden, sin ejecutarlo:
*/

const router = {
    push: (destino) => console.log("Navegando a", destino.pathname),
};
function Pressable({ onPress }) {
    return {
        pulsar: () => {
            if (typeof onPress === "function") {
                onPress();
            } else {
                console.log("onPress no es función:", onPress);
            }
        },
    };
}
console.log("-- sin flecha:");
const a = Pressable({ onPress: router.push({ pathname: "/libro/1" }) });
console.log("(ya ha navegado al crear el botón)");
a.pulsar();
console.log("-- con flecha:");
const b = Pressable({ onPress: () => router.push({ pathname: "/libro/1" }) });
console.log("(todavía no ha navegado)");
b.pulsar();

/**
 Navegando a /libro/1
(ya ha navegado al crear el botón)
onPress no es función: undefined
-- con flecha:
(todavía no ha navegado)
Navegando a /libro/1
 */