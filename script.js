const buttonLogin = document.getElementById('btn-login');
const senha = document.querySelector('#password');
const email = document.querySelector('#email');

function login() {
  const emailTeste = email.value;
  const senhaTeste = senha.value;

  if (emailTeste === 'tryber@teste.com' && senhaTeste === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);
