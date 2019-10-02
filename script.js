let STATE = {
    clientData: 'HELLO'
}

console.log(STATE.clientData);


changeView(mainView());

loadJson();
console.log(STATE.clientData);

function loadJson() {
    fetch('storage/client.json').then(
        function(response) {
            if (response.status !== 200) {
                console.log("Error: " + response.status);
                return;
            }
            response.json().then(function(data) {                
                STATE.clientData = data.clientData;
            });
        }
    );
}

function changeView(theView) {
    document.getElementById('view').innerHTML = theView;
}

function mainView() {
    let theHtml = "";
    theHtml = 
        '<div class="grid-item info">' +
            '02 SEP 2019' +
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

function checkClientData() {
    console.log("Here we Go");
    let htmlString = "";
    for (i = 0; i < STATE.clientData.length; i++) {
        console.log(STATE.clientData[i].lastName);
        htmlString += STATE.clientData[i].lastName + ", " + STATE.clientData[i].firstName + "<br>";
    }
    console.log(STATE.clientData);
    document.getElementById("view").innerHTML = htmlString;
}

function invoiceView() {
    let theHtml = "";
    theHtml = `
        <div class="grid-item info">
            Invoice:<br>
            Select Client
        </div>
        <div class="grid-item main subQuad">
            <div class="quad-item" onclick="checkClientData()">A - G</div>
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