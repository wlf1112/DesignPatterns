axios({
	method: "GET",
	url: "http://localhost:8080/api/user?id=1",
}).then(
	function (response: any) {
		console.log(response);
	},
	function (error: any) {
		console.log(error);
	}
);

let url = require("url");
function xhr(config: any) {
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		request.open(config.method, config.url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				if (request.status === 200) {
					resolve(request.responseText);
				} else {
					reject("请求失败");
				}
			}
		};
	});
}

function http(config: any) {
	let http = require("http");
	let urlObject = url.parse(config.url);
	return new Promise(function (resolve, reject) {
		const options = {
			hostname: urlObject.hostname,
			port: urlObject.port,
			path: urlObject.path,
			method: config.method,
		};
		var req = http.request(options, function (res: any) {
			let chunks: any[] = [];
			res.on("data", (chunk: any) => {
				chunks.push(chunk);
			});
			res.on("end", () => {
				resolve(Buffer.concat(chunks).toString());
			});
		});
		req.on("error", (err: any) => {
			reject(err);
		});
		req.end();
	});
}

function getDefaultAdapter(): any {
	let adapter;
	if (typeof XMLHttpRequest !== "undefined") {
		adapter = xhr;
	} else if (typeof process !== "undefined") {
		adapter = http;
	}
	return adapter;
}

function axios(config: any): any {
	let adapter = getDefaultAdapter();
	// 不管是浏览器端还是node端，都是传入一个config，返回一个promise
	return adapter(config);
}