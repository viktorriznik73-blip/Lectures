  /* Code for API example */
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://openweathermap.org/api')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log('Error', error)
    })
  })
  
  /* Code for Local Storage */
  if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0)
}
function count() {
    let counter = localStorage.getItem('counter')
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)

}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
document.querySelector('button').onclick = count;
})
/* Code for Tasks */


document.addEventListener('DOMContentLoaded', function () {

 document.querySelector('#submit').disabled = true;
    document.querySelector('#task').onkeyup = () => {
       if (document.querySelector('#task').value.length > 0) {
        document.querySelector('#submit').disabled = false;
       } else {
        document.querySelector('#submit').disabled = true;
       }
    }
 document.querySelector('form').onsubmit = () => {
    const task = document.querySelector('#task').value;
    console.log(task)
 const li = document.createElement('li');
 li.innerHTML = task;

 document.querySelector('#tasks').append(li);

 document.querySelector('#task').value = '';
  document.querySelector('#submit').disabled = false;
return false;
 }
})