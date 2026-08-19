import BottomMenu from "./components/BottomMenu.jsx"
import Navbar from "./components/navbar.jsx"
import Home from "./page/Home.jsx"
import CanteenProfile from "./page/Profile.jsx"
import { Router, LocationProvider, Route } from "preact-iso"

export function App() {
  return (
    <LocationProvider>
      <Navbar />
      <main>
        <Router>
          <Route path="/" component={Home}/>
          <Route path="/profile" component={CanteenProfile}/>
        </Router>
      </main>
      <BottomMenu />
    </LocationProvider>
  )
}