const axios = require("axios");
const fetch = require("node-fetch");

module.exports = {
	command: ["sexy"],
	author: "Citnut",
	description: "mlem",
	guide: "",
	allowListening: false,
	async listen (data) {
	},
	async call (data) {
		const { send } = citnut;
		const res = await axios.get(`http://api.vangbanlanhat.tk/image?type=sexy`);
		try {
			let r = await fetch(res.data.data);
			let attachment = await r.buffer();

			return send({
				files: [{
					name: "sexy.jpg",
					attachment
				}]
			}, data)
		} catch (e) {			
			send("`"+`đã xảy ra lỗi`+"`", data);
			console.error(e)
		}
	}
}