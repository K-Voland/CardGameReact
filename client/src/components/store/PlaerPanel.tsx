import * as React from "react";
import { render } from "react-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import store from ".";
import hp from '../../assets/hp.jpg';
import { makeStyles } from "@material-ui/core/styles";
interface IPanel  {
    name:string,
    heal:string,
    armor:string 
    image:string;
}
export const Panel:React.FC = (State) => {

    return(
        <Grid>
            <div >Plaer</div>
            <img  src={hp} width="150" height="30"/>
            
        </Grid>
    );
};
