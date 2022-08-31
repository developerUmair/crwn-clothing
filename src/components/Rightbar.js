import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const images = [
  {
    id: 1,
    src: "static/images/img-2.avif",
  },
  {
    id: 2,
    src: "static/images/img-3.avif",
  },
  {
    id: 3,
    src: "static/images/img-4.avif",
  },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/random-1.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/random-2.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/random-3.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/random-4.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/random.jpg" />
          <Avatar alt="Remy Sharp" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} gutterBottom>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 380, height: 120 }}
          cols={3}
          rowHeight={100}
          gap={5}
        >
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="static/images/img-2.avif" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="static/images/img-3.avif" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town "}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="static/images/img-4.avif" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
