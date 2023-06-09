import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Newsletter({ color }) {
  return (
    <>
      <Grid>
        <Grid>
          <Typography variant="h6" sx={{ color: "white", mt: 2, mb: 2, ml: 2 }}>
            Suscríbete a la Newsletter
          </Typography>
          <TextField
            sx={{ backgroundColor: "whitesmoke", m: 2 }}
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Suscríbete a la Newsletter"
            variant="filled"
            size="small"
          />
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#4c4d4e", mt: 2, mb: 2 }}
          >
            Suscríbete
          </Button>
        </Grid>
      </Grid>
      <FormGroup sx={{ color: "white", m: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28, color: "white" } }}
            />
          }
          label="Acepto política de privacidad"
        />
      </FormGroup>
      <FacebookIcon fontSize="large" sx={{ color: "whitesmoke", ml: 1.5 }} />
      <TwitterIcon fontSize="large" sx={{ color: "whitesmoke", ml: 2 }} />
      <WhatsAppIcon fontSize="large" sx={{ color: "whitesmoke", ml: 2 }} />
      <InstagramIcon fontSize="large" sx={{ color: "whitesmoke", ml: 2 }} />
    </>
  );
}