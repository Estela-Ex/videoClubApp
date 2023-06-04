import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { useEffect} from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useProductContext } from "../../src/context/ProductContext";

export default function CategorieCards({categoria}) {
 
  const {result, categoriaFetch} = useProductContext()
  useEffect(() => { 
      categoriaFetch(categoria)
 },[])
    
  return (
    <>
      {result?.map((productos, i) => {
        return (
          <Grid key={i} item xs={3}>
            <Card
              sx={{
                maxWidth: 345,
                p: 4,
                height:"35rem",
                border: "1px solid",
                borderRadius: "20px",
                borderStyle: "groove",
                ".title": { padding: "0", textAlign: "center" },
                boxShadow:" 6px 6px 10px 1px grey",
                backgroundColor: "#95b39b"

              }}
            >
              <CardHeader className="title" key={i} title={productos.nombredelproducto} />
              <CardMedia
                component="img"
                height="280"
                image={productos.imagen}
              />
              <Typography variant="subtitle" color="primary"></Typography>
              <CardContent>
                <Typography sx={{ "p": { height: "6rem", overflow: "auto", overflowX: "unset" }}} variant="body2" color="text.secondary">
                  {productos.detallesdelproducto}
                </Typography>
                <br />
                <Box sx={{display:"flex",alignItems:"center","button":{borderRadius:"6px", marginRight:"1rem",width:"10rem" , display:"flex", alignItems:"center",":hover":{backgroundColor: "#547963",
                 color: "white"}},"svg":{marginLeft:"0.5rem"}}}>
                <button>
                  Añadir al carrito
                  <ShoppingBasketIcon
                    fontSize="18"
                    sx={{ align: "right" }}
                  />
                  </button>
                {productos.precio}
                <EuroIcon fontSize="8" />
                  </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}