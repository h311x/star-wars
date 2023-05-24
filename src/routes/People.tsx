import { Box, CircularProgress, Container, Typography } from "@mui/material"
import { FC, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import usePeopleQuery from "../queries/usePeopleQuery"
import { PersonEditor } from "../components/PersonEditor"

export const PeoplePage: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (!(id && Number.isInteger(+id))) {
      navigate("/")
    }
  }, [id, navigate])

  const { data, isLoading, isError } = usePeopleQuery(Number(id))

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
        {data.name}
      </Typography>

      <PersonEditor personData={data} />
    </Container>
  )
}
