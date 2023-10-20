// $and  -- return all ducument to the match all

db.manybook.find({$and : [{pages : {$eq: 408 }}, {author :"Marguerite Yourcenar"}]})

//$or  -- return all dument to the return match the condition

db.manybook.find({$or : [{pages : {$eq: 408 }}, {author :"Virginia Woolf"}]})

//$nor

db.manybook.find({$nor : [{pages : {$eq: 408 }}, {author :"Virginia Woolf"}]})

//not

db.manybook.find({pages : { $not : {$lt : 505}}})