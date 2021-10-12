const axios = require("axios");
const fetch = require("node-fetch");

module.exports = {
	command: ["nude"],
	author: "Citnut",
	description: "mlem",
	guide: "",
	allowListening: false,
	async listen (data) {
	},
	async call (data) {
		const { send } = citnut;
		const res = await axios.get(`http://trungkien.tk/apiv1/nude.php`);
		try {
			let r = await fetch(res.data.data);
			let attachment = await r.buffer();

			return send({
				files: [{
					name: "nude.jpg",
					attachment
				}]
			}, data)
		} catch (e) {			
			send("`"+`đã xảy ra lỗi`+"`", data);
			console.error(e)
		}
	}
}