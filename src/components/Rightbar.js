import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        textAlign="center"
        position="fixed"
        sx={{ width: { md: "270px", lg: "350px", xl: "400px" } }}
      >
        <Typography variant="h6" fontWeight={100}>
          Onlinefriends
        </Typography>
        {/* avatar group */}
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwR_qwwP-PgM2uGa5crh8YvIhpV_yc7LNXA&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9cAgoYTf7Q8fOkYxmXuYJzUD8F-y3mrfg&usqp=CAU"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiuiYY--ENGKHCxoshOIavDEMIyHjKkpARw&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3hdWQueyVgCZwhTO9GDjTdcpQmtq0fAK1GfQwRb0Zd2RqpZb0tzHgWV2iFezYfqoubc&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiuiYY--ENGKHCxoshOIavDEMIyHjKkpARw&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiuiYY--ENGKHCxoshOIavDEMIyHjKkpARw&usqp=CAU"
          />
        </AvatarGroup>
        {/* end of avatar group */}

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList rowHeight={100} cols={4} gap={5}>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9cAgoYTf7Q8fOkYxmXuYJzUD8F-y3mrfg&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9cAgoYTf7Q8fOkYxmXuYJzUD8F-y3mrfg&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9cAgoYTf7Q8fOkYxmXuYJzUD8F-y3mrfg&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9cAgoYTf7Q8fOkYxmXuYJzUD8F-y3mrfg&usqp=CAU" />
          </ImageListItem>
        </ImageList>
        {/* conversion */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>

        {/* list */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: "blue" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
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
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: "cyan" }}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
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
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: "lime" }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
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
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: "indigo" }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
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
                  {" — Do you have Paris recommendations? Have you ever…"}
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
