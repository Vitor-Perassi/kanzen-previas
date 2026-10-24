const WA="5511913423558";
const $=id=>document.getElementById(id);
if($('ano'))$('ano').textContent=new Date().getFullYear();
const wa=`https://wa.me/${WA}?text=${encodeURIComponent('Olá, Monique! Vim pelo site e gostaria de agendar uma consulta.')}`;
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa);
const nav=$('nav');
$('burger').onclick=()=>{const o=nav.classList.toggle('open');$('burger').setAttribute('aria-expanded',o);};
