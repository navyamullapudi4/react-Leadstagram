const express = require("express"); //express library is loaded to the page
const morgan = require("morgan");
//create an instance of express library
const app = express();
/*the above line is  same as below code in java
import  com.me.Express;
  class Gfg{
    psvm(string args[]){
      Express app =new Express();
    }
  }
*/
//used ./ because root file is in routes folder not in node modules folder
const root = require("./routes/root");

const port = 3100;

app.use(morgan("dev"));
app.use(express.json());
//below line belongs to root route
/*app.get("/", (req, res) => {
  res.json("welcome to API server!, mullapudi");
});*/

//Routes
app.use("/", root);

// next is telling the app, listen to port and tell us wht is happening
app.listen(port, () => {
  console.log(`server started in port ${port}.`);
});
