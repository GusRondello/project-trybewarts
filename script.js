const buttonLogin = document.getElementById('btn-login');
const senha = document.querySelector('#password');
const email = document.querySelector('#email');
const submit = document.getElementById('submit-btn');
const aggre = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const count = document.getElementById('counter');
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

function contador() {
  const commentValue = comment.value.split('');
  count.value = 500;
  count.innerText = count.value;
  if (commentValue.length < 500) {
    count.innerText -= commentValue.length;
    count.value = count.innerText;
    return count.innerText;
  }
}

buttonLogin.addEventListener('click', login);
aggre.addEventListener('change', submitForm);
comment.addEventListener('input', contador);
