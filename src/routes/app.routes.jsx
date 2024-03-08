import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Preview } from "../pages/Preview";
import { Create } from "../pages/Create";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
