import "./CardPost.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { BsPencilSquare, BsChat } from "react-icons/bs";
import { FiSend, FiHeart } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { async } from "q";
import axios from "axios";

function CardPost({
  propAuthor,
  propAuthorLN,
  propPostImg,
  propDescription,
  propDeleteMethod,
  propPutMethod,
  propComments,
  propId,
  OnChangeUpdate,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mapComments = propComments.map((item, i) => (<div key={i}><b>{item.authorName}:</b> {item.text}</div>))

  const [comment, setcomment] = useState({});

  function OnChange(e) {
    const { value } = e.target;
    const response = { authorName: propAuthor, id: propId, text: value };
    setcomment(response);
  }

  async function postComment() {
    const token = localStorage.getItem('token') ?? "";
    const headers = { "x-auth-token": token }
    const response = await axios.put(`http://localhost:4000/api/post/comment/${propId}`, { comment: [comment] }, { headers })
    window.location.href = '/'
  }

  return (
    <div className>
     hola soy la card post
    </div>
  );
}

export default CardPost;