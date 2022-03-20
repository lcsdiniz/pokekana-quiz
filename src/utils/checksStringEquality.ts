export function checksStringEquality(firstString: string, secondString: string) {
  return firstString.trim().toLocaleLowerCase() === secondString.trim().toLocaleLowerCase()
}