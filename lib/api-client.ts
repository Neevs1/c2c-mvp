import { Module, UserProgress, ModuleTopic } from './types';

// API Base URL - adjust based on your FastAPI server configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * Fetch all preparatory phase modules
 */
export async function fetchPrepModules(): Promise<Module[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/prep_modules`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prep modules:', error);
        throw error;
    }
}

/**
 * Fetch topics/sub-modules for a specific module
 */
export async function fetchModuleTopics(moduleId: number): Promise<ModuleTopic[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/prep_modules/${moduleId}/topics`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching topics for module ${moduleId}:`, error);
        throw error;
    }
}

/**
 * Fetch user progress across all modules
 */
export async function fetchUserProgress(userId: number = 1): Promise<UserProgress[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user_progress?user_id=${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user progress:', error);
        throw error;
    }
}
