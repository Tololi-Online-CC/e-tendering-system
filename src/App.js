import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contractorpage from "./pages/Contractorpage";
import Siteheader from "./components/Siteheader";
import Loginpage from "./pages/Loginpage";
import Dashboard from './pages/contractor-pages/Dashboard'
import Contracts from './pages/contractor-pages/Contracts'
import Finance from './pages/contractor-pages/Finance'
import Projects from './pages/contractor-pages/Projects'
import StatusList from './pages/contractor-pages/StatusList'
import BidsList from "./pages/contractor-pages/BidsList";
import Category from "./pages/dynamic-pages/Category";
import Bid from "./pages/dynamic-pages/Bid";
import Review from "./pages/dynamic-pages/Review";
import BidDetail from "./pages/contractor-pages/BidDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Siteheader />
        <Routes>
          <Route exact path ="/" element={<Loginpage />} />
          <Route path="/contractor" element={<Contractorpage />} />
          <Route path="/contractor/dashboard" element={<Dashboard />} />
          <Route path="/contractor/bids_list" element={<BidsList />}/>
          <Route path="/contractor/contracts" element={<Contracts />} />
          <Route path="/contractor/projects" element={<Projects />} />
          <Route path="/contractor/finace" element={<Finance />} />
          <Route path="/contractor/status_list" element={<StatusList />} />
          <Route path="/contractor/bid/:id" element={<Bid />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/bid_detail/:id" element={<BidDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
