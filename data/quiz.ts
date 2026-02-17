export type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
};

export type QuizData = {
    [key: string]: Question[];
};

const defaultQuestions: Question[] = [
    {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: 1,
    },
    {
        id: 2,
        question: "Which data structure is recursive by definition?",
        options: ["Array", "Queue", "Tree", "Stack"],
        correctAnswer: 2,
    },
    {
        id: 3,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Logic", "Standard Question List", "System Query Language"],
        correctAnswer: 0,
    },
    {
        id: 4,
        question: "Which HTTP method is used to update a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 2,
    },
    {
        id: 5,
        question: "What is the capital of React?",
        options: ["Components", "Hooks", "JSX", "Virtual DOM"],
        correctAnswer: 0, // Joke/Metaphorical
    },
    {
        id: 6,
        question: "In CSS, what does 'z-index' control?",
        options: ["Transparency", "Stacking order", "Zoom level", "Zero margins"],
        correctAnswer: 1,
    },
    {
        id: 7,
        question: "What is a closure in JavaScript?",
        options: ["A function with preserved data", "A block of code", "A syntax error", "A loop"],
        correctAnswer: 0,
    },
    {
        id: 8,
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1,
    },
    {
        id: 9,
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Apple Pie Ingredients", "Automated Program Integration", "Applied Protocol Interaction"],
        correctAnswer: 0,
    },
    {
        id: 10,
        question: "Which of these is NOT a NoSQL database?",
        options: ["MongoDB", "PostgreSQL", "Cassandra", "Redis"],
        correctAnswer: 1,
    },
];

export const getQuestions = (topic: string): Question[] => {
    // In a real app, we would filter by topic or fetch from an API
    // For now, return the default set, maybe shuffled or slightly modified if needed
    // simulating a "typed" return
    return defaultQuestions;
};
