import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  const postData = [
    {
      id: 1,
      name: "John Doe",
      date: "September 14, 2016",
      img_url: "../static/images/img-2.avif",
      description:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    },
    {
      id: 2,
      name: "Mathew Arthur",
      date: "January 12, 2019",
      img_url: "../static/images/img-3.avif",
      description:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough..",
    },
    {
      id: 3,
      name: "Kyle Simpson",
      date: "June 20, 2021",
      img_url: "../static/images/img-4.avif",
      description:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
      id: 4,
      name: "Jordana",
      date: "April 30, 2022",
      img_url: "../static/images/img-5.avif",
      description:
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    },
  ];
  return (
    <div>
      {postData.map((data) => (
        <Card sx={{ margin: { xs: 0, md: 5 } }} key={data.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.name}
            subheader={data.date}
          />
          <CardMedia
            component="img"
            height="20%"
            image={data.img_url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Post;
