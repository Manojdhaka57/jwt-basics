const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({
			success: false,
			msg: err.message,
		});
	}
	return res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.json({ success: false, msg: "Something went wrong try again", err });
};

module.exports = errorHandlerMiddleware;
