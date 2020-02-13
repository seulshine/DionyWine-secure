import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
// import tileData from "./tileData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "space-around",
      // overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 1000,
      height: 1000
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/bike.jpg",
    title: "asdfjlk",
    author: "dasfds"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/star.jpg",
    title: "asdghasdgfsa",
    author: "asdfjgk;qhklr"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/olive.jpg",
    title: "asdghasdgfsa",
    author: "asdfjgk;qhklr"
  },
  {
    img: "https://material-ui.com/static/images/grid-list/bike.jpg",
    title: "asdghasdgfsa",
    author: "asdfjgk;qhklr"
  },

  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "asdghasdgfsa",
    author: "asdfjgk;qhklr"
  }
];

export default function ReviewDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/detail/1"}>
        <img
          src="https://material-ui.com/static/images/grid-list/burgers.jpg"
          alt=""
        />
      </Link>
      <GridList cellHeight={400} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
