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

const scrollRight = document.querySelector('.carousel-button-right');
let scrollIndex = 0;
const cardCount = $(".cards").children().length;

scrollRight.addEventListener('click', (e) => {
  if (scrollIndex < cardCount - 1) {
    scrollIndex++;
    const selector = `.card:nth-child(${scrollIndex + 1})`;
    const card = document.querySelector(selector)
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'start'
    })
  }
});

const scrollLeft = document.querySelector('.carousel-button-left');
scrollLeft.addEventListener('click', (e) => {
  if (scrollIndex > 0) {
    scrollIndex--;
    const selector = `.card:nth-child(${scrollIndex + 1})`;
    const card = document.querySelector(selector)
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'start'
    })
  }
})


const dot = '<button class="dot"></button>';

(function addDots() {
  for (let i = 0; i < cardCount; i++) {
    $('.dots').append(dot);
  }
}())