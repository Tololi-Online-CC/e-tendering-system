import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contractorpage from "./pages/Contractorpage";
import Siteheader from "./components/Siteheader";
import Loginpage from "./pages/Loginpage";
import Dashboard from './pages/contractor-pages/Dashboard'
import Finance from './pages/contractor-pages/Finance'
import Projects from './pages/contractor-pages/Projects'
import StatusList from './pages/contractor-pages/StatusList'
import BidsList from "./pages/contractor-pages/BidsList";
import Category from "./pages/dynamic-pages/Category";
import Bid from "./pages/dynamic-pages/Bid";
import Review from "./pages/dynamic-pages/Review";
import BidDetail from "./pages/contractor-pages/BidDetail";
import Registrationpage from "./pages/Registrationpage";
import Regulatorpage from "./pages/Regulatorpage";
import Users from "./pages/regulator-pages/Users";
import RegulatorBids from "./pages/regulator-pages/Bids";
import RegulatorProposals from "./pages/regulator-pages/Proposals";
import Adminregistration from "./pages/AdminLogin";
import Rewards from "./pages/regulator-pages/Rewards";
import Analytics from "./pages/regulator-pages/Analytics";
import RegulatorContracts from "./pages/regulator-pages/Contracts";


function App() {
  return (
    <Router>
      <div className="App">
        <Siteheader />
        <Routes>
          <Route exact path ="/" element={<Loginpage />} />
          <Route path ="/register" element={<Registrationpage />} />
          <Route path ="/admin" element={<Adminregistration />} />
          <Route path="/contractor" element={<Contractorpage />} />
          <Route path="/contractor/dashboard" element={<Dashboard />} />
          <Route path="/contractor/bids_list" element={<BidsList />}/>
          <Route path="/contractor/projects" element={<Projects />} />
          <Route path="/contractor/finace" element={<Finance />} />
          <Route path="/contractor/status_list" element={<StatusList />} />
          <Route path="/contractor/bid/:id" element={<Bid />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/bid_detail/:id" element={<BidDetail />} />
          <Route path="/regulator" element={<Regulatorpage />} />
          <Route path="/regulator/users" element={<Users />} />
          <Route path="/regulator/bids" element={<RegulatorBids />} />
          <Route path="/regulator/proposals" element={<RegulatorProposals />} />
          <Route path="/regulator/rewards" element={<Rewards />} />
          <Route path="/regulator/analytics" element={<Analytics />} />
          <Route path="/regulator/contracts" element={<RegulatorContracts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
