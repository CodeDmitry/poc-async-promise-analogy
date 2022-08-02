// | Async/await example section.

async function A1() {
    console.log('A1 returning');
    return 3;
}
async function B1() {
    console.log('B1 returning');
    return 4;
}
async function C1() {
    console.log('C1 returning');
    return 5;
}
(async () => {
    // the below are executed in order.
    var a = await A1();
    var b = await B1();
    var c = await C1();
    console.log('async results: ', a, b, c);
})();

// | Promise example section.

function A2() {
    console.log('A2 returning');
    return new Promise(accept => accept(3));
}
function B2() {
    console.log('B2 returning');
    return new Promise(accept => accept(4));    
}
function C2() {
    console.log('C2 returning');
    return new Promise(accept => accept(5));
}

(() => {
    A2().then(a => {
        B2().then(b => {
            C2().then(c => {
                console.log('promise results: ', a, b, c);
            });
        });
    });
})();
