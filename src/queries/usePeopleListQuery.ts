import { useQuery } from "@tanstack/react-query"
import Api from "../api"

const api = new Api()

export default function usePeopleListQuery(page: number, search: string) {
  return useQuery({
    queryKey: ["list", page, search],
    queryFn: () => api.getPeoplePage(page, search),
    keepPreviousData: true,
  })
}
