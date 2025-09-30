// function scopeTest() {
//     let testScopeVar = "hello world";
//     console.log(testScopeVar);
// }


let count = 0;

function init() {
    debuggerOutput('init');
    testTwo('testTwo')
}

function testOne() {
    debuggerOutput('text');
}

function testTwo(text) {
    debuggerOutput('text');
}

function debuggerOutput(text) {
        count++;
        let debuggerLogRef = document.getElementById('debugger_log');
        debuggerLogRef.innerHTML = count + text;
}
