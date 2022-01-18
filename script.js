const buttonLogin = document.getElementById('btn-login');
const senha = document.querySelector('#password');
const email = document.querySelector('#email');
const submit = document.getElementById('submit-btn');
const aggre = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const count = document.getElementById('counter');
/* Tentativa do 21:
const inputName = document.getElementById('input-name').value;
const inputLastName = document.getElementById('input-lastname').value;
const inputEmail = document.getElementById('input-email').value;
const casa = document.getElementById('house').value;
const family = document.getElementById('label-family').value;
const avaliation = document.getElementById('label-rate').value; */

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

/* Tentativa do 21:
function saveForm() {
  const formObj = { Name: [inputName, inputLastName],
    Email: inputEmail,
    Casa: casa,
    Família: family,
    Avaliação: avaliation,
    Observações: comment.value,
  };
  const p = document.createElement('p');
  p.innerText = formObj;
  document.form.appendChild(p);
}

submit.addEventListener('click', saveForm); */
buttonLogin.addEventListener('click', login);
aggre.addEventListener('change', submitForm);
comment.addEventListener('input', contador);
