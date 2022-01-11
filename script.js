const buttonLogin = document.getElementById('btn-login');
const senha = document.querySelector('#password');
const email = document.querySelector('#email');
const submit = document.getElementById('submit-btn');
const aggre = document.getElementById('agreement');
function login() {
  const emailTeste = email.value;
  const senhaTeste = senha.value;

  if (emailTeste === 'tryber@teste.com' && senhaTeste === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function submitForm() {
  const aggreValue = aggre.checked;
  if (aggreValue === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
buttonLogin.addEventListener('click', login);
aggre.addEventListener('change', submitForm);
