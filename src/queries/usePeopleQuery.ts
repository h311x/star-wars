import { useQuery } from "@tanstack/react-query"
import Api from "../api"

const api = new Api()

export default function usePeopleQuery(id: number) {
  return useQuery({
    queryKey: ["person", id],
    queryFn: () => api.getPeople(id),
  })
}
