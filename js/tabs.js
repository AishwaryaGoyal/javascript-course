//Listen to the click event on tabs
const tabs = document.querySelectorAll('[role = "tab"]');
const tabPanels = document.querySelectorAll("[role='tabpanel']");

tabs.forEach((tab) => tab.addEventListener("click", tabClicked));

function tabClicked(event) {
  //Unselect all tabs
  tabs.forEach((tab) => tab.setAttribute("aria-selected", false));
  //Hide all tab panels
  tabPanels.forEach((tabPanel) => (tabPanel.hidden = true));
  //Select this one tab
  const selectedTab = event.currentTarget;
  selectedTab.setAttribute("aria-selected", true);
  //Show the corresponding tab panel
  const selectedTabPanel = Array.from(tabPanels).find(
    (tabPanel) => tabPanel.getAttribute("aria-labelledby") === selectedTab.id
  );
  selectedTabPanel.hidden = false;
}
