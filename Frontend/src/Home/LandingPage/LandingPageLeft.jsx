import React from 'react'
import styles from "../Navbar/navbar.module.css"

import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import LandingPageLeft from '../LandingPage/LandingPageLeft';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';

import ViewListTwoToneIcon from '@mui/icons-material/ViewListTwoTone';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import Divider from '@mui/material/Divider';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';







const LandingPage = () => {
    return (
        <div>
            
<div className={styles.container2}>
  <div className={styles.leftmenubar}>
    
<div  className={styles.container2child1}>
    
<Typography  variant="h6">Home</Typography>

<div className={styles.container2child1icons}>
<IconButton  style={{border:"50%",background:"#f0f2f5"}}
>
      <LiveTvIcon  
                
   style={{  color:"#2d3436" }} />
            </IconButton>

   
   <IconButton  style={{border:"50%",background:"#f0f2f5"}}
>
   <SearchIcon  />
   </IconButton >


   <IconButton  style={{border:"50%",background:"#f0f2f5"}}
>
<i class="fas fa-comments"></i>  
  </IconButton>

  </div>



<div>

</div>
</div>
<div>



    <div className={styles.menu} >
      <MenuList >
      <ListItemText style={{marginRight:"120px",color:"gray"}}>
          Menu
          </ListItemText>
        <MenuItem >
        
          <ListItemIcon  >

            <HomeIcon  style={{ color:"#2d3436",}} />
            <ListItemText style={{marginLeft:"15px",color:"#2d3436",}}>Home</ListItemText>

          </ListItemIcon>
          
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            {/* <Badge color="error"> */}
                <NotificationsIcon style={{color:"#2d3436",}} />
              {/* </Badge> */}

          </ListItemIcon>
          <ListItemText style={{marginRight:"66px",color:"#2d3436",}}>Notifications</ListItemText>

         
        </MenuItem>

        <MenuItem>
          <ListItemIcon  >
            
          <i style={{color:"#2d3436",}} class="fas fa-comments"></i>  

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px",color:"#2d3436",}}>Chats</ListItemText>

          

        </MenuItem>



        <MenuItem>
          <ListItemIcon>
          <GroupsIcon   style={{ color:"#2d3436",fontSize:"20px"}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>Groups</ListItemText>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>

          <ViewListTwoToneIcon   style={{ color:"#2d3436"}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>Lists</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
          <LanguageIcon  style={{ color:"#2d3436",}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>Explore</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
          <LanguageIcon   style={{ color:"#2d3436"}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>Pro Feed</ListItemText>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
          <DescriptionIcon  style={{ color:"#2d3436",fontSize:"20px"}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>News</ListItemText>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
          < MoreHorizIcon  style={{ color:"#2d3436",}} />

          </ListItemIcon>
          <ListItemText style={{marginRight:"100px"}}>More</ListItemText>
        </MenuItem>
      </MenuList>





      


    </div>



</div>
  </div>
 

 
 
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
  <WarningOutlinedIcon  className={styles.emojis} style={{color:"#35bba7" }}/>
  </Paper>

    </Paper>
  



  </div>
  <div  className={styles.lastmenubar}>

  </div>

</div>
       

        
            
        </div>
    )
}

export default LandingPage
