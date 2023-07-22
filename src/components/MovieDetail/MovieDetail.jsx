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

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={detail.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {detail.title}
        </Typography>
        
      </CardContent>
      <CardActions>
        {detail.genres}
       
      </CardActions>
    </Card> 
    <Typography variant="body2" color="text.secondary">
         {detail.description}
        </Typography>
    <Button onClick={handleClick}>Go Home</Button>
    </>
  );
}

export default MovieDetail;

