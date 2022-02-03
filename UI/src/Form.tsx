import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";

export const Form = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ paddingTop: 10 }}>
      <Box sx={{ width: 800 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ padding: 10 }}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3">Form</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="name" label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="email" label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="phoneNum" label="Phone Number" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="houseNum" label="house Number" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="streetName" label="Street Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="city" label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="country" label="Country" select fullWidth>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="us">US</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField id="stateProvince" label="State" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
