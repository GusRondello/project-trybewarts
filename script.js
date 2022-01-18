const buttonLogin = document.getElementById('btn-login');
const senha = document.querySelector('#password');
const email = document.querySelector('#email');
const submit = document.getElementById('submit-btn');
const aggre = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const count = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const casa = document.getElementById('house');
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
  const commentValue = comment.value;
  count.innerText = count.value;
  if (commentValue.length < 500) {
    count.innerText = 500 - commentValue.length;
    count.value = count.innerText;
    return count.innerText;
  }
}
function data() {
  const save = [];
  const family = document.querySelector('input[name="family"]:checked').value;
  const avaliation = document.querySelector('input[name="rate"]:checked').value;
  const listaMateria = document.querySelectorAll('.subject:checked');
  const valoresMaterias = [];
  for (let index = 0; index < listaMateria.length; index += 1) {
    valoresMaterias.push(listaMateria[index].value);
  }
  save[0] = `Nome: ${inputName.value} ${inputLastName.value}`;
  save[1] = `Email: ${inputEmail.value}`;
  save[2] = `Casa: ${casa.value}`;
  save[3] = `Família: ${family} `;
  save[4] = `Avaliação: ${avaliation}`;
  save[5] = `Observações: ${comment.value}`;
  save[6] = `Matérias: ${valoresMaterias.join(', ')}`;
  return save;
}
function saveForm(event) {
  event.preventDefault();
  const listaValores = data();
  form.innerHTML = '';
  for (let index = 0; index < listaValores.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = listaValores[index];
    form.appendChild(p);
  }
}
submit.addEventListener('click', saveForm);
comment.addEventListener('input', contador);
buttonLogin.addEventListener('click', login);
aggre.addEventListener('change', submitForm);
