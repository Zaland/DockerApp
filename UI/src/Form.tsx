import { useEffect, useState, useCallback, FormEvent } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "axios";
import { CountryList, ProvinceList, StateList } from "./Data";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [country, setCountry] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setStateProvince("");
  }, [country]);

  const renderProvinceState = () => {
    switch (country) {
      case "":
        return (
          <TextField
            id="stateProvince"
            label="Choose country"
            variant="outlined"
            value={stateProvince}
            onChange={(event) => setStateProvince(event.target.value)}
            fullWidth
            disabled
          />
        );
      case "CA":
        return (
          <TextField
            id="stateProvince"
            label="Province"
            variant="outlined"
            value={stateProvince}
            onChange={(event) => setStateProvince(event.target.value)}
            select
            fullWidth
            required
          >
            {renderProvinceList()}
          </TextField>
        );
      case "US":
        return (
          <TextField
            id="stateProvince"
            label="State"
            variant="outlined"
            value={stateProvince}
            onChange={(event) => setStateProvince(event.target.value)}
            select
            fullWidth
            required
          >
            {renderStateList()}
          </TextField>
        );
      default:
        return (
          <TextField
            id="stateProvince"
            label="State"
            variant="outlined"
            value={stateProvince}
            onChange={(event) => setStateProvince(event.target.value)}
            fullWidth
            required
          />
        );
    }
  };

  const renderCountryList = useCallback(() => {
    return CountryList.map((country) => (
      <MenuItem key={country.code} value={country.code}>
        {country.label}
      </MenuItem>
    ));
  }, []);

  const renderProvinceList = useCallback(() => {
    return ProvinceList.map((province) => (
      <MenuItem key={province.code} value={province.code}>
        {province.label}
      </MenuItem>
    ));
  }, []);

  const renderStateList = useCallback(() => {
    return StateList.map((state) => (
      <MenuItem key={state.code} value={state.code}>
        {state.label}
      </MenuItem>
    ));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await axios
      .post("http://localhost:3000/submit", {
        name,
        email,
        phoneNumber,
        houseNumber,
        streetName,
        city,
        country,
        stateProvince,
      })
      .then((response) => response.data);

    if (response.success === true) {
      enqueueSnackbar("Success.", { variant: "success" });
    } else {
      enqueueSnackbar(
        `Failed. The field(s) ${response.error.join(", ")} are invalid.`,
        { variant: "error" }
      );
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ paddingTop: 2 }}
    >
      <Box sx={{ width: 800 }}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ padding: 10 }}
          >
            <Grid item xs={12} textAlign="center">
              <Typography variant="h3">Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="houseNumber"
                label="House Number"
                variant="outlined"
                value={houseNumber}
                onChange={(event) => setHouseNumber(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="streetName"
                label="Street Name"
                variant="outlined"
                value={streetName}
                onChange={(event) => setStreetName(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="city"
                label="City"
                variant="outlined"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="country"
                label="Country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                select
                fullWidth
                required
              >
                {renderCountryList()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {renderProvinceState()}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ paddingTop: 2, paddingBottom: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};
