import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NyscProgramme from "./pages/NyscProgramme";
import BranchesPage from "./pages/BranchesPage";
import History from "./pages/History";
import AboutPages from "./pages/AboutPages";
import ContactUs from "./pages/ContactUs";
import TrainingAndCertification from "./pages/TrainingAndCertification";
import IndividualMembership from "./pages/membership/IndividualMembership";
import CoporateMembership from "./pages/membership/coporatemembership/CoporateMembership";
import ImoStateBranch from "./pages/branches/imostatebranch/ImoStateBranch";
import KwaraStateBranch from "./pages/branches/kwarastatebranch/KwaraStateBranch";
import CrossRiverStateBranch from "./pages/branches/crossriverstatebranch/CrossRiverStateBranch";
import OyoStateBranch from "./pages/branches/oyostatebranch/OyoStateBranch";
import LagosState from "./pages/branches/lagosstatebranch/LagosState";
import DivisionsAndSpecialization from "./pages/DivisionsAndSpecialization";
import DisciplinaryCommitee from "./pages/DisciplinaryCommitee";
import ObjectivesAndFunctions from "./pages/ObjectivesAndFunctions";
import BoardMembers from "./pages/boardmembers/BoardMembers";
import MembershipFee from "./pages/membership/membershipfee/MembershipFee";
import Events from "./pages/eventpage/Events";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/nyscprogramme" element={<NyscProgramme />}></Route>
          <Route path="/branches" element={<BranchesPage />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/aboutus" element={<AboutPages />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/training&certification"
            element={<TrainingAndCertification />}
          ></Route>
          <Route
            path="/individualmembership"
            element={<IndividualMembership />}
          ></Route>
          <Route
            path="/coporatemembership"
            element={<CoporateMembership />}
          ></Route>
          <Route
            path="/imostatebranchschedule"
            element={<ImoStateBranch />}
          ></Route>
          <Route
            path="/kwarastatebranchschedule"
            element={<KwaraStateBranch />}
          ></Route>
          <Route
            path="/crossriverstatebranchschedule"
            element={<CrossRiverStateBranch />}
          ></Route>
          <Route
            path="/oyostatebranchschedule"
            element={<OyoStateBranch />}
          ></Route>
          <Route
            path="/lagosstatebranchschedule"
            element={<LagosState />}
          ></Route>
          <Route
            path="/divisionsandspecialization"
            element={<DivisionsAndSpecialization />}
          ></Route>
          <Route
            path="/disciplinarycommitee"
            element={<DisciplinaryCommitee />}
          ></Route>
          <Route
            path="/objectivesandfunctions"
            element={<ObjectivesAndFunctions />}
          ></Route>
          <Route path="/boardmembers" element={<BoardMembers />}></Route>
          <Route path="/membershipfees" element={<MembershipFee />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
