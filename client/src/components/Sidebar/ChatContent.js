import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 1,
    alignItems: "center"
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  notificationBubble: {
      backgroundColor: theme.palette.primary.main,
      color: "#FFFFFF",
      borderRadius: 50,
      padding:"0 0.5rem",
      fontSize: "small",
      fontWeight:700,
      lineHeight: 1.8
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessageCount } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {
        ( unreadMessageCount !== 0 ) && (
        <Typography className={classes.notificationBubble}>
            {unreadMessageCount}
        </Typography> )
      }
    </Box>
  );
};

export default ChatContent;
