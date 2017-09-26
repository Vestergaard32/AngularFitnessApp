import { WorkoutProgram } from './workout-program'

export class User {
    public _id: string;
    public username: string;
    public workoutprograms: WorkoutProgram[];
}
