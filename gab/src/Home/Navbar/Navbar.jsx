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


import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';







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



    <Paper  sx={{ width: 200 }}>
      <MenuList >
        <MenuItem >
          <ListItemIcon  >

            <HomeIcon />
            <ListItemText style={{marginLeft:"20px",color:"black"}}>Home</ListItemText>

          </ListItemIcon>
          
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            <ListItemText style={{marginLeft:"20px"}}>Notifications</ListItemText>

          </ListItemIcon>
         
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
            <ListItemText>Chats</ListItemText>
          </ListItemIcon>
          
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );


</div>
  </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  <div  className={styles.middlemenubar}>

  </div>
  <div  className={styles.lastmenubar}>

  </div>

</div>
       

       </>
        



    )
}

export default Navbar
