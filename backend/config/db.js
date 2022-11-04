const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`mongodb connected: ${conn.connection.name}`.rainbow.underline)
	} catch (e) {
		console.log(e);
		process.exit(1)
	}
}

module.exports = connectDB
