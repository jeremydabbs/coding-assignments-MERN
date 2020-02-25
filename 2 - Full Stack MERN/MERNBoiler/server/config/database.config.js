const mongoose = require("mongoose")
    database = "ADD-DATABASE-NAME";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log(`Something went wrong when connecting to the database: ${err}`, err));