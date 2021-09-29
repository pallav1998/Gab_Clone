import React from 'react'
import styles from "../Navbar/navbar.module.css"
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

import Paper from '@mui/material/Paper';



import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import Divider from '@mui/material/Divider';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';


import WarningIcon from '@mui/icons-material/Warning';

import TimerIcon from '@mui/icons-material/Timer';

const Postpage = () => {
    return (
        <div>
            
            
 
 
  <div  className={styles.middlemenubar}>
    <Paper elevation={2} className={styles.middlemenubar1}>
     <div className={styles.middlemenubar2}>
<div className={styles.samecolor2}>
<IconButton  style={{border:"50%",background:"rgb(240,240,240)"}}
size="medium">


  <PersonIcon  />
  </IconButton>
</div>

<div className={styles.postdiv}>
<p>   Post to timeline
</p>
<ArrowDropDownRoundedIcon style={{marginTop:"1px"}} />

</div>

<div className={styles.zoom} >
<ZoomOutMapRoundedIcon style={{color:"gray"}} />

</div>
</div>
<Divider light />


<div  className={styles.postinputfieeld}>
    
<input  className={styles.inputtextfield}
        // hiddenLabel
        // id="filled-hidden-label-normal"
  
        placeholder="What's on your mind?"
        // variant="filled"
      />
  </div>

  <Paper  elevation={3} className={styles.postitems}>
    <InsertPhotoOutlinedIcon className={styles.emojis} style={{color:"#63da9d" ,fontSize:"25px"}} />


    <EmojiEmotionsOutlinedIcon   className={styles.emojis1}  style={{color:"#f6b83c" ,fontSize:"20px"}}/>
 

 <PollOutlinedIcon className={styles.emojis} style={{color:"#f87e3a" }}/>
  <PublicOutlinedIcon className={styles.emojis} style={{color:"#35bba7" }}/>
  <WarningIcon  className={styles.emojis} style={{color:"#8c75c9" }}/>

<i  style={{color:"red",marginTop:"12px",margin:"10px"}} class="fas fa-calendar-alt" ></i>
<TimerIcon className={styles.emojis} style={{color:"#ee2c4d" }}/>
  </Paper>

    </Paper>
  



  </div>
        </div>
    )
}

export default Postpage
