export const getIDFromPeopleUrl = (charURL: string) => {
  const regex = /\/people\/(\d+)\//
  const test = charURL.match(regex)
  return test?.[1]
}
