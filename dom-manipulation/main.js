let clicks = 0;

const $hotBtn = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function () {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
});
