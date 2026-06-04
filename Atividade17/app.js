/*let express = require('express')
let app = express()
app.set('view engine','ejs')
*/
const { text } = require('express');
let app = require('./app/config/server');
let texto = require('./modulo1')

let rotaHome = require('./app/routes/home');
rotaHome(app)

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app)

let rotaCursos = require('./app/routes/cursos');
rotaCursos(app)

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app)

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app)


app.listen(3000, function(){
    console.log(`Servidor iniciado ${texto}`);
})