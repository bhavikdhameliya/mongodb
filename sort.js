// sort
         //  1 -> Ascending order
         //  -1 -> decending order
         db.books.find().sort({pages: 1, title: -1})

         db.students.drop();