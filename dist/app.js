const dishes=[
  {category:'pizza',name:'Мясная пицца',description:'Румяный бортик, мясная начинка и сыр',price:590,image:'hero.jpg',alt:'Пицца с мясной начинкой — фото из карточки кафе'},
  {category:'hot',name:'Мясо с овощами',description:'Горячее блюдо с овощами и сливочным соусом',price:490,image:'food-1.jpg',alt:'Мясо с овощами и соусом — фото из карточки кафе'},
  {category:'rolls',name:'Ролл с огурцом',description:'Нежная начинка, свежий огурец и соус',price:390,image:'food-3.jpg',alt:'Роллы в тонких ломтиках огурца — фото из карточки кафе'}
];
const menu={all:dishes,pizza:dishes.filter(d=>d.category==='pizza'),hot:dishes.filter(d=>d.category==='hot'),rolls:dishes.filter(d=>d.category==='rolls')};
const grid=document.getElementById('dish-grid');
function renderMenu(category){grid.innerHTML=menu[category].map(d=>`<article class="dish"><div class="dish-image"><img src="assets/${d.image}" alt="${d.alt}" width="800" height="680" loading="lazy"></div><div class="dish-heading"><h3>${d.name}</h3><span class="dish-price">${d.price} ₽</span></div><p>${d.description}</p></article>`).join('');}
renderMenu('all');
document.querySelectorAll('.menu-tab').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.menu-tab').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderMenu(button.dataset.category);}));
const navToggle=document.querySelector('.nav-toggle');const nav=document.getElementById('navigation');
navToggle.addEventListener('click',()=>{const expanded=navToggle.getAttribute('aria-expanded')!=='true';navToggle.setAttribute('aria-expanded',String(expanded));navToggle.setAttribute('aria-label',expanded?'Закрыть навигацию':'Открыть навигацию');nav.classList.toggle('open',expanded);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navToggle.setAttribute('aria-expanded','false');navToggle.setAttribute('aria-label','Открыть навигацию');nav.classList.remove('open');}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){navToggle.click();navToggle.focus();}});
const dateInput=document.getElementById('date');const now=new Date();const localISO=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;dateInput.min=localISO(now);dateInput.value=localISO(now);
const form=document.getElementById('booking-form');const statusBox=document.getElementById('booking-status');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const selectedDate=new Date(`${dateInput.value}T${document.getElementById('time').value}:00`);if(selectedDate<new Date()){statusBox.hidden=false;statusBox.textContent='Это время уже прошло. Выберите более позднее время или другой день.';return;}const formatted=selectedDate.toLocaleDateString('ru-RU',{day:'numeric',month:'long'});const guests=document.getElementById('guests').selectedOptions[0].textContent;statusBox.hidden=false;statusBox.replaceChildren(document.createTextNode(`Ваша встреча: ${formatted}, ${document.getElementById('time').value}, ${guests.toLowerCase()}. Это пример — стол не забронирован. Для настоящей брони позвоните в кафе: `));const link=document.createElement('a');link.href='tel:+79151077330';link.textContent='+7 (915) 107-73-30';link.style.textDecoration='underline';statusBox.append(link);});
form.addEventListener('input',()=>{statusBox.hidden=true;});
