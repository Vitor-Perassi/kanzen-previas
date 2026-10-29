const WA="5511961671672";
const $=id=>document.getElementById(id);
if($('ano'))$('ano').textContent=new Date().getFullYear();
const wa=`https://wa.me/${WA}?text=${encodeURIComponent('Olá, Dra. Edna! Vim pelo site e gostaria de agendar uma sessão de fisioterapia.')}`;
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa);
const nav=$('nav');
$('burger').onclick=()=>{const o=nav.classList.toggle('open');$('burger').setAttribute('aria-expanded',o);};
