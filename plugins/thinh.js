const axios = require("axios");
module.exports = {
	command: ["thính"],
	author: "Citnut",
	description: "ca dao, tục ngữ, api của Mai Huy Bảo",
	guide: "",
	allowListening: false,
	async listen (data) {
	},
	async call (data) {
		const res = await axios.get(`http://le31.glitch.me/poem`);
		return citnut.send("`"+res.data.data+"`", data)
	}
}