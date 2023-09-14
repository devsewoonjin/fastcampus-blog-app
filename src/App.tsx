import "App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostEdit from "pages/posts/edit";
import PostNew from "pages/posts/new";
import ProfilePage from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";
import PostPage from "pages/posts/detail";
import PostsPage from "pages/posts";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/posts">Post List Page</Link>
        </li>
        <li>
          <Link to="/posts:id">Post Detail Page</Link>
        </li>
        <li>
          <Link to="/posts/new">Post New Page</Link>
        </li>
        <li>
          <Link to="/posts/edit">Post Edit Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile Page</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/signup">Signup Page</Link>
        </li>
      </ul> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit" element={<PostEdit />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
