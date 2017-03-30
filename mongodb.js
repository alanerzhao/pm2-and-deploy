var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/runoob', function (err, db) {
  if (err) throw err

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
