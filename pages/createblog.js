import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage, db, serverTimestamp } from "../firebase";

export default function Createblog({ user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      try {
        db.collection("blogs").add({
          title,
          body,
          imageUrl: url,
          postedBy: user.uid,
          createdAt: serverTimestamp(),
        });
        M.toast({ html: "Blog Created", classes: "green" });
      } catch (err) {
        M.toast({ html: "error creating blog", classes: "red" });
      }
    }
  }, [url]);

  const SubmitDetails = () => {
    if (!title || !body || !image) {
      M.toast({ html: "please add all the fields", classes: "red" });
      return;
    }
    var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == "100")
          M.toast({ html: "Image Uploaded", classes: "green" });
      },
      (error) => {
        M.toast({ html: error.message, classes: "red" });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };
  return (
    <div className="bg-[#040720] h-screen flex flex-col justify-center items-center p-10">
      <h3>Create A Blog !!</h3>
      <input
        className="p-5"
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-5 overflow-hidden"
        type="text"
        value={body}
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="rounded-xl file-field input-field border flex flex-col justify-center items-center h-[200px] w-[300px] p-[100px] mt-[100px]">
        <div className="w-screen flex justify-center items-center">
          <span>Select fils or drag and drop</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn #fb8c00 orange darken-1"
        onClick={() => SubmitDetails()}
      >
        Submit Post
      </button>

      <style jsx>
        {`
          .rootdiv {
            margin: 100px auto;
            max-width: 600px;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
