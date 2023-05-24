import {
  TableContainer,
  Paper,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material"
import { FC } from "react"
import { getIDFromPeopleUrl } from "../utils"
import { Person } from "../models"
import { useNavigate } from "react-router-dom"

interface Props {
  items: Person[]
  isFetching: boolean
  count: number
  page: number
  onPageChange: (newPage: number) => void
}

export const PeopleTable: FC<Props> = ({
  items,
  isFetching,
  count,
  page,
  onPageChange,
}) => {
  const navigate = useNavigate()

  return (
    <TableContainer component={Paper}>
      {isFetching ? <LinearProgress /> : null}

      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Birth Year</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Hair Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              hover
              key={row.url}
              onClick={() => navigate(`/${getIDFromPeopleUrl(row.url)}`)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.birth_year}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.hair_color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={count}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        rowsPerPage={10}
      />
    </TableContainer>
  )
}
