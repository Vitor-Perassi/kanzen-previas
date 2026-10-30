const SERV=[
  {t:"Saúde do idoso", dur:"50 min", preco:0},
  {t:"Fisioterapia respiratória", dur:"50 min", preco:0},
  {t:"Reabilitação cardíaca", dur:"50 min", preco:0},
  {t:"Equilíbrio e prevenção de quedas", dur:"50 min", preco:0},
  {t:"Avaliação", dur:"60 min", preco:0}
];
const HORAS=["07:00","08:00","09:00","10:00","11:00","13:00","14:00","15:00"];
/* agendamento demo */
const st={serv:null,dia:null,hora:null,mod:"Consultório · Jaçanã"};
$('bServ').innerHTML=SERV.map((s,i)=>`<button class="chip" data-i="${i}">${s.t}</button>`).join('');
function pickServ(i){st.serv=SERV[i];[...$('bServ').children].forEach(c=>c.classList.toggle('on',+c.dataset.i===+i));check();}
$('bServ').onclick=e=>{const b=e.target.closest('.chip');if(b)pickServ(b.dataset.i);};
function pickMod(m){st.mod=m;[...$('bMod').children].forEach(c=>c.classList.toggle('on',c.dataset.m===m));}
$('bMod').onclick=e=>{const b=e.target.closest('.chip');if(b)pickMod(b.dataset.m);};
const dn=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],mn=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const dias=[];let d=new Date();d.setDate(d.getDate()+1);
while(dias.length<10){if(d.getDay()!==0&&d.getDay()!==6)dias.push(new Date(d));d.setDate(d.getDate()+1);}
$('bDias').innerHTML=dias.map((x,i)=>`<button class="chip" data-i="${i}">${dn[x.getDay()]}<small>${x.getDate()} ${mn[x.getMonth()]}</small></button>`).join('');
function seed(n){let x=Math.sin(n)*10000;return x-Math.floor(x);}
$('bDias').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const x=dias[b.dataset.i];st.dia=x;st.hora=null;
  [...$('bDias').children].forEach(c=>c.classList.toggle('on',c===b));
  $('bHoras').innerHTML=HORAS.map((h,j)=>{const busy=seed(x.getDate()*13+j)>.6;return `<button class="chip" ${busy?'disabled':''} data-h="${h}">${h}</button>`;}).join('');
  check();};
$('bHoras').onclick=e=>{const b=e.target.closest('.chip');if(!b||b.disabled)return;st.hora=b.dataset.h;[...$('bHoras').children].forEach(c=>c.classList&&c.classList.toggle('on',c===b));check();};
['bResp','bCrianca','bTel'].forEach(id=>$(id).oninput=check);
function check(){$('bOk').disabled=!(st.serv&&st.dia&&st.hora&&$('bResp').value.trim()&&$('bTel').value.trim());}
const esc=s=>s.replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
$('bOk').onclick=()=>{
  const ag={id:Date.now(),serv:st.serv.t,dur:st.serv.dur,mod:st.mod,data:st.dia.toISOString().slice(0,10),hora:st.hora,resp:$('bResp').value.trim(),crianca:$('bCrianca').value.trim(),tel:$('bTel').value.trim(),status:'Confirmado',origem:'Site',novo:true};
  try{const L=JSON.parse(localStorage.getItem('kz_edna_site')||'[]');L.push(ag);localStorage.setItem('kz_edna_site',JSON.stringify(L));}catch(e){}
  $('resume').innerHTML=`<b>${esc(ag.serv)}</b> · ${esc(ag.mod)}<br>${dn[st.dia.getDay()]}, ${st.dia.getDate()} de ${mn[st.dia.getMonth()]} às ${ag.hora}<br>Nome: ${esc(ag.resp)}${ag.crianca?'<br>Paciente: '+esc(ag.crianca):''}`;
  $('form').style.display='none';$('done').style.display='block';
  window.scrollTo({top:$('agendar').offsetTop-70,behavior:'smooth'});
};
$('bAgain').onclick=()=>{$('form').style.display='';$('done').style.display='none';};

/* pré-seleção vinda de outras páginas */
const qp=new URLSearchParams(location.search);
if(qp.has('serv'))pickServ(qp.get('serv'));
if(qp.get('modo')==='domicilio')pickMod('Domicílio');
