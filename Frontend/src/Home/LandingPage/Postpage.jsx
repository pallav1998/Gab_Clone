import React, { useState, useEffect,useRef } from "react";
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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
// import { BiText } from "react-icons/bi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Picker from "emoji-picker-react";
import { Box } from "@mui/system";
import { NestedModal } from "./Deletepost";
// import {NestedModal} from "./Deletepost"

const Postpage = () => {
  const [block, SetBlock] = useState("");
  const [block1, SetBlock1] = useState(false);
  const [list, setList] = useState([]);

  const [comment, SetComment] = useState("");
  const [commentblock, SetcommentBlock] = useState(false);
  const [background, setbackGround] = useState(true);

  const [query,setQuery] = useState("");
  const inputRef = useRef();




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

  const handle1=()=>{
    if (comment.length > 0) {
      SetcommentBlock(true);
    } else {
    SetcommentBlock(false);
    }
  }
  
  const handleonChange=(e)=>{
    SetComment(e.target.value);
    handle1();
  }

  // comment start

  const handleAddComment = () => {
    
    if(query === ""){
      return;
    }

  const payload = {
    body:query,
    post_id: "6158b6b200486270deca080d"
  }

  axios.patch(`http://localhost:8000/comments/${payload.post_id}`, payload).then(res => {
    })
    setQuery("");
    console.log("milind")



  }

  //comment end


  


  const handlelike=()=>{
    setbackGround(!background)
  }




  const postData = () => {
    const payload = {
      title:"aman",
      photo_url:"C:\\Users\\MILIND\\OneDrive\\Desktop\\Gab_Clone\\backend\\src\\uploads\\1633114472515-Codecov.png",
      user_id:"6158904021c57ac0a78b2892",
      body: block 
    };

    axios
      .post("http://localhost:8000/posts", payload)
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
      const { data } = await axios.get("http://localhost:8000/posts");
      console.log("user=",data.posts);
      setList(data.posts);
    } catch (err) {
      console.log(err);
    }
  };



  const handleDelete =async(_id) => {
  await   axios.delete(`http://localhost:8000/posts/${_id}`)
  getTodos()
}




//file upload
//upload image to cloudinary
const [loading, setLoading] = useState(false);
const [image, setImage] = useState("");

const handleupload = async (e) => {
  const files = e.target.files;
  const data = new FormData();

  data.append("file", files[0]);
  data.append("upload_preset", "gab_clone");
  setLoading(true);

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dlsirzrco/image/upload",
    {
      method: "Post",
      body: data,
    }
  );

  const file = await res.json();
  console.log("file:", file);
  setImage(file.secure_url)
  setLoading(false)

};















  return (
    <div>
      <div className={styles.middlemenubar}>
        <Paper elevation={1} className={styles.middlemenubar1}>
          <div className={styles.middlemenubar2}>
            <div className={styles.samecolor2}>
              <IconButton
                style={{border: "50%", background: "rgb(240,240,240)" }}
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
             onChange={handleChange}
            onChange={handleupload}

              type="file"
              id="id1"
              style={{ display: "none", visibility: "none" }}
            />
            <label htmlFor="id1">
              <InsertPhotoOutlinedIcon
                className={styles.emojis}
                style={{ color: "#63da9d" }}
              />
            </label>


            <div>
              <Button

                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <EmojiEmotionsOutlinedIcon

                  className={styles.emojis1}
                  style={{
                    color: "#f6b83c",
                    marginTop: "4px",
                  }}
                />
              </Button>

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
                      <span >You chose: {chosenEmoji.emoji}</span>
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

          {list && list.map((items) => {
            console.log(list)
            return (
              <> 
                <Paper className={styles.postuploadparent} elevation={1}>
                  <div className={styles.postupload}>

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
                      
                      <p>{`${items.user_id?.first_name}`}</p>
                      
                      <div className={styles.postdata}>{items.body}</div>

<div>
<img style={{width:"300px"}} src={image} alt="" />

</div>
                    
                    </div>
                    
                    <div className={styles.moreoption}>
                    <NestedModal data={items} handleDelete={handleDelete} />
                      {/* <ChildModal /> */}
                      {/* <Button onClick={()=>handleDelete(items._id)} style={{height:"30px"}}>Delete </Button> <br /> */}


                    </div>
                  </div>
                  {/* post */}

                  <Paper elevation={0} className={styles.postitems1}>
                    <div onClick={handlelike} className={styles.icontext}>
                      <ThumbUpIcon
                        style={{ fontSize: "17px", marginLeft: "20px" ,color:background?"black":"#21cf7a" }}
                        className={styles.postitems1icons}
                      />
                      <p style={{color:background?"black":"#21cf7a"}} >Like</p>
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
                        // onChange={handleChangecomment}
                        onChange={handleonChange}
                        inputRef={inputRef} query={query} setQuery={setQuery}
                        type="text"
                        name="title"
                        value={comment}
                        placeholder="What's on your mind?"
                      />
                    </div>
                    {commentblock && (
                      <div>
                        <button onClick={handleAddComment}  className={styles.postcomment}>Post</button>
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
