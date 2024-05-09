const PANEL_OPEN_FLG = 'is-opened';
const HEADER_HEIGHT = document.querySelector('.l-header').clientHeight;

tabMenu();
humbargerMenu();

function tabMenu() {
  const tabs = document.querySelectorAll('.c-tab');

  const panelContainer = document.querySelector('.c-panel-container');
  const currentPanel = document.querySelector('.' + PANEL_OPEN_FLG);
  panelContainer.style.height = currentPanel.clientHeight + 'px';

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (tab.ariaExpanded == 'false') {
        const activeTab = document.querySelector('.c-tab[aria-expanded=true]');
        activeTab.ariaExpanded = 'false';
        const activePanel = document.getElementById(activeTab.getAttribute('aria-controls'));
        activePanel.classList.remove(PANEL_OPEN_FLG);

        const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));
        targetPanel.classList.add(PANEL_OPEN_FLG);
        tab.ariaExpanded = 'true';

        panelContainer.style.height = targetPanel.clientHeight + 'px';
      }
    });
  });
}

function humbargerMenu() {
  const button = document.getElementById('js-humbarger-button');
  const menu = document.getElementById('humbarger-menu');

  menu.style.marginBlockStart = HEADER_HEIGHT + 'px';

  button.addEventListener('click', function () {

    if (button.ariaExpanded == 'false') {
      button.ariaExpanded = 'true';
      menu.classList.add(PANEL_OPEN_FLG);
    } else {
      button.ariaExpanded = 'false';
      menu.classList.remove(PANEL_OPEN_FLG);
    }
  });
}


