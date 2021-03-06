import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinkWrapper from "./../LinkWrapper";

import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 300,
  },
});

function CardHome(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <LinkWrapper className="linkWrapper" to={props.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </LinkWrapper>
    </Card>
  );
}
export default CardHome;
