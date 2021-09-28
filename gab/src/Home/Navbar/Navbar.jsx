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
import MessageIcon from '@mui/icons-material/Message';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import PersonIcon from '@mui/icons-material/Person';




const Navbar = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.logo}>
                <img height="70px" src="https://apps.gab.com/img/gab-logo.png" alt="" />
                  </div>
            <div className={styles.search}>
            <input type="text" placeholder=    "Search for people or group on Gab" />
            </div>


            <div className={styles.icons}>
<div>

            <HomeIcon   style={{ color:" #63da9d" }} />
            <div>Home</div>
            </div>
            <div>
                <LanguageIcon   style={{ color:"rgb(202, 194, 194);" }} />
             <div>Explore</div>
         
           </div>

<div>
      <DescriptionIcon  style={{ color:"rgb(202, 194, 194);" }} />
         <div>News</div>
         
</div>
<div>
      <GroupsIcon   style={{ color:"rgb(202, 194, 194);",fontSize:"30px","marginTop":"-4px"}} />
         <div>Groups</div>
         
</div>

<div>
      <LiveTvIcon              
   style={{ color:"rgb(202, 194, 194);" }} />
         <div>TV</div>
         
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
size="medium">

<MessageIcon/>
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



       

        



    )
}

export default Navbar
