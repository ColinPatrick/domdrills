window.addEventListener('DOMContentLoaded', function () {
  let container = document.createElement('div');
  container.className = 'header-container';

  let myButton = document.getElementsByClassName('myButton')[0];

  let liNum = 1;

  let header = document.createElement('h1');
  header.className = 'h1';
  let headerText = document.createTextNode('This is an h1');
  header.appendChild(headerText);
  container.appendChild(header);

  let header2 = document.createElement('h2');
  header2.className = 'h2';
  let header2Text = document.createTextNode('This is an h2');
  header2.appendChild(header2Text);
  container.appendChild(header2);

  let header3 = document.createElement('h3');
  header3.className = 'h3';
  let header3Text = document.createTextNode('This is an h3');
  header3.appendChild(header3Text);
  container.appendChild(header3);

  let header4 = document.createElement('h4');
  header4.className = 'h4';
  let header4Text = document.createTextNode('This is an h4');
  header4.appendChild(header4Text);
  container.appendChild(header4);

  let header5 = document.createElement('h5');
  header5.className = 'h5';
  let header5Text = document.createTextNode('This is an h5');
  header5.appendChild(header5Text);
  container.appendChild(header5);

  let header6 = document.createElement('h6');
  header6.className = 'h6';
  let header6Text = document.createTextNode('This is an h6');
  header6.appendChild(header6Text);
  container.appendChild(header6);

  document.body.appendChild(container);

  header.addEventListener('dblclick', function(){
    let colors = ['blue', 'yellow', 'red', 'green', 'purple', 'brown', 'pink', 'magenta'];
    let randomNum = Math.floor(Math.random() * colors.length);
    header.style.color = colors[randomNum];
  });

  myButton.addEventListener('click', function(){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let li = document.createElement('li');
    let liText = document.createTextNode('This is list item ' + liNum++);
    li.appendChild(liText);
    ul.appendChild(li);

    li.addEventListener('click', function(){
      let colors = ['blue', 'yellow', 'red', 'green', 'purple', 'brown', 'pink', 'magenta'];
      let randomNum = Math.floor(Math.random() * colors.length);
      li.style.color = colors[randomNum];
    });

    li.addEventListener('dblclick', function(){
      li.remove();
    });
  });

});
