import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import multer from "multer"

export default function Home() {
  const { userData } = useContext(UserContext);
  const uploadFile = ()=>{
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, "public")
      },
      filename: function (req, file, cb) {
          const parts = file.mimetype.split("/");
          cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
      }
  })
  const upload = multer({storage});
  }
  return (
    <div className="page">
      {userData.user ? (
        <div className="main">
          <h1>Welcome, {userData.user.displayName}</h1>
          <h3>To get started, Upload a file</h3>
          <button onClick={uploadFile}>Upload</button>
        </div>

      ) : (
        <h3>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </h3>
      )}
    </div>
  );
}