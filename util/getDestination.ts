export const getDestination = (): string => {
  const date = new Date(Date.now())
  switch (date.getDay()) {
    case 0:
      return "sunday"
    case 1:
      return "monday"
    case 2:
      return "tuesday"
    case 3:
      return "wednesday"
    case 4:
      return "thursday"
    case 5:
      return "friday"
    case 6:
      return "saturday"
    default:
      return "monday"
  }
}