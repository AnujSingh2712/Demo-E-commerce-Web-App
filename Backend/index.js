const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose = require("mongoose");
const port = 8000;
app.use(cors())
app.use(express.json());


app.use(require('./routes/login'))

mongoose.connect('mongodb://127.0.0.1:27017/restaurantdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log("error",err)
})

app.listen(port, () => {
    console.log("listening to the port number 8000")
}
)


