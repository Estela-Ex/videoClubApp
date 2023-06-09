import { Grid, Typography } from "@mui/material";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import CategorieCards from "./CategorieCards";
import { useParams } from "react-router-dom";
 
export default function DetailsCategories() {
  const params = useParams();

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Typography sx={{ p: 4, m: "3rem 0 0 0" }} align="center" variant="h4" color={"#495057"}>
        Todas tus peliculas en blue-Ray
      </Typography>
      <Grid container sx={{ p: 2}}>
        <CategorieCards categoria={params.categoria}/>
      </Grid>
      <Garantias />
      <footer>
        <Grid container sx={{ backgroundColor: "#4c4d4e" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
