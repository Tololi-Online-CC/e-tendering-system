import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Operatorpage from "./pages/Operatorpage";
import Contractorpage from "./pages/Contractorpage";
import Regulatorpage from "./pages/Regulatorpage";
import Siteheader from "./components/Siteheader";
import Loginpage from "./pages/Loginpage";
import Dashboard from './pages/operator-pages/Dashboard'
import Contracts from './pages/operator-pages/Contracts'
import Finance from './pages/operator-pages/Finance'
import Projects from './pages/operator-pages/Projects'
import StatusList from './pages/operator-pages/StatusList'
import BidsList from "./pages/operator-pages/BidsList";
import Category from "./pages/dynamic-pages/Category";
import Bid from "./pages/dynamic-pages/Bid";
import Review from "./pages/dynamic-pages/Review";
import BidDetail from "./pages/operator-pages/BidDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Siteheader />
        <Routes>
          <Route exact path ="/" element={<Loginpage />} />
          <Route path="/operator" element={<Operatorpage />} />
          <Route path="/contractor" element={<Contractorpage />}/>
          <Route path="/regulator" element={<Regulatorpage />} />
          <Route path="/operator/dashboard" element={<Dashboard />} />
          <Route path="/operator/bids_list" element={<BidsList />}/>
          <Route path="/operator/contracts" element={<Contracts />} />
          <Route path="/operator/projects" element={<Projects />} />
          <Route path="/operator/finace" element={<Finance />} />
          <Route path="/operator/status_list" element={<StatusList />} />
          <Route path="/operator/bid/:id" element={<Bid />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/bid_detail/:id" element={<BidDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
