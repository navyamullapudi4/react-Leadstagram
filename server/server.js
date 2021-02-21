const express = require("express"); //express library is loaded to the page
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

// next is telling the app, listen to port and tell us wht is happening
app.listen(port, () => {
  console.log(`server started in port ${port}.`);
});
