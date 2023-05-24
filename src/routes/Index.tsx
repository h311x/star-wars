import { FC, useState } from "react"
import usePeopleListQuery from "../queries/usePeopleListQuery"
import {
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material"
import useDebounce from "../hooks/useDebounce"
import { PeopleTable } from "../components/PeopleTable"

export const IndexPage: FC = () => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState("")

  const debouncedSearch = useDebounce(search, 500)
  const { data, isLoading, isError, isFetching } = usePeopleListQuery(
    page + 1,
    debouncedSearch
  )

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return <div>Unknown error occured</div>
  }

  return (
    <Container>
      <Typography variant="h3" mb={2}>
        Star Wars People
      </Typography>

      <Box mb={1}>
        <TextField
          label="Search field"
          type="search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <PeopleTable
        items={data.results}
        isFetching={isFetching}
        count={data.count}
        page={page}
        onPageChange={setPage}
      />
    </Container>
  )
}
