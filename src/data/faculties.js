const faculties = [
    {
        id: 1,
        name: "IT",
        classes: [
            {
                year: "fresh",
                classes: ["1A", "1B", "1C", "1D"],
                courses: ["Computer Ethics", "Web Development", "Networking", "Cloud Computing"]
            },
            {
                year: "sophomore",
                classes: ["2A", "2B", "2C"],
                courses: ["Data Structures", "Database Management", "Software Engineering"]
            },
            {
                year: "junior",
                classes: ["3A", "3B"],
                courses: ["Operating Systems", "Web Security", "Machine Learning"]
            },
            {
                year: "senior",
                classes: ["4A", "4B", "4C"],
                courses: ["Cloud Computing", "AI and Machine Learning", "Advanced Web Development"]
            }
        ]
    },

    {
        id: 2,
        name: "Computer Science",
        classes: [
            {
                year: "fresh",
                classes: ["1A", "1B", "1C", "1D"],
                courses: ["Computer Ethics", "Web Development", "Networking", "Information Security"]
            },
            {
                year: "sophomore",
                classes: ["2A", "2B", "2C"],
                courses: ["Data Structures", "Algorithms", "Database Systems"]
            },
            {
                year: "junior",
                classes: ["3A", "3B"],
                courses: ["Operating Systems", "Software Engineering"]
            },
            {
                year: "senior",
                classes: ["4A", "4B", "4C"],
                courses: ["Capstone Project", "Machine Learning"]
            }
        ]
    },
    {
        id: 3,
        name: "Engineering",
        classes: [
            {
                year: "fresh",
                classes: ["1A", "1B", "1C", "1D"],
                courses: ["Algebra", "Physics", "Introduction to Engineering"]
            },
            {
                year: "sophomore",
                classes: ["2A", "2B", "2C"],
                courses: ["Thermodynamics", "Fluid Mechanics"]
            },
            {
                year: "junior",
                classes: ["3A", "3B"],
                courses: ["Structural Analysis", "Electrical Circuits"]
            },
            {
                year: "senior",
                classes: ["4A", "4B", "4C"],
                courses: ["Engineering Design", "Project Management"]
            }
        ]
    }
]

export default faculties;