import "./HomePage.css";
import InputPostComponent from "../../components/InputPost/InputPost";
import CardProfile from "../../components/CardProfile/CardProfile";
import Comments from "../../components/Comments/Comments";
import useHome from "../../utils/useHome";

function HomePage() {

  //hook
  const { MapPost } = useHome();

  function singOut() {
    const token = localStorage.getItem('token')
    if (token == null || token == undefined) {
      window.location.href = "/login"
    }
  }
  // singOut()

  return (
    <div>
  
    </div>
  );
}

export default HomePage;