//  $eq -- equl

db.manybook.find({ year :{$eq :1315} })



//  $ne  --not equl

db.manybook.find({ year :{$eq :1315} })



//  $gt  --greater than

db.manybook.find({ pages :{$gt :500} })



//  $gte --greater than equl 

db.manybook.find({ pages :{$gte :500} }) 



//  $lt  -- less than

db.manybook.find({ pages :{$lt :505} })



//  $lte --less than equl

db.manybook.find({ pages :{$lte :505} })



//  $in -- in an array

db.manybook.find({ pages :{$in :[408 , 209 , 216 ]} })



//  $nin -- in an array

db.manybook.find({ pages :{$nin :[408 , 209 , 216 ]} })