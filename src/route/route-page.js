
import React from "react";
import { Route, Routes } from "react-router-dom"
import { MockAPI } from "../Mockman";
import { Login } from "../pages/Auth/login/login";
import { Signup } from "../pages/Auth/signup/signup";
import { Error } from "../pages/error/error";
import { Explore } from "../pages/explore/explore";
import { History } from "../pages/history/history";
import { Home } from "../pages/home/home";
import { Liked } from "../pages/liked/liked";
import { Playlist } from "../pages/playlist/playlist";
import { WatchLater } from "../pages/watch-later/watch-later";
import { MockAPI } from "../Mockman";


const RoutePage=()=>{
    return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/history" element={<History />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock-api" element={<MockAPI />} />
      <Route path="*" element={<Error />} />
    </Routes>

    )
}

export {RoutePage}