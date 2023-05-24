export interface PeopleList {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}

export interface Person extends PersonalInfo {
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface PersonalInfo {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}
