
document.addEventListener('DOMContentLoaded', function(){
  // slide reveal on scroll
  const slides = document.querySelectorAll('.slide');
  function reveal(){
    slides.forEach(s=>{
      const r = s.getBoundingClientRect();
      if(r.top < window.innerHeight - 80) s.classList.add('visible');
    });
  }
  reveal(); window.addEventListener('scroll', reveal);

  // carousel
  const carouselInner = document.getElementById('carouselInner');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const add = document.getElementById('addReview');
  let reviews = []; // starts empty
  let idx = 0;
  function render(){
    carouselInner.innerHTML = '';
    if(reviews.length === 0){
      const el = document.createElement('div');
      el.className = 'review-card';
      el.innerHTML = '<p class="muted">No reviews yet.</p>';
      carouselInner.appendChild(el);
      return;
    }
    reviews.forEach(r=>{
      const el = document.createElement('div');
      el.className = 'review-card';
      el.innerHTML = '<p>'+r+'</p>';
      carouselInner.appendChild(el);
    });
    carouselInner.style.transform = 'translateX(-'+(idx*100)+'%)';
  }
  prev && prev.addEventListener('click', ()=>{ if(reviews.length){ idx = (idx-1+reviews.length)%reviews.length; render(); }});
  next && next.addEventListener('click', ()=>{ if(reviews.length){ idx = (idx+1)%reviews.length; render(); }});
  add && add.addEventListener('click', ()=>{ const t = prompt('Write a short review:'); if(t){ reviews.push(t); idx = reviews.length-1; render(); }});
  render();
});
