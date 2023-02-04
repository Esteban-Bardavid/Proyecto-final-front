import "./HomePage.css";
import InputPostComponent from "../../components/InputPost/InputPost";
import CardProfile from "../../components/CardProfile/CardProfile";
import Comments from "../../components/Comments/Comments";
import useHome from "../../utils/useHome";
import { useEffect } from "react"
import axios from "axios";


function HomePage() {

  //hook
  const { MapPost } = useHome();

  function singOut() {
    const token = localStorage.getItem('token')
    if (token == null || token == undefined) {
      window.location.href = "/login"
    }
  }
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token }
  useEffect(() => { AdminGet() })

  async function AdminGet() {

    try {
      let url = `http://localhost:4000/api/Login`
      const { data } = await axios.get(url, {}, { headers })
      console.log(data)

    } catch (error) {
      console.error('error')

    }


    return (
      <div>

      </div>
    );
  }
}
  export default HomePage;