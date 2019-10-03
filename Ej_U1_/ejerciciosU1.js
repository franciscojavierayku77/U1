var texto = " \
Ocurre una cosa graciosa con las madres y los padres.\
Aunque su hijo sea el ser mas repugnante que uno pueda \
imaginarse, creen que es maravilloso.\
Algunos padres van aun mas lejos.\
Su adoracion llega a cegarlos y estan convencidos \
de que su vastago tiene cualidades de genio.\
Bueno, no hay nada malo en ello. Mc La gente es asi. \
Sólo cuando los padres empiezan a hablarnos de las \
maravillas de su descendencia es cuando gritamos: \
«¡Tráiganme una palangana! ¡Voy a vomitar!».\
";
//todas la palabras con una longitud de 7
var expresion = /[a-z|A-Z]{7,}/g
result = texto.match(expresion);
console.log(result);

//expresiones que no finalicen con una vocal
var expresion2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(expresion2);
console.log(result);

//palabras que inicien con M donde la segunda no sea vocal
var expresion3 = /\b[m][^aeiou ]+/gim
result = texto.match(expresion3);
console.log(result);

//expresion entre comillas ''
let textoComilla = "'camaron que se duerme se lo lleva la corriente' \
se dice eso por los 'viejos' de la calle";
let expresion4 = textoComilla.match(/['][a-z]+[']/gi);
console.log(expresion4);

//mostrar ips
let textoIp = "Ejemplo de IP: 192.110.20.7"
let expresion5 = textoIp.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(expresion5);

//mostrar las horas
var horas = "\
Ejemplos de horas\
10:30:00, 17:50:61 \
07:30:30\
";
var expresion6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(expresion6)
console.log(result);


//mostrar telefonos
var telefonos = "\
984-103-4507 \
0551-2000-1080 \
352-300-99-00\
985-700-7001\
";
var expresion7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;
result = telefonos.match(expresion7)
console.log(result);

//mostrar correos
var correo = "\
Origami@hotmail.com \
Jetpack@hotmail.com \
Ajin@hotmail.com\
";
var expresion8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;
result = correo.match(expresion8)
console.log(result);

//mostrar urls
let urls = "urls: \
http//:www.facebook.com\
http//www.google.com\
";
let newMensaje9 = urls.match(/\S+[.com | .net |.org]/g);
console.log(newMensaje9);

//mostrar codigos postales 
let codigoP = "77027"; 
let newcodigoP = codigoP.match(/[0-9]{5}/g);
console.log(newcodigoP);