use anychart_db
db.fruits.update({"name":"Lemon"}, {$set: {"value": 16}})
db.fruits.update({"name":"Orange"}, {$set: {"value": 22}})