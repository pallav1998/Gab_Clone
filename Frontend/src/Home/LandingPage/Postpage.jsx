import React,{useState,useRef} from "react";
import styles from "../Navbar/navbar.module.css";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

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

const Postpage = () => {

  const input1=useRef(null)
  const addfun=()=>{
    if(input1.current.style.display==="none"){
      input1.current.style.display="block"
    }
    else{
      input1.current.style.display="none"

    }
  }
  
  return (
    <div>
      <div className={styles.middlemenubar}>
        <Paper elevation={2} className={styles.middlemenubar1}>
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


          <div ref={input1} className={styles.postinputfieeld}>
            
            <input
              className={styles.inputtextfield}
             onFocus={addfun}
              type="text"
              
              
              // onChange={handleSearch}

              placeholder="What's on your mind?"
          />






          </div>

          <Paper elevation={3} className={styles.postitems}>
            {/* <InsertPhotoOutlinedIcon  className={styles.emojis} style={{color:"#63da9d" ,fontSize:"25px"}} />

    <EmojiEmotionsOutlinedIcon   className={styles.emojis1}  style={{color:"#f6b83c" ,fontSize:"20px"}}/>
 
 <PollOutlinedIcon className={styles.emojis} style={{color:"#f87e3a" }}/>
  <PublicOutlinedIcon className={styles.emojis} style={{color:"#35bba7" }}/>
  <WarningIcon  className={styles.emojis} style={{color:"#8c75c9" }}/>

<i  style={{color:"red",marginTop:"12px",margin:"10px"}} class="fas fa-calendar-alt" ></i>
<TimerIcon className={styles.emojis} style={{color:"#ee2c4d" }}/> */}

            <div className={styles.iconsupdated}>
              <p className={styles.iconsinput}>
                <InsertPhotoOutlinedIcon for="id1" className={styles.iconsinputinsert} />
                <label htmlFor="">

               <input id="id1" style={{backgroundColor:"white"}} className={styles.fileinput} type="file" />

                </label>

              </p>
            </div>
          </Paper>


<div ref={input1}>
  <button className={styles.btnpost}>Post</button>
</div>

        </Paper>
        <div style={{ marginTop: "20px" }}>
          <MediaCard />
        </div>
      </div>
    </div>
  );
};

export default Postpage;
