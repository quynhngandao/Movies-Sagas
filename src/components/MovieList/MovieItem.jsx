import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

// Expand text for image card
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieItem({movie}) {
  // State
  const [expanded, setExpanded] = useState(false);

  // useHistory 
  const history = useHistory()

  // handle click for expand
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card
      className="card"
      sx={{
        maxWidth: 500,
        boxShadow: 10,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.200" : "grey.500",
        p: 2,
        m: 2,
        borderRadius: 3,
      }}
    >
      <CardActionArea>
   
        {/* Title */}
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        {/* Poster */}
        <CardMedia
          sx={{ height: 500 }}
          component="img"
          image={movie.poster}
          alt={movie.title}
          onClick={() => history.push(`/details/${movie.id}`)}
        />
      
        {/* Description */}
        <CardContent>
          {/* expand */}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>

          {/* collapse */}
          <Collapse
            onClick={handleExpandClick}
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                variant: "body2",
                color: "black",
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {movie.description}
            </Typography>
          </Collapse>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

