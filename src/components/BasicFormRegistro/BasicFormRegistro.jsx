import {
  TextField,
  Box,
  Button,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
import { useFormik } from "formik";
import { BasicFormSchemaRegistro } from "../BasicFormRegistro/BasicFormSchemaRegistro";
import { initialValues } from "../BasicFormRegistro/formRegistro";
import { useState } from "react";


export default function BasicFormRegistro() {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: BasicFormSchemaRegistro,
    onSubmit: register,
  });
  const [newUser, setNewUser] = useState(null);

  async function register(values, actions) {
    const response = await fetch("http://localhost:3001/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      setNewUser(values.firstname + " " + values.lastname);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      actions.resetForm();
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center",color:"#fff" }}>
        Registro
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
            color: "white"
          }}
        >
          <Grid item xs={12}>
            <TextField
              id="firstname"
              name="firstname"
              label="Introduce tu nombre"
              type="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.firstname && touched.firstname}
              helperText={errors.firstname}
            />
            <TextField
              id="lastname"
              name="lastname"
              label="Introduce tus apellidos"
              type="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.lastname && touched.lastname}
              helperText={errors.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Introduce tu dirección"
              type="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%",label:{color:"white"}, fieldset:{borderColor:"white"} }}
              error={errors.address && touched.address}
              helperText={errors.address}
            />
            <TextField
              id="city"
              name="city"
              label="Introduce tu ciudad"
              type="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%",label:{color:"white"}, fieldset:{borderColor:"white"} }}
              error={errors.city && touched.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="postalCode"
              name="postalCode"
              label="Introduce tu codigo postal"
              type="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.postalCode && touched.postalCode}
              helperText={errors.postalCode}
            />
            <TextField
              id="email"
              name="email"
              label="Introduce tu email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.email && touched.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Introduce tu contraseña"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.password && touched.password}
              helperText={errors.password}
            />
            <TextField
              id="passwordRepeat"
              name="passwordRepeat"
              label="Introduce tu contraseña"
              type="password"
              value={values.passwordRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              sx={{ mb: 2, m: 1.2, width: "47%" ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
              error={errors.passwordRepeat && touched.passwordRepeat}
              helperText={errors.passwordRepeat}
            />
          </Grid>
          <span >
            Recordar contraseña <Checkbox defaultChecked  />
          </span>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            sx={{ mb: 2 }}
          >
            Registro
          </Button>
        </Box>
      </form>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
      {newUser ? (
        <h6>
          Welcome <br></br><span>{newUser}</span><span></span>
        </h6>
      ) : (
        ""
      )}
    </>
  );
}
