// db.students.aggregate([
//         {
//             $lookup: {
//                    from: "teachers",
//                    localField: "faculty",
//                    foreignField: "tname",
//                    as: "faculty"
//                  }
//         },
//         {
//             $project: {
//                 "faculty._id": 0,
//             }
//         }
//         ])


db.student.aggregate([
    {
        $lookup: {
               from: "teacher",
               localField: "faculty",
               foreignField: "tname",
               as: "details"
             }
    },
    {
        $unwind: "$details"
    }
    ])

//1
   //ex

   db.student.aggregate([
    {
        $lookup: {
                from: "teacher",
                localField: "faculty",
                foreignField: "tname",
                as: "facultys"
             }
    },
    {
    $unwind: "$facultys"
},
    
      {
  $group: {
     _id: null,
     totalQuantity: { $avg: "$fees" },
  sumsalary :{ $avg: "$facultys.salary"},
  totalQuantity: { $sum: "$fees" },
  sumsalary :{ $sum: "$facultys.salary"},
  totalQuantity: { $count:{}},
  totalQuantity: { $min:"$fees"},
    sumsalary :{ $min: "$facultys.salary"},
    totalQuantity: { $max:"$fees"},
    sumsalary :{ $max: "$facultys.salary"},
    totalQuantity:{$first:"$sname"},
    totalQuantity:{$last:"$sname"}
  }
}
    ])






    








