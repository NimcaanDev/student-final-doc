const documents = [
  {
    id: 1,
    name: 'Chapter 1',
    format: 'PDF',
    class: '3C',
    shift: 'Morning',
    course: 'Information Security',
    faculty: 'Computer Science',
    teacher: 'Dr. Ahmed Hassan',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.2MB',
  },
  {
    id: 2,
    name: 'Chapter 3',
    format: 'DOCX',
    class: '3C',
    shift: 'Morning',
    course: 'Operating Systems',
    faculty: 'Computer Science',
    teacher: 'Prof. Aisha Noor',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '850KB',
  },
  {
    id: 3,
    name: 'Chapter 4',
    format: 'VIDEO',
    class: '2A',
    shift: 'Afternoon',
    course: 'Thermodynamics',
    faculty: 'Engineering',
    teacher: 'Eng. Mohammed Ali',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '20MB',
  },
  {
    id: 4,
    name: 'Chapter 6',
    format: 'PDF',
    class: '4C',
    shift: 'Morning',
    course: 'Computer Ethics',
    faculty: 'IT',
    teacher: 'Dr. Sarah Yusuf',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.8MB',
  },
  {
    id: 5,
    name: 'Lab Report 1',
    format: 'DOCX',
    class: '2B',
    shift: 'Morning',
    course: 'Database Management',
    faculty: 'IT',
    teacher: 'Prof. Khalid Osman',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '620KB',
  },
  {
    id: 6,
    name: 'Homework Assignment 1',
    format: 'PDF',
    class: '1A',
    shift: 'Morning',
    course: 'Computer Ethics',
    faculty: 'Computer Science',
    teacher: 'Dr. Sarah Yusuf',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '900KB',
  },
  {
    id: 7,
    name: 'Final Project Proposal',
    format: 'PDF',
    class: '4A',
    shift: 'Afternoon',
    course: 'Capstone Project',
    faculty: 'Computer Science',
    teacher: 'Dr. Ahmed Hassan',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '2MB',
  },
  {
    id: 8,
    name: 'Chapter 5 - Fluid Mechanics',
    format: 'VIDEO',
    class: '2A',
    shift: 'Afternoon',
    course: 'Fluid Mechanics',
    faculty: 'Engineering',
    teacher: 'Eng. Mohammed Ali',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '35MB',
  },
  {
    id: 9,
    name: 'Engineering Design Report',
    format: 'DOCX',
    class: '4B',
    shift: 'Morning',
    course: 'Engineering Design',
    faculty: 'Engineering',
    teacher: 'Prof. Layla Abdi',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1MB',
  },
  {
    id: 10,
    name: 'Database Systems Notes',
    format: 'PDF',
    class: '2C',
    shift: 'Afternoon',
    course: 'Database Systems',
    faculty: 'Computer Science',
    teacher: 'Prof. Khalid Osman',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.5MB',
  },
  {
    id: 11,
    name: 'Thermodynamics Study Guide',
    format: 'PDF',
    class: '2B',
    shift: 'Morning',
    course: 'Thermodynamics',
    faculty: 'Engineering',
    teacher: 'Eng. Mohammed Ali',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.3MB',
  },
  {
    id: 12,
    name: 'Chapter 3 - Networking',
    format: 'DOCX',
    class: '1D',
    shift: 'Morning',
    course: 'Networking',
    faculty: 'IT',
    teacher: 'Prof. Aisha Noor',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '710KB',
  },
  {
    id: 13,
    name: 'Physics Lab Manual',
    format: 'PDF',
    class: '1A',
    shift: 'Afternoon',
    course: 'Physics',
    faculty: 'Engineering',
    teacher: 'Dr. Yusuf Ibrahim',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '2.2MB',
  },
  {
    id: 14,
    name: 'Midterm Exam Review',
    format: 'PDF',
    class: '4A',
    shift: 'Morning',
    course: 'Machine Learning',
    faculty: 'Computer Science',
    teacher: 'Dr. Ahmed Hassan',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '2MB',
  },
  {
    id: 15,
    name: 'Chapter 1 - Web Development',
    format: 'VIDEO',
    class: '1B',
    shift: 'Morning',
    course: 'Web Development',
    faculty: 'IT',
    teacher: 'Prof. Aisha Noor',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '50MB',
  },
  {
    id: 16,
    name: 'Introduction to Engineering Slides',
    format: 'PDF',
    class: '1C',
    shift: 'Afternoon',
    course: 'Introduction to Engineering',
    faculty: 'Engineering',
    teacher: 'Dr. Layla Abdi',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.4MB',
  },
  {
    id: 17,
    name: 'Software Engineering Assignment',
    format: 'DOCX',
    class: '3A',
    shift: 'Morning',
    course: 'Software Engineering',
    faculty: 'IT',
    teacher: 'Prof. Khalid Osman',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '820KB',
  },
  {
    id: 18,
    name: 'Advanced Web Development Guide',
    format: 'PDF',
    class: '4C',
    shift: 'Afternoon',
    course: 'Advanced Web Development',
    faculty: 'IT',
    teacher: 'Prof. Aisha Noor',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '2.5MB',
  },
  {
    id: 19,
    name: 'Algorithms Practice Problems',
    format: 'DOCX',
    class: '2A',
    shift: 'Morning',
    course: 'Algorithms',
    faculty: 'Computer Science',
    teacher: 'Dr. Ahmed Hassan',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '930KB',
  },
  {
    id: 20,
    name: 'Project Management Case Study',
    format: 'PDF',
    class: '4B',
    shift: 'Morning',
    course: 'Project Management',
    faculty: 'Engineering',
    teacher: 'Dr. Layla Abdi',
    fileId: '19ItAXUwGwSbQ0AvwV3IYGses_-dny3mA',
    size: '1.7MB',
  },
]

export default documents
