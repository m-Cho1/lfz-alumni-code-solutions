const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    const currentTab = event.target.getAttribute('data-view');
    for (let i = 0; i < $views.length; i++) {
      if ($views[i].getAttribute('data-view') === currentTab) {
        $views[i].className = 'view';
      } else {
        $views[i].className = 'hidden';
      }
    }
  }
});
