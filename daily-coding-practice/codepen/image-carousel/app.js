const dots = document.querySelector('.dots');
dots.addEventListener('click', e => {
  const target = e.target;
  if (!target.matches('.dot')) {
	  return;
  }
  
  const index = Array.from(dots.children).indexOf(target);
  const selector = `.card:nth-child(${index + 1})`;
  const card = document.querySelector(selector)
  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
})


let cardCount = $(".carousel").children().length;
let dot = '<button class="dot"></button>';

(function addDots() {
  for (let i = 0; i < cardCount; i++) {
    $('.dots').append(dot);
  }
}())