
import './App.css';
import Expertise from './pages/expertise';
import Digital from './pages/digital/Digital';


import About from './pages/about';
import Home from './pages/home/Home';
import UXUIDesign from './pages/services/Ux-UI-design';
import EnterpriceApp from './pages/services/enterpriceapp/EnterpriceApp';
import Salesforce from './pages/technology/salesforce';
import Servicenow from './pages/technology/servicenow';
import Netsuite from './pages/technology/netsuite';
import Oracle from './pages/technology/oracle';
import Opensource from './pages/technology/opensource';
import Sharepoint from './pages/technology/sharepoint';
import Blockchain from './pages/technology/blockchain';
import ExtendedReality from './pages/insights/extended-reality';
import Cognitive from './pages/insights/cognitive-computing';
import { Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Datascience from './components/ai-data-science/Datascience';
import Testing from './components/testing/Testing';
import MobileWebDev from './pages/services/mobile-web-dev/MobileWebDev';
import ApiIntergration from './pages/services/api-intergration/ApiIntergration';
import CareerDetail from './pages/career-detail/Careerdetail';
import BusinessIntelligence from './pages/insights/business-intelligence';
import Cloud from './pages/insights/cloud';
import Careers from './pages/careers/Careers';




function App() {
  return (
    <div >
      
     
     
      <Routes>
        <Route path=''  index  element={<Home />} />
        <Route path='ux-ui-design'  element={<UXUIDesign />} />
        <Route path='services/mobile-web-development'  element={<MobileWebDev />} />
        <Route path='services/api-intergration'  element={<ApiIntergration />} />
        <Route path='expertise'  element={<Expertise />} />
        <Route path='about'  element={<About />} />
        <Route path='careers'  element={<Careers />} />
        <Route path='salesforce'  element={<Salesforce />} />
        <Route path='navigation'  element={<Navigation />} />
        <Route path='data-science'  element={<Datascience />} />
        <Route path='testing'  element={<Testing />} />
        <Route path='digital'  index  element={<Digital />} />
        <Route path='digital'    element={<Digital />} />
        <Route path='services/enterprice-application'    element={<EnterpriceApp />} />
        <Route path='services/ux-ui-design'  element={<UXUIDesign />} />
        <Route path='technology/salesforce'  element={<Salesforce />} />
        <Route path='career-detail'  element={<CareerDetail />} />
        <Route path='technology/service-now'  element={<Servicenow />} />
        <Route path='technology/netsuite'  element={<Netsuite />} />
        <Route path='technology/oracle'  element={<Oracle />} />
        <Route path='technology/open-source'  element={<Opensource />} />
        <Route path='technology/sharepoint'  element={<Sharepoint />} />
        <Route path='technology/blockchain'  element={<Blockchain />} />
        <Route path='insights/extended-reality'  element={<ExtendedReality />} />
        <Route path='insights/cognitive'  element={<Cognitive />} />
        <Route path='insights/business-intelligence'  element={<BusinessIntelligence />} />
        <Route path='insights/cloud'  element={<Cloud />} />
      </Routes>

      
      
      
      {/* <Image src={LOGO} rounded /> */}
      
    </div>
  );
}

export default App;
