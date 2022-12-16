function initTabs() {
  const tabs = document.getElementById('tabs');
  const content = document.querySelectorAll('.tabs__content');

  const changeClass = (element) => {
    for (let i = 0; i < tabs.children.length; i++) {
      tabs.children[i].classList.remove('is-active');
    }
    element.classList.add('is-active');
  };

  tabs.addEventListener('click', (ev) => {
    const currentTab = ev.target.dataset.btn;
    changeClass(ev.target);
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove('is-active');
      if (content[i].dataset.content === currentTab) {
        content[i].classList.add('is-active');
      }
    }
  });
}

export {initTabs};
