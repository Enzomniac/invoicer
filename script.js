changeView(mainView());

function changeView(theView) {
    document.getElementById('view').innerHTML = theView;
}

function mainView() {
    let theHtml = "";
    theHtml = 
        '<div class="grid-item info">' +
            '01 SEP 2019' +
        '</div>' +
        '<div class="grid-item main" onclick="changeView(invoiceView())">' +
            'NEW INVOICE' +
        '</div>' +
        '<div class="grid-item sub-main">' +
            'QUOTE' +
        '</div>' +
        '<div class="grid-item sub-one">' +
            'SUB ONE' +
        '</div>' +
        '<div class="grid-item sub-two">' +
            'SUB TWO' +
        '</div>' +
        '<div class="grid-item sub-three">' +
            'SUB THREE' +
        '</div>';
    return theHtml;
}

function invoiceView() {
    let theHtml = "";
    theHtml = `
    <div class="grid-item info">
        Invoice:<br>
        Select Client
    </div>
    <div class="grid-item main subQuad">
        <div class="quad-item">A - G</div>
        <div class="quad-item">H - N</div>
        <div class="quad-item">O - W</div>
        <div class="quad-item">X - Z</div>
    </div>
    <div class="grid-item sub-main">
        GENERIC
    </div>
    <div class="grid-item sub-one" onclick="changeView(mainView())">
        << BACK
    </div>
    <div class="grid-item sub-two">
        .
    </div>
    <div class="grid-item sub-three">
        NEW CLIENT
    </div>
    `;        
    return theHtml;
}