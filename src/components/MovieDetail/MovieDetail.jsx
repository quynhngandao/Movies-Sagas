import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MovieDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((store)=> store.detail)
  const history = useHistory();

  useEffect(() => {
    // fetch movie with id params.id
    // console.log(params.id, "params.id")
    dispatch({ type: "FETCH_MOVIE_DETAILS", payload: params.id });
  }, []);

  const handleClick = () => {
    // Go back to home page
    history.push("/");
  };

  return (
    <>
    <div className="display">  
    <Typography sx={{ fontWeight: "bold" , margin: "auto" }} gutterBottom variant="h5" component="div">
        {detail.title}
        </Typography>
<Card sx={{ maxWidth: 800}}>
      <CardMedia
        component="img"
        height="400"
        image={detail.poster}
      />
      <CardContent>
      
        
      </CardContent>
      <CardActions>
      <Typography sx={{ fontWeight: "bold"}} gutterBottom variant="h6" component="div">
        {detail.genres}
        </Typography>
       
      </CardActions>
      
    </Card> 
    <Typography  sx={{ marginTop:2, maxWidth: 800, marginBottom: 1, padding:1}}  variant="body3" color="text.secondary" >
         {detail.description}
        </Typography>
     </div>
     <Button type="variant" onClick={handleClick}>Go Home</Button>
     </>
  );
}

export default MovieDetail;

