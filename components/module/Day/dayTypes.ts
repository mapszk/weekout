export interface Exercise {
  id: string
  muscle: string
  name: string
  reps: number
  series: number
}
export interface DayData {
  restDay: boolean
  noneVolume: Exercise[]
  minVolume: Exercise[]
  midVolume: Exercise[]
  maxVolume: Exercise[]
}
