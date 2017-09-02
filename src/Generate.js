export default class Generate {
	static RandomHexString(length) {
		let hex = "0123456789abcdef";
		let bytes = "";
		for (let i = 0; i < length; i++) {
			bytes += hex.substr(Math.floor(Math.random() * hex.length), 1);
		}
		return bytes;
	}
	static UUID() {
		return `${Generate.RandomHexString(8)}-${Generate.RandomHexString(
			4
		)}-${Generate.RandomHexString(4)}-${Generate.RandomHexString(
			4
		)}-${Generate.RandomHexString(12)}`;
	}
}