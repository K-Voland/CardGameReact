import * as React from "react";
import { render } from "react-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import store from ".";
import hp from "../../assets/hp.jpg";
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 20,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      backgroundColor: "green",
    },
  })
)(LinearProgress);

interface IPanel {
  name: string;
  heal: number;
  armor?: string;
  image?: string;
}
export const Panel: React.FC<IPanel> = (player: IPanel) => {
  return (
    <Grid>
      <div></div>

      <Typography variant="h2" component="h2">
        {player.name}
      </Typography>
      <Typography variant="h5" component="h2">
        Health
      </Typography>
      <BorderLinearProgress variant="determinate" value={player.heal} />
    </Grid>
  );
};
