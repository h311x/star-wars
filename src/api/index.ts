import { PeopleList, Person } from "../models"

export default class Api {
  private baseURL = "https://swapi.dev/"

  public async getPeoplePage(page = 1, query: string) {
    const params = new URLSearchParams()
    if (query) {
      params.set("search", query)
    } else {
      params.set("page", page.toString())
    }
    const url = new URL(`/api/people?${params.toString()}`, this.baseURL).href
    const res = await fetch(url)

    return res.json() as Promise<PeopleList>
  }
  public async getPeople(id: number) {
    const url = new URL(`/api/people/${id}`, this.baseURL).href
    const res = await fetch(url)
    const {
      name,
      height,
      mass,
      hair_color,
      eye_color,
      birth_year,
      gender,
      skin_color,
    } = (await res.json()) as Awaited<Person>

    return {
      name,
      height,
      mass,
      hair_color,
      eye_color,
      birth_year,
      gender,
      skin_color,
    }
  }
}
