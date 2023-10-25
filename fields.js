$currentdate

db.manybook.updateOne({"author" : "Hans Christian Andersen",},{$currentDate : { date : true }})



$inc

db.manybook.updateOne({year : 1836},{$inc : { pages :10 }})



$rename

db.manybook.updateOne({_id: ObjectId("653115b52da49df5bcf8b823")},{ $rename: {title : "book title"}})



$set

db.manybook.updateOne({_id: ObjectId("653115b52da49df5bcf8b823")},{ $set: {price : 549}})




$unset

db.manybook.updateOne({_id: ObjectId("653115b52da49df5bcf8b823")},{ $unset: {price : 549}})