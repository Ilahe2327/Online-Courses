export interface Course {
    id: number
    title: string
    category: string
    description: string
    price: string
    discount?: string
    newPrice?: string
    lessons: number
    duration: string
    level: string
    instructor: string
    rating: number
    students: number
    image: string
}

export const courses: Course[] = [

    // FRONTEND
    {
        id: 1,
        title: "Modern HTML & CSS Mastery",
        category: "frontend",
        description: "Learn how to build modern responsive websites using HTML5 and CSS3 including Flexbox and Grid.",
        price: "$39.000",
        lessons: 32,
        duration: "6h",
        level: "Beginner",
        instructor: "John Smith",
        rating: 4.7,
        students: 1200,
        image: "/frontendKurs/HtmlCss.jpeg"
    },
    {
        id: 2,
        title: "JavaScript Fundamentals",
        category: "frontend",
        description: "Understand the core concepts of JavaScript including variables, functions, arrays and DOM manipulation.",
        price: "$60.000",
        discount: "10% Off",
        newPrice: "$54.000",
        lessons: 40,
        duration: "8h",
        level: "Beginner",
        instructor: "David Miller",
        rating: 4.8,
        students: 2100,
        image: "/frontendKurs/javascript.png"
    },
    {
        id: 3,
        title: "React for Beginners",
        category: "frontend",
        description: "Learn React basics including components, props, state and modern hooks.",
        price: "$68.000",
        discount: "20% Off",
        newPrice: "$54.400",
        lessons: 45,
        duration: "9h",
        level: "Intermediate",
        instructor: "Sarah Johnson",
        rating: 4.8,
        students: 3000,
        image: "/frontendKurs/Reactjs.png"
    },
    {
        id: 4,
        title: "Next.js Complete Guide",
        category: "frontend",
        description: "Build modern full-stack applications with Next.js including routing, server components and API integration.",
        price: "$69.000",
        discount: "22% Off",
        newPrice: "$53.820",
        lessons: 50,
        duration: "10h",
        level: "Intermediate",
        instructor: "Michael Brown",
        rating: 4.9,
        students: 1800,
        image: "/frontendKurs/Nextjs.png"
    },
    {
        id: 5,
        title: "Tailwind CSS from Scratch",
        category: "frontend",
        description: "Create beautiful modern interfaces using Tailwind CSS and responsive design techniques.",
        price: "$35.000",
        lessons: 28,
        duration: "5h",
        level: "Beginner",
        instructor: "Emma Davis",
        rating: 4.6,
        students: 1500,
        image: "/frontendKurs/tailwind.jpg"
    },

    // BACKEND
    {
        id: 6,
        title: "MongoDB for Developers",
        category: "backend",
        description: "Learn how to store and manage application data using MongoDB and NoSQL concepts.",
        price: "$45.000",
        lessons: 27,
        duration: "6h",
        level: "Beginner",
        instructor: "Sophia Moore",
        rating: 4.6,
        students: 1100,
        image: "/backendKurs/mongoDB.png"
    },
    {
        id: 7,
        title: "Express.js API Development",
        category: "backend",
        description: "Build RESTful APIs using Express.js and connect them with frontend applications.",
        price: "$55.000",
        lessons: 35,
        duration: "8h",
        level: "Intermediate",
        instructor: "Robert Taylor",
        rating: 4.8,
        students: 1400,
        image: "/backendKurs/expressjs.jpg"
    },
    {
        id: 8,
        title: "Node.js Fundamentals",
        category: "backend",
        description: "Learn backend development using Node.js and understand event-driven architecture.",
        price: "$49.000",
        lessons: 30,
        duration: "7h",
        level: "Beginner",
        instructor: "Daniel Wilson",
        rating: 4.7,
        students: 1700,
        image: "/backendKurs/NodeJS-copy.webp"

    },
    {
        id: 9,
        title: "Authentication with JWT",
        category: "backend",
        description: "Secure your web applications using authentication systems and JSON Web Tokens.",
        price: "$60.000",
        lessons: 34,
        duration: "7h",
        level: "Intermediate",
        instructor: "James Anderson",
        rating: 4.7,
        students: 1250,
        image: "/backendKurs/authentication.jpg"
    },
    {
        id: 10,
        title: "Fullstack MERN Project",
        category: "backend",
        description: "Build a complete fullstack project using MongoDB, Express, React and Node.js.",
        price: "$75.000",
        discount: "15% Off",
        newPrice: "#63.750",
        lessons: 50,
        duration: "12h",
        level: "Advanced",
        instructor: "William Thomas",
        rating: 4.9,
        students: 2200,
        image: "/backendKurs/mernProject.jpg"
    },

    // AI
    {
        id: 11,
        title: "Python for AI",
        category: "ai",
        description: "Learn Python programming fundamentals required for Artificial Intelligence development.",
        price: "$45.000",
        lessons: 30,
        duration: "7h",
        level: "Beginner",
        instructor: "Olivia Martin",
        rating: 4.7,
        students: 1600,
        image: "/AI/pythonforAI.jpg"
    },
    {
        id: 12,
        title: "Machine Learning Basics",
        category: "ai",
        description: "Understand machine learning algorithms, data training and prediction models.",
        price: "$65.000",
        discount: "20% Off",
        newPrice: "$52.000",
        lessons: 42,
        duration: "9h",
        level: "Intermediate",
        instructor: "Benjamin Lee",
        rating: 4.8,
        students: 2100,
        image: "/AI/MachineLearning.webp"
    },
    {
        id: 13,
        title: "Deep Learning Fundamentals",
        category: "ai",
        description: "Explore neural networks and deep learning techniques used in modern AI systems.",
        price: "#70.000",
        discount: "25% Off",
        newPrice: "$52.500",
        lessons: 38,
        duration: "8h",
        level: "Advanced",
        instructor: "Lucas Clark",
        rating: 4.7,
        students: 1300,
        image: "/AI/deepLearning.png"
    },
    {
        id: 14,
        title: "AI for Web Developers",
        category: "ai",
        description: "Integrate Artificial Intelligence tools and APIs into modern web applications.",
        price: "$59.000",
        lessons: 33,
        duration: "7h",
        level: "Intermediate",
        instructor: "Ava Rodriguez",
        rating: 4.6,
        students: 900,
        image: "/AI/AIforWeb.png"
    },
    {
        id: 15,
        title: "Chatbot Development with Python",
        category: "ai",
        description: "Build intelligent chatbots using Python and natural language processing libraries.",
        price: "$68.000",
        lessons: 36,
        duration: "8h",
        level: "Intermediate",
        instructor: "Ethan Walker",
        rating: 4.7,
        students: 950,
        image: "/AI/chatbotWithPython.jpg"
    },

    // UI UX
    {
        id: 16,
        title: "UI Design Principles",
        category: "design",
        description: "Learn the essential principles of user interface design and visual hierarchy.",
        price: "$35.000",
        lessons: 24,
        duration: "5h",
        level: "Beginner",
        instructor: "Mia Hall",
        rating: 4.6,
        students: 1200,
        image: "/UiUX/UiDesign.jpg"
    },
    {
        id: 17,
        title: "UX Research Fundamentals",
        category: "design",
        description: "Understand user behavior and conduct UX research for better product design.",
        price: "$42.000",
        lessons: 28,
        duration: "6h",
        level: "Beginner",
        instructor: "Charlotte Allen",
        rating: 4.7,
        students: 980,
        image: "/UiUX/UX.jpg"
    },
    {
        id: 18,
        title: "Figma for Beginners",
        category: "design",
        description: "Design modern web and mobile interfaces using Figma design tools.",
        price: "$39.000",
        discount: "24% Off",
        newPrice: "$29.640",
        lessons: 26,
        duration: "5h",
        level: "Beginner",
        instructor: "Amelia Young",
        rating: 4.8,
        students: 2000,
        image: "/UiUX/figma.jpg"
    },
    {
        id: 19,
        title: "Mobile App Design",
        category: "design",
        description: "Create beautiful and functional mobile app interfaces following modern design patterns.",
        price: "$50.000",
        lessons: 30,
        duration: "7h",
        level: "Intermediate",
        instructor: "Harper Scott",
        rating: 4.7,
        students: 1100,
        image: "/UiUX/mobileApp.avif"
    },
    {
        id: 20,
        title: "Design Systems Masterclass",
        category: "design",
        description: "Learn how to build scalable design systems for large digital products.",
        price: "$58.000",
        lessons: 34,
        duration: "8h",
        level: "Advanced",
        instructor: "Evelyn Green",
        rating: 4.8,
        students: 870,
        image: "/UiUX/designSystem.jpg"
    },

    // DATA SCIENCE
    {
        id: 21,
        title: "Data Analysis with Python",
        category: "datascience",
        description: "Analyze and process data using Python and modern data analysis libraries.",
        price: "$55.000",
        lessons: 33,
        duration: "7h",
        level: "Beginner",
        instructor: "Alexander King",
        rating: 4.7,
        students: 1500,
        image: "/dataScience/dataAnalysis.jpg"
    },
    {
        id: 22,
        title: "Pandas & NumPy Essentials",
        category: "datascience",
        description: "Learn the core libraries used in data science including Pandas and NumPy.",
        price: "$48.000",
        discount: "10% Off",
        newPrice: "$43.200",
        lessons: 29,
        duration: "6h",
        level: "Beginner",
        instructor: "Henry Wright",
        rating: 4.6,
        students: 1400,
        image: "/dataScience/pandaVsNumpy.jpg"

    },
    {
        id: 23,
        title: "Data Visualization with Python",
        category: "datascience",
        description: "Create powerful charts and dashboards using Matplotlib and Seaborn.",
        price: "$52.000",
        lessons: 31,
        duration: "7h",
        level: "Intermediate",
        instructor: "Sebastian Hill",
        rating: 4.7,
        students: 1050,
        image: "/dataScience/dataVisualization.jpg"
    },
    {
        id: 24,
        title: "Statistics for Data Science",
        category: "datascience",
        description: "Understand probability, statistics and mathematical concepts behind data science.",
        price: "$60.000",
        lessons: 36,
        duration: "8h",
        level: "Intermediate",
        instructor: "Jack Adams",
        rating: 4.8,
        students: 980,
        image: "/dataScience/statisticsForDS.jpeg"

    },
    {
        id: 25,
        title: "Real-world Data Science Project",
        category: "datascience",
        description: "Work on a real-world dataset and build a full data science analysis project.",
        price: "$70.000",
        discount: "14% Off",
        newPrice: "$60.200",
        lessons: 40,
        duration: "10h",
        level: "Advanced",
        instructor: "Samuel Baker",
        rating: 4.9,
        students: 760,
        image: "/dataScience/dsProjects.webp"
    }

]