// Database Types
export interface Module {
    id: number;
    title: string;
    description?: string;
    module_order: number;
    icon_name?: string;
    prerequisites: number[];
    // Frontend additions
    progress?: number;
    isLocked?: boolean;
    isCompleted?: boolean;
}

export interface SubModule {
    id: string;
    title: string;
    completed: boolean;
}

export interface UserProgress {
    module_id: number;
    is_completed: boolean;
    progress_percentage: number;
}

export interface ModuleTopic {
    topic: string;
}

// Icon mapping type
export type IconName = 'brain' | 'code' | 'database' | 'globe' | 'cpu' | 'book' | 'zap';
