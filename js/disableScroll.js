window.disableScroll = function() {
   const body =  document.body;
   body.dbscrollY = window.scrollY;
   body.style.cssText = `
    position: fixed;
    top: ${~window.scrollY}px;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
   `;
}


window.enablesScroll = function() {
    const body =  document.body;
    window.scroll({top: document.body.dbscrollY});
}