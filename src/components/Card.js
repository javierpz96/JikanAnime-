import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useState } from "react";

export default function MediaCard(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <Card className="TextoAnime" sx={{ maxWidth: 345 }}> 
      <CardMedia
        component="img"
        height="140"
        image={props.imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {readMore ? props.info : `${props.info.substring(0, 200)} ...`}
          <Button onClick={() => setReadMore(!readMore)} variant="text">
            Read More
          </Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
