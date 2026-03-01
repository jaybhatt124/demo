/* shared.js */
(function(){
  const nav = document.getElementById('mainNav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
function toggleMenu(){
  const m = document.getElementById('mobileMenu');
  if(m) m.classList.toggle('open');
}
(function(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
})();
function toggleChat(){ document.getElementById('chatWindow').classList.toggle('open'); }
const chatReplies = {
  'Book a Room':     "Use our booking bar above to select dates, or call +91\u00a095107\u00a071506! 🗓️",
  'Special Offers':  "Current deals:\n🌅 Weekend Escape from ₹3,499/night\n💍 Honeymoon Package ₹7,999/night\n💼 Corporate Stay ₹2,999/night",
  'Wedding Enquiry': "We'd love to host your celebration! 💍\nEmail: bookings@theskyimperial.com\nCall: +91 95107 71506",
  'Contact / Help':  "📞 +91 95107 71506\n✉️ bookings@theskyimperial.com\nAvailable 24×7!"
};
function sendSuggest(t){ appendChatMsg(t,'user'); setTimeout(()=>appendChatMsg(chatReplies[t]||"Call +91 95107 71506 for instant help! 🌟",'bot'),600); }
function sendMsg(){
  const inp=document.getElementById('chatInput');
  const txt=inp.value.trim(); if(!txt) return;
  appendChatMsg(txt,'user'); inp.value='';
  setTimeout(()=>appendChatMsg("For fastest response call +91 95107 71506 or email bookings@theskyimperial.com 🌟",'bot'),800);
}
function appendChatMsg(text,type){
  const msgs=document.getElementById('chatMessages'); if(!msgs) return;
  const d=document.createElement('div'); d.className='chat-msg '+type;
  d.style.whiteSpace='pre-line'; d.textContent=text;
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}
document.addEventListener('DOMContentLoaded',()=>{
  const inp=document.getElementById('chatInput');
  if(inp) inp.addEventListener('keydown',e=>{if(e.key==='Enter')sendMsg();});
  const ci=document.getElementById('checkin'),co=document.getElementById('checkout');
  const today=new Date(),tom=new Date(today); tom.setDate(tom.getDate()+1);
  const fmt=d=>d.toISOString().split('T')[0];
  if(ci) ci.value=fmt(today); if(co) co.value=fmt(tom);
});
function openLightbox(src){
  const lb=document.getElementById('lightbox'),img=document.getElementById('lightboxImg');
  if(lb&&img){img.src=src;lb.classList.add('open');}
}
function closeLightbox(){ const lb=document.getElementById('lightbox'); if(lb)lb.classList.remove('open'); }
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
