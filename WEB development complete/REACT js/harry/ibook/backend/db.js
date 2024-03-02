const { mongoose } = require("mongoose");

const mongooseURI =
  "mongodb+srv://Admin:abbottabad18@cluster0.fvlusjk.mongodb.net/ibookDB";

const connectToMongo = () => {
  try {
    mongoose.connect(mongooseURI);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToMongo;
