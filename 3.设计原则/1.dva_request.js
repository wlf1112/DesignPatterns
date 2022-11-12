/**
 * 检查状态吗
 * @param {any} response 
 * @returns 
 */
function checkStatus(response) {
    if (response.code >= 200 && response.code < 300) {
        return response;
    } else {
        throw new Error("响应结果不正确");
    }
}

function checkCode(data) {
    if (data.code == 0) {
        return data;
    } else {
        throw new Error("响应结果不正确");
    }
}


/**
 * 将响应体转为json
 * @param {any} response 
 * @returns 
 */
function parseJSON(response) {
    return response.json();
}

function request(url, options) {
    /**
     * 1. 判断响应的状态码是不是2XX，如果不是的话，也认为是错误
     * 2. 把响应体转成JSON对象
     */
    fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode);
}