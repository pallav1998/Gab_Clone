import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Firstpost.module.css";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
export default function FirstPost() {
  return (
    <>
      <div className={styles.cardparent}>
        <Card className={styles.card1}>
          <div className={styles.loadcard1}>
            <CreateIcon
              style={{ color: "black", fontSize: "28px", marginTop: "32px" }}
            />
          </div>
          <CardContent>
            <Typography
              style={{ fontSize: "15px", color: "#2d3436", fontWeight: "550" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Send your first post
            </Typography>
          </CardContent>
        </Card>

        <Card className={styles.card1}>
          <div className={styles.loadcard1}>
            <i
              style={{ color: "black", fontSize: "20px", marginTop: "35px" }}
              class="fas fa-users"
            ></i>
          </div>
          <CardContent>
            <Typography
              style={{ fontSize: "15px", color: "#2d3436", fontWeight: "550" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Follow Others
            </Typography>
          </CardContent>
        </Card>

        <Card className={styles.card1}>
          <div className={styles.loadcard1}>
            <InsertPhotoIcon
              style={{ color: "black", marginTop: "32px", fontSize: "30px" }}
            />
          </div>
          <CardContent>
            <Typography
              style={{ fontSize: "15px", color: "#2d3436", fontWeight: "550" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Complete your profile
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
