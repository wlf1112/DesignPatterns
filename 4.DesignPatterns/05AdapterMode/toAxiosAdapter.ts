function toAxiosAdapter(options) {
    return axios({
        url: options.url,
        method: options.type
    }).then(options.success)
        .catch(options.error);
}

$.ajax = function (options) {
    return toAxiosAdapter(options);
}

$.ajax({
    url: '/api/user',
    type: 'GET',
    success: function (data) {
        console.log(data);
    },
    error: function (err) {
        console.error(err);
    }
})