db.students.aggregate([
        {
            $lookup: {
                   from: "teachers",
                   localField: "faculty",
                   foreignField: "tname",
                   as: "faculty"
                 }
        },
        {
            $project: {
                "faculty._id": 0,
            }
        }
        ])