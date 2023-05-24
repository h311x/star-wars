import { Stack, TextField } from "@mui/material"
import { FC, useReducer } from "react"
import { PersonalInfo } from "../models"

interface Props {
  personData: PersonalInfo
}

export const PersonEditor: FC<Props> = ({ personData }) => {
  const [state, dispatch] = useReducer(
    (s: Partial<PersonalInfo>, a: Partial<PersonalInfo>) => ({ ...s, ...a }),
    personData
  )
  return (
    <Stack spacing={2}>
      {Object.entries(state).map(([key, value]) => (
        <TextField
          key={key}
          label={`Edit ${key}`}
          variant="outlined"
          value={value}
          onChange={(e) => {
            dispatch({ [key]: e.target.value })
          }}
        />
      ))}
    </Stack>
  )
}
