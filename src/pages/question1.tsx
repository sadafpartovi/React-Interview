import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Grid,
} from "@material-ui/core";

import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import {
  Switch,
  Button,
  Select,
  TextField,
  MenuItem,
  Box,
  FormControlLabel,
	InputLabel,
	FormControl
} from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),

  date: yup.string("Choose a date").required("Date is required"),
});

export default function Question1() {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      switch: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const arr = Array.from(Array(70).keys());

  return (
    <Box sx={{ maxWidth: "sm", margin: "auto" }} pt={10}>
      <form onSubmit={formik.handleSubmit}>
        <Box>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        </Box>
        <Box  marginTop={1}>
        <TextField
          fullWidth
          id="date"
          name="date"
          label=""
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
        </Box>
        <Box padding={1} sx={{border: 1, borderRadius: 1, color: 'gray'}} marginTop={1}>
          <FormControlLabel
            label="Active Switch"
            labelPlacement="start"
            control={
              <Switch
                type="checkbox"
                name="switch"
                value={formik.values.switch}
                onChange={formik.handleChange}
                id={"switch"}
              />
            }
          />
        </Box>

						<Box marginTop={1} sx={{ minWidth: 120 }}>
        <FormControl  >
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            style={{ minWidth: 120 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >

            {arr.map((age) => (
              <MenuItem key={age} value={age + 1}>{age + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
				</Box>

				<Box marginTop={3}>
        <Button fullWidth variant="outlined" type="submit">Submit</Button>
				</Box>
      </form>
    </Box>
  );
}
