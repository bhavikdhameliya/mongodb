$limit

// db.books.aggregate([{$limit: 3}])

// db.books.aggregate([{$skip: 2},{$limit: 2}])


$project

// db.books.aggregate([{$project:{_id:0, author:1, pages:1 }}])


$sort

// b.books.aggregate([{$sort: {"pages": -1}}])

$match

// db.books.aggregate([
//     {$match: {pages: {$gt: 209}}},
//     {$sort: {"pages": 1}}
//     ])


$addfields

// db.books.aggregate([
//     {$addFields: {"test": 123}}
//     ])

$count

// db.books.aggregate([
//     {$count: "total documents"}
//     ])


$group

// db.books.aggregate([
//     {
//         $group:{
//             _id: {pages:"$pages"},
//             author:{$push:"$author"}
//         }
//     },
//     {$match: {"_id.pages": {$gte:505}}}
//     ])

// db.books.aggregate([
//     {$match: {"_id.pages": {$gte:505}}},
//     {
//         $group:{
//             _id: {pages:"$pages"},
//             author:{$push:"$author"}
//         }
//     }
//     ])

// db.books.aggregate([
//     {
//         $group:{
//             _id: {pages:"$pages"},
//             author:{$push:"$author"}
//         }
//     },
//     {$sort:{"_id.pages": 1}},
//     {$limit: 20}
//     ])


$avg 
// db.teacher.aggregate([
//   {
//       $group:
//       {

//           "_id":"_id",
//           Averag: { $avg: "$salary" }
//       }
//       }
//   ])

$sum


    







