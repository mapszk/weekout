import { Exercise } from "components/module/Day/dayTypes"

export const sameMuscle = (
  volume: Exercise[],
  exercise: Exercise,
  index: number
): boolean | void => {
  if (index !== 0) {
    const actualMuscle = exercise.muscle
    const musclePrevExercise = volume[index - 1].muscle
    if (actualMuscle === musclePrevExercise) return true
    else return false
  }
}