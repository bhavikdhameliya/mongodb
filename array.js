$Addtoset 

db.books.updateOne({ _id : ObjectId("652e75102c2dbb3cf364e72a")},{$addToSet: {content:150}})

$pop

db.books.updateOne({ _id : ObjectId("652e75102c2dbb3cf364e72a")},{$pop:{content:-1}})

$pull

db.books.updateOne({_id:ObjectId("65326419e8da204e4e039b9a")},{$push: {content: "Qode"}})  

$push

db.books.updateOne({_id: ObjectId("65326419e8da204e4e039b9a")},{$pull: {content:'world'}})
 
