/*
    create database
     use db_name

     create collection
     db.createCollcetion('name')
     show collections -> list of all collections

     //1 books 

     db.books.insertOne({
        title: "Javascript Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode"
     })
     
     db.books.insertOne({
        title: "Java Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode",
        content: ['index', 'introduction of java'],
        test: {
            abc: 'XYZ'
        }
     })

     db.books.insertMany([
        {
           title: "MySQL Book",
            pages: 500,
            price: 249,
            auther: "John Peter" 
        },
        {
            title: "MongoDB Database Book",
            pages: 890,
            price: 249,
            auther: "Bhavik Cobra"
        },
        {
            title: "C Programming Book",
            pages: 190,
            price: 649,
            auther: "SkillQode"
        },
        {
            title: "C++ Programming Book",
            pages: 490,
            price: 549,
            auther: "SkillQode"
        }
     ])



    /*

db.books.updateOne({title : "C++ Programming Book"},
{
  $set :{ pages : 690 }})



db.books.updateMany({pages : 800},
{
  $set :{ auther: "kanoking"}})


*/
      


















/*   2. clientmaster  

     db.clientMaster.insertMany([
        {
        CLIENTNo :0001,
        NAME : "bhavik dhameliya",
        ADDRESS1 : "kamrej",
        CITY : "surat",
        Pincode :390004,
        STATE : "gujrat"
        },

        {
        CLIENTNo :0002,
        NAME : "khushal shuhagiya",
        ADDRESS1 : " patiya",
        CITY : "godhra",
        Pincode :390006,
        STATE : "gujrat"
        },

        {
        CLIENTNo :0003,
        NAME : "parth chandera",
        ADDRESS1 : "punagam",
        CITY : "dongri",
        Pincode :390008,
        STATE : "jmmu kashamir"
        },

        {
        CLIENTNo :0004,
        NAME : "smit shavliya",
        ADDRESS1 : "yogichoke",
        CITY : "zoobeach",
        Pincode :390004,
        STATE : "mumbai"
        },

        {
        CLIENTNo :0005,
        NAME : "shruti dudhat",
        ADDRESS1 : "shimada naka",
        CITY : "zebro",
        Pincode :390004,
        STATE : "bihar"
        },


     ])
        
         
     


*/