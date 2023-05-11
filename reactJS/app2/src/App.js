//npw we will define routes/url for each page in the App.js, import route and switch
import { Route, Routes } from "react-router-dom";

import AllMeetups from "./Pages/AllMeetups";
import Favourites from "./Pages/Favourites";
import NewMeetups from "./Pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    //now instead of returning whole app in one go like before(  <div className="App"> </div>) we define each pages individually with specific route/URL
    // first we define the default page that will be loaded with( / )i-e fist path(AllMeetups)
    //now that paths are created for each pages we need to create a navigation bar which can have the option to all these pages available to user.(for this we will create a layout folder and create MainNavigation.js)
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} />

        <Route path="/new-meetup" element={<NewMeetups />} />

        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
