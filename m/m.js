/* Modelo genérico Kanzen Studio — dados vêm de leads.json (?c=código) */
const NICHOS={
 nutri:{prof:["Nutricionista","Nutricionista"],tag:"Nutrição com acompanhamento de verdade",h1:"Comer bem sem dieta impossível.",lead:"Um plano alimentar feito para a sua rotina, com acompanhamento próximo e metas reais. Agende sua consulta online em menos de um minuto.",cta:"Agendar consulta",modo:"Presencial e online",step3:"Na consulta, avaliamos sua rotina, objetivos e histórico para montar o seu plano.",servIntro:"Cada plano é individual e construído junto com você.",
  serv:[["🥗","Emagrecimento","Perda de peso com saúde, sem cortar tudo o que você gosta."],["💪","Nutrição esportiva","Mais desempenho, energia e recuperação nos treinos."],["🩺","Nutrição clínica","Diabetes, colesterol, intestino e outras condições."],["👶","Nutrição materno-infantil","Gestação, amamentação e introdução alimentar."]],
  faq:[["Preciso levar exames?","Se tiver exames recentes, leve ou envie antes. Se não tiver, avaliamos na consulta se é preciso pedir algum."],["Tem consulta online?","Sim, por videochamada, com o mesmo cuidado da presencial. O plano chega pelo WhatsApp."],["Como funciona o retorno?","Os retornos acompanham a sua evolução e ajustam o plano sempre que precisar."]]},
 fisio:{prof:["Fisioterapeuta","Fisioterapeuta"],tag:"Fisioterapia com atenção a cada detalhe",h1:"Voltar a se mover sem dor.",lead:"Tratamento individual, da avaliação à alta, com exercícios e técnicas escolhidos para o seu caso. Agende sua sessão online.",cta:"Agendar sessão",modo:"Consultório",step3:"Na avaliação, entendemos a dor, o histórico e o que você quer voltar a fazer.",servIntro:"O tratamento começa por uma avaliação e é ajustado a cada sessão.",
  serv:[["🦴","Ortopédica","Coluna, joelho, ombro, tendinites e recuperação de lesões."],["🧠","Neurológica","Reabilitação pós-AVC, equilíbrio, marcha e independência."],["👵","Idosos","Prevenção de quedas, mobilidade e fortalecimento."],["🩹","Pós-operatório","Recuperação segura depois de cirurgias ortopédicas."]],
  faq:[["Preciso de pedido médico?","Não é obrigatório para começar. Se tiver pedido, exames ou laudos, leve na avaliação."],["Quanto dura cada sessão?","Em média 50 minutos. A primeira é uma avaliação mais completa."],["Posso remarcar?","Pode, com até 24 horas de antecedência, pelo link da confirmação ou pelo WhatsApp."]]},
 psico:{prof:["Psicóloga","Psicólogo"],tag:"Um espaço seguro para você",h1:"Cuidar da mente também é prioridade.",lead:"Psicoterapia com acolhimento, sigilo e escuta sem julgamentos. Escolha o melhor horário e agende online, no seu tempo.",cta:"Agendar sessão",modo:"Presencial e online",step3:"Na primeira sessão, conversamos sobre o que te trouxe e como posso ajudar.",servIntro:"Atendimento individual, presencial ou online.",
  serv:[["🧠","Ansiedade","Entender e lidar com a ansiedade no dia a dia."],["🌧️","Depressão e luto","Acolhimento em momentos difíceis."],["💬","Autoconhecimento","Relacionamentos, autoestima e escolhas."],["💻","Terapia online","Sessões por vídeo, de onde você estiver."]],
  faq:[["Quanto tempo dura a sessão?","Em média 50 minutos, normalmente uma vez por semana."],["A terapia online funciona?","Sim. Tem a mesma eficácia da presencial e mais praticidade."],["O que eu falo é sigiloso?","Sempre. O sigilo é garantido pelo Código de Ética da profissão."]]},
 odonto:{prof:["Dentista","Dentista"],tag:"Odontologia completa e humanizada",h1:"Seu sorriso em boas mãos.",lead:"Do check-up à estética, com atendimento cuidadoso e sem dor. Agende sua avaliação online em menos de um minuto.",cta:"Agendar avaliação",modo:"Consultório",step3:"Na avaliação, examinamos e explicamos cada opção de tratamento, sem pressa.",servIntro:"Tratamentos para toda a família.",
  serv:[["🦷","Clínico geral","Limpeza, restaurações e check-up."],["✨","Estética","Clareamento, facetas e lentes."],["😁","Ortodontia","Aparelhos fixos e alinhadores."],["🔩","Implantes","Reabilitação com segurança e conforto."]],
  faq:[["A avaliação é paga?","Informação a combinar com a clínica."],["Atende convênio?","Informação a combinar com a clínica."],["Atende urgência?","Entre em contato pelo WhatsApp para verificar o horário mais próximo."]]},
 estetica:{prof:["Estética","Estética"],tag:"Estética avançada com cuidado",h1:"Sua melhor versão, com naturalidade.",lead:"Tratamentos faciais e corporais personalizados, com avaliação individual. Agende online, de dia ou de madrugada.",cta:"Agendar avaliação",modo:"Espaço próprio",step3:"Na avaliação, entendemos seus objetivos e indicamos o melhor protocolo.",servIntro:"Protocolos pensados para cada pele e cada corpo.",
  serv:[["✨","Limpeza de pele","Pele renovada, limpa e hidratada."],["💆","Drenagem linfática","Menos inchaço e mais bem-estar."],["🌿","Tratamentos faciais","Manchas, acne e rejuvenescimento."],["💪","Corporal","Gordura localizada, flacidez e celulite."]],
  faq:[["Preciso de avaliação antes?","Sim, para indicar o protocolo certo para você."],["Quantas sessões preciso?","Depende do tratamento; isso é definido na avaliação."],["Posso remarcar?","Pode, com até 24 horas de antecedência."]]}
};
const $=id=>document.getElementById(id);
const code=new URLSearchParams(location.search).get('c')||'';
let D=null;
try{const x=new XMLHttpRequest();x.open('GET','leads.json?v='+Date.now(),false);x.send();D=JSON.parse(x.responseText)[code]||null;}catch(e){}
if(!D){document.body.classList.add('notfound');}
else{
const N=NICHOS[D.n]||NICHOS.nutri;
const prof=D.prof||N.prof[D.g==='m'?1:0];
const ini=D.nome.replace(/^(Dra?\.?|Dr\.?)\s+/i,'').split(/\s+/).filter(w=>w.length>2||/^[A-Z]/.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase();
const telFmt=D.w.replace(/^55(\d{2})(\d{5})(\d{4})$/,'($1) $2-$3');
const F={nome:D.nome,prof,ini,tag:N.tag,h1:N.h1,lead:N.lead,cta:N.cta,modo:D.modo||N.modo,bairro:D.b,end:D.e?(' '+D.e):' São Paulo/SP',tel:telFmt,step3:N.step3,servIntro:N.servIntro};
document.querySelectorAll('[data-f]').forEach(el=>{const k=el.dataset.f;if(F[k]!=null)el.textContent=F[k];});
document.title=D.nome+' · '+prof+' em '+D.b;
$('ano').textContent=new Date().getFullYear();
const wa=`https://wa.me/${D.w}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de agendar um horário.')}`;
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa);
const q=encodeURIComponent((D.e?D.e+', ':'')+D.b+', São Paulo - SP');
$('mapa').src=`https://maps.google.com/maps?q=${q}&z=15&output=embed`;
$('rota').href=`https://www.google.com/maps/dir/?api=1&destination=${q}`;
['toPanel','toPanel2'].forEach(i=>$(i).href='painel.html?c='+encodeURIComponent(code));
$('servGrid').innerHTML=N.serv.map((s,i)=>`<div class="card"><div class="ico">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><a data-serv="${i}" href="#agendar">Agendar →</a></div>`).join('');
$('faq').innerHTML=N.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
const nav=$('nav');$('burger').onclick=()=>{const o=nav.classList.toggle('open');$('burger').setAttribute('aria-expanded',o);};
$('mmenu').addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open');});
/* agendamento demo */
const SERV=N.serv.map(s=>s[1]).concat(['Retorno']);
const HORAS=["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"];
const st={serv:null,dia:null,hora:null};
$('bServ').innerHTML=SERV.map((s,i)=>`<button class="chip" data-i="${i}">${s}</button>`).join('');
function pickServ(i){st.serv=SERV[i];[...$('bServ').children].forEach(c=>c.classList.toggle('on',+c.dataset.i===+i));check();}
$('bServ').onclick=e=>{const b=e.target.closest('.chip');if(b)pickServ(b.dataset.i);};
document.querySelectorAll('[data-serv]').forEach(a=>a.addEventListener('click',()=>pickServ(a.dataset.serv)));
const dn=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],mn=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const dias=[];let d=new Date();d.setDate(d.getDate()+1);
while(dias.length<10){if(d.getDay()!==0&&d.getDay()!==6)dias.push(new Date(d));d.setDate(d.getDate()+1);}
$('nextSlot').textContent=`${dn[dias[0].getDay()]}, ${dias[0].getDate()} ${mn[dias[0].getMonth()]} · 09:00`;
$('bDias').innerHTML=dias.map((x,i)=>`<button class="chip" data-i="${i}">${dn[x.getDay()]}<small>${x.getDate()} ${mn[x.getMonth()]}</small></button>`).join('');
const seed=n=>{let x=Math.sin(n)*10000;return x-Math.floor(x);};
$('bDias').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const x=dias[b.dataset.i];st.dia=x;st.hora=null;
 [...$('bDias').children].forEach(c=>c.classList.toggle('on',c===b));
 $('bHoras').innerHTML=HORAS.map((h,j)=>`<button class="chip" ${seed(x.getDate()*13+j)>.6?'disabled':''} data-h="${h}">${h}</button>`).join('');check();};
$('bHoras').onclick=e=>{const b=e.target.closest('.chip');if(!b||b.disabled)return;st.hora=b.dataset.h;[...$('bHoras').children].forEach(c=>c.classList&&c.classList.toggle('on',c===b));check();};
['bNome','bTel'].forEach(id=>$(id).oninput=check);
function check(){$('bOk').disabled=!(st.serv&&st.dia&&st.hora&&$('bNome').value.trim()&&$('bTel').value.trim());}
const esc=s=>s.replace(/[<>&"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
$('bOk').onclick=()=>{
 const iso=new Date(st.dia);iso.setMinutes(iso.getMinutes()-iso.getTimezoneOffset());
 const ag={serv:st.serv,data:iso.toISOString().slice(0,10),hora:st.hora,nome:$('bNome').value.trim(),tel:$('bTel').value.trim()};
 try{const k='kz_m_'+code;const L=JSON.parse(localStorage.getItem(k)||'[]');L.push(ag);localStorage.setItem(k,JSON.stringify(L));}catch(e){}
 $('resume').innerHTML=`<b>${esc(ag.serv)}</b><br>${dn[st.dia.getDay()]}, ${st.dia.getDate()} de ${mn[st.dia.getMonth()]} às ${ag.hora}<br>${esc(ag.nome)}`;
 $('form').style.display='none';$('done').style.display='block';};
$('bAgain').onclick=()=>{$('form').style.display='';$('done').style.display='none';};
}
