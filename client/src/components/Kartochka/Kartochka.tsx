import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import heal from "../../assets/heal.jpg";
import drob from "../../assets/Дробовик.jpg";
import bronya from "../../assets/Bronya.jpg";

import { ICard } from "./KardTS";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minWidth: 200,
  },
  imgStyle: {
    width: 60,
  },
});

interface IProps {
  kartochka: ICard;
}

const renderSwitch = (param, classes) => {
  console.log(param);
  switch (param) {
    case "heal.jpg": {
      return (
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={heal}
          title="lorem ipsum"
        />
      );
    }
    case "Дробовик.jpg": {
      return (
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={drob}
          title="lorem ipsum"
        />
      );
    }
    case "Bronya.jpg": {
      return (
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={bronya}
          title="lorem ipsum"
        />
      );
    }

    default:
      return <></>;
  }
};

export default function Kartochka(props: IProps) {
  const classes = useStyles();
  const card = props.kartochka;
  // const CardHeal = () => {
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {renderSwitch(props.kartochka.img, classes)}
        {/* <img src={heal} alt="heal" className = {classes.imgStyle}/> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.opisanie}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// }
