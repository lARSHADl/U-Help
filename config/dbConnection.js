const mongoosedbconnect = require("mongoose");

const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI;
		await mongoosedbconnect.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;