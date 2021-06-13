import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Kartochka from "../../Kartochka/Kartochka";
import LeftPlayerImg from "../../../assets/PlayerLeftImg.png";
import RPlayerImg from "../../../assets/RSoldarChib.png";

import { callbackify } from "util";

//сетка координат
export class CKletka {
  row: number;
  col: number;
  playerId: number | null;
  image?: string;
  constructor(x: number, y: number, playerId, image = "") {
    this.row = x;
    this.col = y;
    this.playerId = playerId;
    this.image = image;
  }
}

interface IProps {
  kletka: CKletka;
  callBack: any;
}
// описание клетки
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    kletka: {
      width: "100px",
      height: "100px",
      backgroundColor: "white",
      border: "solid",
      borderColor: "black",
    },
  })
);

export default function Kletka(props: IProps) {
  const [isClicked, setIsClicked] = useState(false);

  const classes = useStyles();
  if (props.kletka.playerId) {
    console.log("here");
  }

  const clickHandler = () => {
    console.log(`col: ${props.kletka.col} row: ${props.kletka.row}`);
    props.callBack(props.kletka);
    setIsClicked(!isClicked);
  };

  const renderSwitch = (param) => {
    console.log(param);
    switch (param) {
    
      case "LSoldar.png": {
        return <img src={LeftPlayerImg} />;
      }
      case "RSoldarChib.png": {
        return <img src={LeftPlayerImg} />;
      }
      default:
        return <></>;
    }
  };

  return (
    <div className={classes.kletka} onClick={clickHandler}>
      {renderSwitch(props.kletka.image)}
    </div>
  );
}
