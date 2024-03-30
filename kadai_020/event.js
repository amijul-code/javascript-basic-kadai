const btn = document.getElementsById('btn');

const text = document.getElementsById('text');

btn.addEventListener('click',() => {
 const childList = document.createElement('li');
 childList.textContent = 'ボタンをクリックしました';
 text.appendChild(childList);
 text.textContent = 'ボタンをクリックしました。';
});
