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

     4.student
        
   db.student.insertMany([
    {
	sname : "Darshan",
	course : "Full-stack Development",
	fees : 95000,
	faculty : "girish"
},
{
	sname : "Bhavik",
	course : "Backend Development",
	fees : 65000,
	faculty : "girish"
},
{
    sname : "Shruti",
	course : "Frontend Development",
	fees : 75000,
	faculty : "vivek"
},
{
	sname: "Janvi",
	course : "UI/UX",
	fees : 45000,
	faculty : "nikunj"
},
{
	sname : "Janki",
	course : "Mobile Development",
	fees : 65000,
	faculty : "kuldeep"
},
{
    sname : "Ravi",
	course : "UI/UX",
	fees : 45000,
	faculty : "nikunj"
}
])   


db.teacher.insertMany([

{
	
	tname : "girish",
	position : "Backend Developer",
	salary : 5000
},


{
	
	tname : "vivek",
	position : "Frontend Developer",
	salary : 6000
},


{
	
	tname : "nikunj",
	position : "UI/UX Designer",
	salary : 5500
},


{
	
	tname : "kuldeep",
	position : "Mobile App Developer",
	salary : 7000
}

])
     


*/