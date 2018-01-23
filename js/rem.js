(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        pW = 640,
        recalc = function() {
            var cW = docEl.clientWidth < 640 ? docEl.clientWidth : 640;
            if (!cW) {
                return;
            }
            docEl.style.cssText = 'font-size:'+20 * (cW / pW) + 'px !important';
        };
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);