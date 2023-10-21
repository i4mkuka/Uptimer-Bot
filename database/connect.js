const mongoose = require("mongoose");

async function connect() {
  mongoose.connect("mongodb+srv://Just:just@just.yjl3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect;
