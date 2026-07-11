export type StatType = 'physics' | 'chemistry' | 'biology' | 'mocks';

export interface PlayerStats {
  physics: number;     // Chapters completed
  chemistry: number;   // Chapters completed
  biology: number;     // Chapters completed
  mocks: number;       // Tests completed
  
  // System specific metadata
  systemPoints: number; // SP currency
  streak: number;       // Daily login streak
  lastLoginDate?: string;
}

export interface Quest {
  id: string;
  title: string;
  stat: StatType;
  chaptersValue: number; // Amount of chapters this quest contributes
  completed: boolean;
  createdAt: number;
  completedAt?: number;
}