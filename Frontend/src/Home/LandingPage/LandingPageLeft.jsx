import React from "react";
import styles from "../Navbar/navbar.module.css";

import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Typography from '@mui/material/Typography';

import ViewListTwoToneIcon from "@mui/icons-material/ViewListTwoTone";

import Postpage from "./Postpage";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.container2}>
        <div className={styles.leftmenubar}>
          <div className={styles.container2child1}>
            <Typography style={{color:"#2d2f36",fontSize:"20px",fontWeight:"600"}} variant="h6">Home</Typography>

            <div className={styles.container2child1icons}>
              <IconButton style={{ border: "50%", background: "#e2e8ec", }}>
                <LiveTvIcon
                  // e2e8ec
                  style={{
                    color: "black",
                    background: "#e2e8ec",
                    fontSize: "17px",
                  }}
                />
              </IconButton>

              <IconButton style={{ border: "50%", background: "#e2e8ec" }}>
                <SearchIcon
                  style={{
                    color: "black",
                    background: "#e2e8ec",
                    fontSize: "17px",
                  }}
                />
              </IconButton>

              <IconButton style={{ border: "50%", background: "#e2e8ec" }}>
                <i
                  style={{
                    color: "black",
                    background: "#e2e8ec",
                    fontSize: "17px",
                  }}
                  class="fas fa-comments"
                ></i>
              </IconButton>
            </div>

            <div></div>
          </div>
          <div>
            <div className={styles.menu}>
              <MenuList>
                <ListItemText style={{ marginRight: "120px", color: "gray" }}>
                  Menu
                </ListItemText>
                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon style={{ color: "#2d3436" }} />
                    <ListItemText
                      style={{ marginLeft: "15px", color: "#2d3436" }}
                    >
                      Home
                    </ListItemText>
                  </ListItemIcon>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    {/* <Badge color="error"> */}
                    <NotificationsIcon style={{ color: "#2d3436" }} />
                    {/* </Badge> */}
                  </ListItemIcon>
                  <ListItemText
                    style={{ marginRight: "66px", color: "#2d3436" }}
                  >
                    Notifications
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <i style={{ color: "#2d3436" }} class="fas fa-comments"></i>
                  </ListItemIcon>
                  <ListItemText
                    style={{ marginRight: "100px", color: "#2d3436" }}
                  >
                    Chats
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <GroupsIcon
                      style={{ color: "#2d3436", fontSize: "20px" }}
                    />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    Groups
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <ViewListTwoToneIcon style={{ color: "#2d3436" }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    Lists
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <LanguageIcon style={{ color: "#2d3436" }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    Explore
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <LanguageIcon style={{ color: "#2d3436" }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    Pro Feed
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <DescriptionIcon
                      style={{ color: "#2d3436", fontSize: "20px" }}
                    />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    News
                  </ListItemText>
                </MenuItem>

                <MenuItem>
                  <ListItemIcon>
                    <MoreHorizIcon style={{ color: "#2d3436" }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginRight: "100px" }}>
                    More
                  </ListItemText>
                </MenuItem>
              </MenuList>
            </div>
          </div>
        </div>

        <Postpage />

        <div className={styles.lastmenubar}></div>
      </div>
    </div>
  );
};

export default LandingPage;
