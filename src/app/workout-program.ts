import { Exercise } from './exercise'
import { ActivityLog } from './activity-log'

export class WorkoutProgram {
    public _id: string;
    public workoutName: string;
    public activities: ActivityLog[];
    public exercises: Exercise[];
}
