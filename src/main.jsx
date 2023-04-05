import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import FirstPage from './components/FirstPage/FirstPage';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
// ]);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <FirstPage></FirstPage>
        },
        {
          path: 'friends',
          element: <Friends></Friends>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'friend/:friendId',
          element: <FriendDetails></FriendDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        {
          path: 'posts',
          element: <Posts></Posts>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
        },
        {
          path: 'post/:postId',
          element: <PostDetails></PostDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
