import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="left1">
          <h2>Gab.com</h2>
          <p>menu</p>
          <i class="fas fa-home"> Home </i>
          <i class="fas fa-search"> Search</i>
          <i class="fas fa-users"> Group</i>
          <i class="fas fa-file-alt"> News</i>
          <i class="far fa-address-card"> About</i>
          <p style={{ marginTop: "20px" }}>Explore</p>
          <i class="fas fa-laptop-code"> Apps</i>
          <i class="fas fa-tags"> Shop</i>
          <i class="fas fa-poll-h"> Trend</i>
        </div>
        <div className="between">
          <div className="post1">
            <div className="name3">
              <div>
                {" "}
                <img
                  src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                  alt="loading"
                  height="50px"
                />
              </div>
              <div style={{ display: "flex" }}>
                <h2>Noor</h2>
                <p style={{ marginTop: "10px" }}>@noormuhammed</p>
              </div>
            </div>

            <img
              src="https://image.shutterstock.com/image-photo/hacker-virus-malware-attack-during-260nw-1704713953.jpg"
              alt="loading"
            />

            <div className="like">
              <button>
                <i class="far fa-thumbs-up"></i>like
              </button>
              <button>
                <i class="far fa-comment-alt"></i>Comments
              </button>
              <button>
                <i class="fas fa-redo"></i>Repost
              </button>
              <button>
                <i class="far fa-share-square"></i>share
              </button>
              <button>
                <i class="fas fa-quote-right"></i>Qutos
              </button>
            </div>
          </div>
          <div className="post1">
            <div className="name3">
              <div>
                <img
                  src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                  alt="loading"
                  height="50px"
                />
              </div>
              <div style={{ display: "flex" }}>
                <h2>Noor</h2>
                <p style={{ marginTop: "10px" }}>@noormuhammed</p>
              </div>
            </div>

            {/* <img
                src="https://image.shutterstock.com/image-photo/hacker-virus-malware-attack-during-260nw-1704713953.jpg"
                alt="loading"
              /> */}
            <iframe
              src="https://media.gab.com/system/media_attachments/files/086/812/831/original/332a2b7617a63ad5.mp4"
              title="description"
              height="400px"
            ></iframe>

            <div className="like">
              <button>
                <i class="far fa-thumbs-up"></i>like
              </button>
              <button>
                <i class="far fa-comment-alt"></i>Comments
              </button>
              <button>
                <i class="fas fa-redo"></i>Repost
              </button>
              <button>
                <i class="far fa-share-square"></i>share
              </button>
              <button>
                <i class="fas fa-quote-right"></i>Qutos
              </button>
            </div>
          </div>
          <div className="post1">
            <div className="name3">
              <div>
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GuGeKHEglg5_d3Z501-YRkJsouyGzb6sMA&usqp=CAU"
                  alt="loading"
                  height="50px"
                />
              </div>
              <div style={{ display: "flex" }}>
                <h2>Milind</h2>
                <p style={{ marginTop: "10px" }}>@milindanand</p>
              </div>
            </div>

            <img
              src="https://st2.depositphotos.com/2501025/5406/i/600/depositphotos_54065895-stock-photo-hacker.jpg"
              alt="loading"
            />
            {/* <video class="vjs-tech" playsinline="playsinline" poster="https://media.gab.com/system/media_attachments/files/086/812/831/small/332a2b7617a63ad5.png" preload="none" role="button" tabindex="-1" id="vjs_video_3_html5_api" width="700" height="393" src="https://media.gab.com/system/media_attachments/files/086/812/831/original/332a2b7617a63ad5.mp4"></video> */}
            {/* <iframe
                src="https://media.gab.com/system/media_attachments/files/086/812/831/original/332a2b7617a63ad5.mp4"
                title="description"
                height="400px"
              ></iframe> */}
            <div className="like">
              <button>
                <i class="far fa-thumbs-up"></i>like
              </button>
              <button>
                <i class="far fa-comment-alt"></i>Comments
              </button>
              <button>
                <i class="fas fa-redo"></i>Repost
              </button>
              <button>
                <i class="far fa-share-square"></i>share
              </button>
              <button>
                <i class="fas fa-quote-right"></i>Qutos
              </button>
            </div>
          </div>
          <div className="post1">
            <div className="name3">
              <div>
                {" "}
                {/* <img
                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                    alt="loading"
                    height="50px"
                  /> */}
              </div>
              <div style={{ display: "flex" }}>
                {/* <h2>Noor</h2>
                  <p>@noormuhammed</p> */}
              </div>
            </div>

            {/* <img src="https://image.shutterstock.com/image-photo/hacker-virus-malware-attack-during-260nw-1704713953.jpg" alt="loading" /> */}
            <h2>New to Gab?</h2>
            <p>Sign up now to speak freely.</p>
            <Link to="/signup">
              <button className="btne">Signup </button>
            </Link>
            <Link to="/login">
              <button className="btne1">Login</button>
            </Link>

            {/* <div className="like">
                <button>
                  <i class="far fa-thumbs-up"></i>like
                </button>
                <button>
                  <i class="far fa-comment-alt"></i>Comments
                </button>
                <button>
                  <i class="fas fa-redo"></i>Repost
                </button>
                <button>
                  <i class="far fa-share-square"></i>share
                </button>
                <button>
                  <i class="fas fa-quote-right"></i>Qutos
                </button>
              </div> */}
          </div>
        </div>
        <div className="right">
          <div className="rightPost">
            <h2>Welcome to Gab.com</h2>
            <p>
              A social network that champions free speech, individual liberty
              and the free flow of information online. All are welcome.
            </p>
            {/* <button className="btne">Login</button>
            <button className="btne1">
              <Link to="/profile">Signup</Link></button> */}
            <Link to="/signup">
              <button className="btne">Signup </button>
            </Link>
            <Link to="/login">
              <button className="btne1">Login</button>
            </Link>
          </div>
          <div className="rightPost">
            <h2>Gab TV</h2>

            {/* <button className="btne">Login</button>
            <button className="btne1">
              <Link to="/profile">Signup</Link></button> */}
            {/* <Link to="/signup">
                <button className="btne">Signup </button>
              </Link>
              <Link to="/login">
                <button className="btne1">Login</button>
              </Link> */}
            <iframe
              src="https://media.gab.com/system/media_attachments/files/086/812/831/original/332a2b7617a63ad5.mp4"
              title="description"
              height="200px"
            ></iframe>
          </div>

          <div className="rightPost">
            <h2>Sponsored</h2>
            <br />
            <div className="sponsered">
              <div>
                <img
                  src="https://media.gab.com/system/media_attachments/files/083/336/885/original/16aaf634aa94bc47.jpg"
                  alt="loading"
                  height="100px"
                />
              </div>
              <div>
                <h3>The Gab Shop</h3>
                <p>
                  Check out the gab hats,shirst,mugs,
                  <br />
                  and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
