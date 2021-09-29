import React from 'react'
import styles from "./navbar.module.css"
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import PersonIcon from '@mui/icons-material/Person';

import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


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







const Navbar = () => {
    return (
      <>

      <Paper elevation={1} >

        <div className={styles.Container}>
            <div className={styles.logo}>
                <img style={{marginTop:"-7px"}} height="58px" src="https://apps.gab.com/img/gab-logo.png" alt="" />
                  </div>
            <div className={styles.search}>
<div className={styles.searchinput}>

            <input type="text" placeholder=    "Search for people or group on Gab" />
           <div style={{float:"right",marginTop:"7px",marginRight:"15px"}}>
           <SearchIcon style={{color:" 63da9d"}} />

           </div>

            </div>
            </div>


            <div className={styles.icons}>
<div>
<IconButton>
            <HomeIcon style={{color:"#2d3436"}}   />
            </IconButton>
            <div  className={styles.navbartext}>Home</div>
            </div>
            <div>
            <IconButton>

                <LanguageIcon    style={{color:"#2d3436" }} />
                </IconButton>

             <div  className={styles.navbartext}>Explore</div>
         
           </div>

<div>
<IconButton>
      <DescriptionIcon  style={{ color:"#2d3436" }} />
      </IconButton>
         <div  className={styles.navbartext}>News</div>
         
</div>
<div >
    <IconButton>
      <GroupsIcon   style={{ color:"#2d3436",fontSize:"30px","marginTop":"-4px"}} />
      </IconButton>

         <div className={styles.navbartext}>Groups</div>


</div>

<div>
<IconButton>

      <LiveTvIcon              
   style={{  color:"#2d3436" }} />
   </IconButton>

         <div  className={styles.navbartext}>TV</div>
         
</div>


<div>
      <p className={styles.samecolor}>|</p>
         
</div>


<div className={styles.circleshadow}>
<IconButton  style={{border:"50%",background:"rgb(240,240,240)"}}
              size="medium"
              aria-label="show 17 new notifications"
              // color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
</div>
<div className={styles.samecolor1}>
<IconButton  style={{border:"50%",background:"rgb(240,240,240)"}}
size="medium"
  aria-label="show 6 new messages">
              <Badge badgeContent={5} color="error">

{/* <MessageIcon/> */}
<i class="fas fa-comments"></i>  

</Badge>
             </IconButton>


</div>

<div className={styles.samecolor1}>
<IconButton  style={{border:"50%",background:"rgb(240,240,240)"}}
size="medium">



<LightbulbRoundedIcon  />
</IconButton>
</div>


<div>
      <p className={styles.circleshadow1}>|</p>
         
</div>

<div className={styles.samecolor1}>
<IconButton  style={{border:"50%",background:"rgb(240,240,240)"}}
size="medium">


  <PersonIcon  />
  </IconButton>
</div>
            </div>


</div>

</Paper>

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
       

       </>
        



    )
}

export default Navbar
