const { connect } = require("mongoose");
const connectDB = async (url) => {
  try {
    await connect(url);
    console.log("connected mongodb");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
