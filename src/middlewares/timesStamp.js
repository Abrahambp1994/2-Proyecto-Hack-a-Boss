
const timesStamp = app.post('/post', function (req, res) {
  console.log(request.timestamp)
  res.status(200).send({time})
})

module.exports = timesStamp;