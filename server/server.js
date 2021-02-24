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

const port = 3100;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("welcome to API server, mullapudi");
});

/*app.get("/:param", (req, res) => {
  res.json({
    Message: `welcome to API server, ${req.params.param}!`,
    Q: req.query, //query string enabling
    Action: `I will create an account for ${req.query.fullname} with the username ${req.query.username} and password ${req.query.password}`
  });
});*/
//body parser middle ware is given through express.json
//express.json is the request handler in the below line
app.post(
  ["/", "/:param", "/:profile/:username"],

  (req, res) => {
    res.json({
      Message: "I am in the post",
      params: req.params,
      Query: req.query,
      Body: req.body
    });
  }
);

// next is telling the app, listen to port and tell us wht is happening
app.listen(port, () => {
  console.log(`server started in port ${port}.`);
});
