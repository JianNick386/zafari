const email = window.document.querySelector('#email');
const password = window.document.querySelector('#password');
const mensaje = window.document.querySelector('#mensaje');

const boton = window.document.querySelector('#boton');

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const emailValue = email.Value;
    const passwordValue = password.Value;
    if (emailValue == '') {
        console.log('email:' + emailValue);
        console.log('password:' + passwordValue);
        emai.Value = '';
        password.Value = '';
        emai.focus();


        if (emailValue === 'ejemplo@gmail.com' && passwordValue === '123456') {
            mensaje.classList = [];
            mensaje.classList.add('mensaje-visible');
            console.log('iniciando sesion');
        } else {
            mensaje.classList = [];
            mensaje.classList.add('mensaje-visible');
            console.log('email y/o contraseña incorrectos');
        }
    } else {
        console.log('ingresar datos')
    }
}