export type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
};

export type QuizData = {
    [key: string]: Question[];
};

/**
 * Fetches questions from the backend API for a given subject/topic.
 * Falls back to an empty array on failure.
 */
export const fetchQuestions = async (subject: string): Promise<Question[]> => {
    try {
        const res = await fetch(`/api/quiz/questions/${encodeURIComponent(subject)}`);
        if (!res.ok) {
            console.error(`Failed to fetch questions for "${subject}": ${res.status}`);
            return [];
        }
        const raw = await res.json();
        console.log("[Quiz] Raw API response:", raw);

        // Handle both array and wrapped responses (e.g. { questions: [...] })
        const rawQuestions: any[] = Array.isArray(raw) ? raw : (raw.questions || raw.data || []);

        // Normalize each question to match our Question type
        const data: Question[] = rawQuestions.map((q: any, index: number) => ({
            id: q.id ?? index,
            question: q.question || q.text || q.title || "",
            options: q.options || q.answers || q.choices || [],
            correctAnswer: q.correctAnswer ?? q.correct_answer ?? q.answer ?? 0,
        }));

        return data;
    } catch (err) {
        console.error("Error fetching questions:", err);
        return [];
    }
};

/**
 * Posts the quiz result to the backend evaluation endpoint.
 */
export const submitQuizResult = async (
    userId: string,
    subject: string,
    score: number
): Promise<boolean> => {
    try {
        const res = await fetch("/api/quiz/eval", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentID: userId, subtopicID: subject, score: score }),
        });
        if (!res.ok) {
            console.error(`Failed to submit quiz result: ${res.status}`);
            return false;
        }
        return true;
    } catch (err) {
        console.error("Error submitting quiz result:", err);
        return false;
    }
};
