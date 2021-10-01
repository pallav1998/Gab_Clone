import React, { useState, useEffect } from "react";
import styles from "../Navbar/navbar.module.css";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Paper from "@mui/material/Paper";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import Divider from "@mui/material/Divider";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import WarningIcon from "@mui/icons-material/Warning";

import TimerIcon from "@mui/icons-material/Timer";
import MediaCard from "./FirstPost";
import axios from "axios";
import FirstPost from "./FirstPost";
import { fontSize } from "@mui/system";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { BiText } from "react-icons/bi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Picker from "emoji-picker-react";
import { Box } from "@mui/system";

const Postpage = () => {
  const [block, SetBlock] = useState("");
  const [block1, SetBlock1] = useState(false);
  const [list, setList] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handle = () => {
    if (block.length > 0) {
      SetBlock1(true);
    } else {
      SetBlock1(false);
    }
  };

  const handleChange = (e) => {
    SetBlock(e.target.value);
    handle();
  };
  const handleChangecomment = (e) => {
    SetBlock(e.target.value);
    handle();
  };

  const postData = () => {
    const payload = {
      title: block,
    };

    axios
      .post("http://localhost:3001/todos", payload)
      .then(() => {
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });

    SetBlock("");
  };

  const getTodos = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/todos");
      console.log(data);
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={styles.middlemenubar}>
        <Paper elevation={1} className={styles.middlemenubar1}>
          <div className={styles.middlemenubar2}>
            <div className={styles.samecolor2}>
              <IconButton
                style={{ border: "50%", background: "rgb(240,240,240)" }}
                size="medium"
              >
                <PersonIcon />
              </IconButton>
            </div>

            <div className={styles.postdiv}>
              <p> Post to timeline</p>
              <ArrowDropDownRoundedIcon style={{ marginTop: "1px" }} />
            </div>

            <div className={styles.zoom}>
              <ZoomOutMapRoundedIcon style={{ color: "gray" }} />
            </div>
          </div>
          <Divider light />

          <div className={styles.postinputfieeld}>
            <input
              className={styles.inputtextfield}
              onChange={handleChange}
              type="text"
              name="title"
              value={block}
              placeholder="What's on your mind?"
            />
          </div>

          <Paper elevation={3} className={styles.postitems}>
            <input
              type="file"
              id="id1"
              style={{ display: "none", visibility: "none" }}
            />
            <label htmlFor="id1">
              <InsertPhotoOutlinedIcon
                className={styles.emojis}
                style={{ color: "#63da9d", fontSize: "25px" }}
              />
            </label>

            <EmojiEmotionsOutlinedIcon
              className={styles.emojis1}
              style={{ color: "#f6b83c", fontSize: "20px" }}
            />

            <div>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              ></Button>

              <input
                type="file"
                id2="id2"
                style={{ display: "none", visibility: "none" }}
              />
              <label htmlFor="id2">
                <EmojiEmotionsOutlinedIcon
                  className={styles.emojis}
                  style={{ color: "#63da9d", fontSize: "25px" }}
                />
              </label>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Box>
                  <div>
                    {chosenEmoji ? (
                      <span>You chose: {chosenEmoji.emoji}</span>
                    ) : (
                      <span>No emoji Chosen</span>
                    )}
                    <Picker onEmojiClick={onEmojiClick} />
                  </div>
                </Box>
              </Menu>
            </div>

            <PollOutlinedIcon
              className={styles.emojis}
              style={{ color: "#f87e3a" }}
            />
            <PublicOutlinedIcon
              className={styles.emojis}
              style={{ color: "#35bba7" }}
            />
            <WarningIcon
              className={styles.emojis}
              style={{ color: "#8c75c9" }}
            />

            <i
              style={{ color: "red", marginTop: "12px", margin: "10px" }}
              class="fas fa-calendar-alt"
            ></i>
            <TimerIcon className={styles.emojis} style={{ color: "#ee2c4d" }} />

            <BiText
              style={{
                color: "#227bef",
                fontSize: "22px",
                marginTop: "12px",
                margin: "10px",
              }}
            />
          </Paper>

          {block1 && (
            <div>
              <button onClick={postData} className={styles.btnpost}>
                Post
              </button>
            </div>
          )}
        </Paper>
        <div style={{ marginTop: "20px" }}>
          <FirstPost />

          {list.map((items) => {
            return (
              <>
                <Paper className={styles.postuploadparent} elevation={1}>
                  <div className={styles.postupload}>
                    {/* <div>{items.title}</div> */}

                    <div className={styles.uploadprofile}>
                      <IconButton
                        style={{
                          border: "50%",
                          background: "rgb(240,240,240)",
                        }}
                        size="medium"
                      >
                        <PersonIcon style={{ fontSize: "36px" }} />
                      </IconButton>
                    </div>
                    <div className={styles.profilename}>
                      <p>milind@123</p>
                    </div>
                    <div className={styles.moreoption}>
                      <MoreHorizIcon />
                    </div>
                  </div>
                  <div className={styles.postdata}>{items.title}</div>

                  <Paper elevation={0} className={styles.postitems1}>
                    <div className={styles.icontext}>
                      <ThumbUpAltOutlinedIcon
                        style={{ fontSize: "17px", marginLeft: "20px" }}
                        className={styles.postitems1icons}
                      />
                      <p>Like</p>
                    </div>

                    <div className={styles.icontext}>
                      <ChatBubbleOutlineOutlinedIcon
                        style={{ fontSize: "17px" }}
                        className={styles.postitems1icons}
                      />
                      <p>Comment</p>
                    </div>

                    <div className={styles.icontext}>
                      <i
                        style={{ marginTop: "14px", fontSize: "17px" }}
                        className={styles.postitems1icons}
                        class="fas fa-undo"
                      ></i>
                      <p>Repost</p>
                    </div>

                    <div className={styles.icontext}>
                      <FormatQuoteOutlinedIcon
                        style={{ fontSize: "17px" }}
                        className={styles.postitems1icons}
                      />
                      <p>Quote</p>
                    </div>
                    <div className={styles.icontext}>
                      <IosShareOutlinedIcon
                        className={styles.postitems1icons}
                      />
                      <p>Share</p>
                    </div>
                  </Paper>
                  <Divider />

                  <div className={styles.commentpost}>
                    <div>
                      <IconButton
                        style={{
                          border: "50%",
                          background: "rgb(240,240,240)",
                          marginLeft: "15px",
                        }}
                        size="medium"
                      >
                        <PersonIcon style={{ fontSize: "20px" }} />
                      </IconButton>
                    </div>

                    <div className={styles.commentinputdiv}>
                      <input
                        className={styles.commentinput}
                        onChange={handleChangecomment}
                        type="text"
                        name="title"
                        value={block}
                        placeholder="What's on your mind?"
                      />
                    </div>
                    {block1 && (
                      <div>
                        <button className={styles.postcomment}>Post</button>
                      </div>
                    )}
                  </div>
                </Paper>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Postpage;
