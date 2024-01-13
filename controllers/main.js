const jwt = require("jsonwebtoken");
const { jwtDecode } = require("jwt-decode");
const { BadRequestError } = require("../errors");
const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		throw new BadRequestError("Please provide email and password");
	}
	// Just for demo, normally provide by DB!!
	const id = new Date().getDate();

	const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res.status(200).json({ success: true, msg: "User created", token });
};

const dashboard = async (req, res) => {
	const luckNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your lucky number is ${luckNumber}`,
	});
};

module.exports = {
	login,
	dashboard,
};
