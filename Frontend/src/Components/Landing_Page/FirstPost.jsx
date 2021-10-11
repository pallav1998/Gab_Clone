import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Firstpost.module.css";
import { BsFillPencilFill, BsFillImageFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export default function FirstPost() {
  return (
    <>
      <div className={styles.cardparent}>
        <Card className={styles.card}>
          <div className={styles.loadcard}>
            <BsFillPencilFill />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Send your first post
            </Typography>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <div className={styles.loadcard}>
            <FaUsers />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Follow Others
            </Typography>
          </CardContent>
        </Card>

        <Card className={styles.card}>
          <div className={styles.loadcard}>
            <BsFillImageFill />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Complete your profile
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
