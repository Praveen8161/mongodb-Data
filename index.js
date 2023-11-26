//Data's are given at Bottom

// 1.Find all the topics and tasks which are thought in the month of October

db.date.find({ "Date": { "$gte": new Date(2023, 9, 1), "$lte": new Date(2023, 9, 31) } },{"Task":1,"topics":1,"Date":1});

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.date.find({ "date": { "$gte": new Date(2023, 9, 15), "$lte": new Date(2023, 9, 31) } }, {"Date":1,"Company_names":1});

// 3.Find all the company drives and students who are appeared for the placement.

db.date.find({},{"Date":1,"Company_names":1});
db.students.find({ "placement": true },{"StudentName":1});

// 4.Find the number of problems solved by the user in codekata

db.students.find({},{"StudentName":1,"codekata_problem_solved":1});

// 5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ "menteeCount": { "$gt": 15 } });

// 6.Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020

db.students.count({ "data.attendance": "absent", "data.taskSubmitted": false, "data.date": { "$gte": new Date(2023, 9, 15), "$lte": new Date(2023, 9, 31) } });

//Datas

db.students.insertMany([
    {
        "StudentName": "user1",
        "Batch": "Batch1",
        "codekata_problem_solved": 10,
        "placement":true,
        "companies_Names": ["Company1", "Company2"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user2",
        "Batch": "Batch1",
        "codekata_problem_solved": 22,
        "placement":true,
        "companies_Names": ["Company3", "Company4", "Company5"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user3",
        "Batch": "Batch1",
        "codekata_problem_solved": 20,
        "placement":true,
        "companies_Names": ["Company6", "Company7"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user4",
        "Batch": "Batch1",
        "codekata_problem_solved": 25,
        "placement":true,
        "companies_Names": ["Company8", "Company9"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user5",
        "Batch": "Batch1",
        "codekata_problem_solved": 30,
        "placement":true,
        "companies_Names": ["Company10", "Company11", "Company12"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user6",
        "Batch": "Batch1",
        "codekata_problem_solved": 35,
        "placement":true,
        "companies_Names": ["Company13", "Company14"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user7",
        "Batch": "Batch2",
        "codekata_problem_solved": 40,
        "placement":true,
        "companies_Names": ["Company15", "Company16", "Company17"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    },
    {
        "StudentName": "user8",
        "Batch": "Batch2",
        "codekata_problem_solved": 45,
        "companies_Names": ["Company18", "Company19"],
        "data":[
            {
                "date": new Date(2023, 9, 15),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 16),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 17),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 21),
                "attendance": "present",
                "taskSubmitted": true
            },
            {
                "date": new Date(2023, 9, 22),
                "attendance": "absent",
                "taskSubmitted": false
            },
            {
                "date": new Date(2023, 9, 23),
                "attendance": "present",
                "taskSubmitted": true
            },
        ]
    }
]);

db.date.insertMany([
    {
        "Date": new Date(2023, 9, 15),
        "Task": "Task1",
        "topics": "Topic-1",
        "Company_names": ["Company1", "Company2"],
        "task_Submitted_User": ["user1", "user2","user5","user7","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    },
    {
        "Date": new Date(2023, 9, 16),
        "Task": "Task2",
        "topics": "Topic-2",
        "Company_names": ["Company3", "Company4"],
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user5","user7","user8"]
    },
    {
        "Date": new Date(2023, 9, 17),
        "Task": "Task3",
        "topics": "Topic-3",
        "Company_names": ["Company5", "Company6"],
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user5","user7","user8"]
    },
    {
        "Date": new Date(2023, 9, 21),
        "Task": "Task4",
        "topics": "Topic-4",
        "Company_names": ["Company7", "Company8"],
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    },
    {
        "Date": new Date(2023, 9, 22),
        "Task": "Task5",
        "topics": "Topic-5",
        "Company_names": ["Company10", "Company9"],
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user5","user7","user8"]
    },
    {
        "Date": new Date(2023, 9, 23),
        "Task": "Task6",
        "topics": "Topic-6",
        "task_Submitted_User":  ["user1", "user2","user5","user7","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    },
    {
        "Date": new Date(2023, 9, 28),
        "Task": "Task7",
        "topics": "Topic-7",
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    },
    {
        "Date": new Date(2023, 9, 29),
        "Task": "Task8",
        "topics": "Topic-8",
        "task_Submitted_User": ["user1", "user2","user3","user6","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    },
    {
        "Date": new Date(2023, 9, 30),
        "Task": "Task9",
        "topics": "Topic-9",
        "Company_names": ["Company11", "Company12"],
        "task_Submitted_User": ["user1", "user2","user5","user7","user8"],
        "Atttended_users": ["user1", "user2","user3","user6","user8"]
    }
]);

db.mentors.insertMany([
    {
        mentorName:"Guna",
        menteeCount:25,
        Batch:"Batch1"
    },
    {
        mentorName:"Rajasekar",
        menteeCount:20,
        Batch:"Batch2"
    }
]);

