use anychart_db
db.fruits.find().forEach(function(fruit) {
  db.fruits.update({_id: fruit._id}, {$set: {"value": Math.floor(Math.random() * 30)}})
})
