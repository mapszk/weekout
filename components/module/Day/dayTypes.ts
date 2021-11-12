export interface Exercise {
  id: string
  muscle: string
  name: string
  reps: number
  series: number
  volume: "none" | "min" | "mid" | "max"
}
export interface DayData {
  restDay: boolean
  exercises: Exercise[]
}
