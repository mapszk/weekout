export interface Exercise {
  muscle: string
  name: string
  reps: number
  series: number
}
export interface DayData {
  noneVolume: Exercise[]
  minVolume: Exercise[]
  maxVolume: Exercise[]
  plusMaxVolume: Exercise[]
}
