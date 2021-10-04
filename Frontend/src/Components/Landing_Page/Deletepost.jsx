import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IosShareIcon from "@mui/icons-material/IosShare";

const style = {
  position: "absolute",
  top: "45%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",

  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} style={{ height: "30px" }}>
        {" "}
        <IosShareIcon style={{ color: "#2d3436", fontSize: "15px" }} />{" "}
        <p
          style={{
            margin: "5px",
            fontSize: "13px",
            fontWeight: "400",
            color: "black",
          }}
        >
          {" "}
          Share
        </p>{" "}
      </Button>{" "}
      <br />
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        // aria-labelledby="child-modal-title"
        // aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 100 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export function NestedModal({ handleDelete, handleEdit, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ style }}>
      <Button style={{ color: "gray" }} onClick={handleOpen}>
        {" "}
        <MoreHorizIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 200, borderRadius: 2 }}>
          {/* <h2 id="parent-modal-title">Text in a modal</h2> */}
          <div style={{ display: "flex", color: "#2d3436" }}>
            <Button style={{ width: "200px", height: "30px" }}>
              {" "}
              <BookmarkIcon
                style={{ color: "#2d3436", fontSize: "15px" }}
              />{" "}
              <p
                style={{
                  margin: "5px",
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "black",
                }}
              >
                Bookmark status
              </p>{" "}
            </Button>
            <KeyboardArrowRightIcon />
          </div>
          <Button style={{ height: "30px" }}>
            {" "}
            <PushPinIcon style={{ color: "#2d3436", fontSize: "15px" }} />{" "}
            <p
              style={{
                margin: "5px",
                fontSize: "13px",
                fontWeight: "400",
                color: "black",
              }}
            >
              Pin on Profile
            </p>{" "}
          </Button>
          <Button
            onClick={() => handleDelete(data._id)}
            style={{ height: "30px" }}
          >
            {" "}
            <DeleteIcon style={{ color: "#2d3436", fontSize: "15px" }} />{" "}
            <p
              style={{
                margin: "5px",
                fontSize: "13px",
                fontWeight: "400",
                color: "black",
              }}
            >
              Delete
            </p>{" "}
          </Button>{" "}
          <br />
          <Button
            onClick={() => handleEdit(data._id)}
            style={{ height: "30px" }}
          >
            {" "}
            <ModeEditIcon style={{ color: "#2d3436", fontSize: "15px" }} />{" "}
            <p
              style={{
                margin: "5px",
                fontSize: "13px",
                fontWeight: "400",
                color: "black",
              }}
            >
              Edit
            </p>{" "}
          </Button>
          <br />
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
