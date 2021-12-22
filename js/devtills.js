chrome.devtools.panels.elements.createSidebarPane(
  'element pannel',
  (sidebar) => {
    sidebar.setExpression("(() => {return {a:1}})()");
  }
)
chrome.devtools.panels.sources.createSidebarPane(
  "sources pannel",
  (sidebar) => {
    sidebar.setPage("sources.html");
  }
);