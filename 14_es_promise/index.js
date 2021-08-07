// function oldDelay(ms: any, func: any) {
//   setTimeout(function () {
//     func();
//   }, ms);
// }
// oldDelay(3000, function () {
//   console.log("text");
// });
function delay(ms) {
    if (ms === void 0) { ms = 1000; }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
            //reject();
        }, ms);
    });
}
delay(4000)
    .then(function () {
    console.log("new promise");
})["catch"](function () {
    console.log("error");
});
window.onload = function () {
    document.getElementById("btnGet").onclick = function () {
        var promise = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", false);
            xhr.onreadystatechange = function (response, error) {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        return resolve(response);
                        // or return resolve(response.type);
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
            console.log("Success", data);
        })["catch"](function (error) {
            console.log("Error", error);
        });
    };
};
