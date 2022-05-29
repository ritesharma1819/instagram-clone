import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import "./index.css";

const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <form>
      <div className="imageUpload">
        <h3>Upload File</h3>
        <progress value={progress} max="100" />
        <input
          className="imageUpload_caption"
          type="text"
          placeholder="write caption here..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          style={{
            padding: "5px",
            marginLeft: "30px",
            width: "30%",
            cursor: "pointer",
          }}
          type="file"
          onChange={handleChange}
        />
        <button
          className="imageUpload_upload"
          type="submit"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default ImageUpload;
