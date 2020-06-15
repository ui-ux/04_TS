// function oldDelay(ms, func) {
//     setTimeout(function () {
//         func();
//     }, ms);
// }
// oldDelay(3000, function () {
//     console.log('text');
// });
// function oldDelay(ms:any, func:any) {
//     setTimeout(() => {
//         func();
//     }, ms);
// }
// oldDelay(3000, function() {
//     console.log('text 2');
// })
// function delay(ms = 1000) {
//     return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//         //reject();
//     }, ms);
//     });
// }
// delay(4000)
//     .then(() => {
//         console.log('new promise');
//     })
//     .catch(() => {
//         console.log('error');
//     })
window.onload = function () {
    document.getElementById("btnGet").onclick = function () {
        var promise = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", false);
            xhr.onreadystatechange = function (response, error) {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        return resolve(response);
                    }
                    else {
                        return reject(new Error(error));
                    }
                }
            };
            xhr.send();
        });
        promise
            .then(function (data) {
            console.log('Success', data);
        })["catch"](function (error) {
            console.log('Error', error);
        });
    };
};
