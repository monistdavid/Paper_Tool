document.addEventListener('click', (event) => {
  console.log("HERE")
  const target = event.target;
  if (target.tagName === 'A' && target.href && target.href.endsWith('.pdf')) {
    event.preventDefault();
    chrome.tabs.update({ url: 'https://scholar.google.com/' });
  }
});
