const form = document.getElementById('form');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
let filesArray = []; // Массив для хранения файлов

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const inputName = form.querySelector('input[name="name"]').value;
  alert(
    `Спасибо, ${inputName}, ваша форма отправлена. Вскоре мы свяжемся с вами!`
  );
}

fileInput.addEventListener('change', (event) => {
  const selectedFiles = Array.from(event.target.files);

  selectedFiles.forEach((file) => {
    if (filesArray.length < 3) {
      // Лимит на 3 файла
      if (!filesArray.some((f) => f.name === file.name)) {
        // Проверка на уникальность имени файла
        filesArray.push(file);
        displayFile(file); // Отображаем файл на странице
      } else {
        alert(`Файл с именем "${file.name}" уже загружен.`);
      }
    } else {
      alert('Можно прикрепить не более 3 файлов');
    }
  });

  fileInput.value = ''; // Очищаем input после добавления
});

// Функция отображения файла в списке
function displayFile(file) {
  console.log('Отображение файла:', file.name);

  const li = document.createElement('li');
  li.textContent = file.name;

  // Кнопка удаления файла
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '✖';
  deleteButton.style.marginLeft = '10px';
  deleteButton.type = 'button';

  deleteButton.addEventListener('click', () => {
    deleteFile(file);
    fileList.removeChild(li);
  });

  li.appendChild(deleteButton);
  fileList.appendChild(li);
}

// Функция удаления файла из списка и массива
function deleteFile(file) {
  filesArray = filesArray.filter((f) => f !== file);
  console.log('Файл удален:', file.name);
}
