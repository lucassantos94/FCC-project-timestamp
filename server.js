var express = require('express');
var app = express();

var cors = require('cors');
const { getTimeStamp } = require('./api/getTimestamp');
app.use(cors({optionsSuccessStatus: 200}));  


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date",(req,res)=>{
  let returnData;
  try {
    returnData = getTimeStamp(req.params.date)
    
  } catch (error) {
    returnData =  {error: error.message}
  }
  res.send(returnData)
})

app.get("/api/",(req,res)=>{
  let returnData;
  try {
    returnData = getTimeStamp(new Date())
    
  } catch (error) {
    returnData =  {error: error.message}
  }
  res.send(returnData)
})
var listener = app.listen(9000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
