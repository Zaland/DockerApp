import { useEffect, useState, useCallback } from "react";
import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { CountryList, ProvinceList, StateList } from "./Data";

export const Form = () => {
  const [country, setCountry] = useState("");
  const [stateProvince, setStateProvince] = useState("");

  useEffect(() => {
    setStateProvince("");
  }, [country]);

  const renderProvinceState = () => {
    switch (country) {
      case '':
        return (
          <TextField
            id="stateProvince"
            label="Choose country"
            variant="outlined"
            value={stateProvince}
            onChange={event => setStateProvince(event.target.value)}
            fullWidth
            disabled
          />
        );
      case 'CA':
        return (
          <TextField
            id="stateProvince"
            label="Province"
            variant="outlined"
            value={stateProvince}
            onChange={event => setStateProvince(event.target.value)}
            select
            fullWidth
            required
          >
            {renderProvinceList()}
          </TextField>
        );
      case 'US':
        return (
          <TextField
            id="stateProvince"
            label="State"
            variant="outlined"
            value={stateProvince}
            onChange={event => setStateProvince(event.target.value)}
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
            label="Country"
            variant="outlined"
            value={stateProvince}
            onChange={event => setStateProvince(event.target.value)}
            fullWidth
            required
          />
        );
    }
  };

  const renderCountryList = useCallback(() => {
    return CountryList.map(country => (
      <MenuItem key={country.code} value={country.code}>{country.label}</MenuItem>
    ))
  }, []);

  const renderProvinceList = useCallback(() => {
    return ProvinceList.map(province => (
      <MenuItem key={province.code} value={province.code}>{province.label}</MenuItem>
    ))
  }, []);

  const renderStateList = useCallback(() => {
    return StateList.map(state => (
      <MenuItem key={state.code} value={state.code}>{state.label}</MenuItem>
    ))
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ paddingTop: 10 }}>
      <Box sx={{ width: 800 }}>
        <form>
          <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ padding: 10 }}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h3">Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="name" label="Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="email" label="Email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="phoneNum" label="Phone Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="houseNum" label="House Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="streetName" label="Street Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="city" label="City" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="country" label="Country" value={country} onChange={event => setCountry(event.target.value)} select fullWidth required>
                {renderCountryList()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {renderProvinceState()}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth sx={{ paddingTop: 2, paddingBottom: 2 }}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
}
