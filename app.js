require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const mainRouter = require("./routes/main");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server listing on port ${PORT}....`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
