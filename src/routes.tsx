import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LatestLaunch from './pages/Launches/Latest';
import NextLaunch from './pages/Launches/Next';
import PastLaunches from './pages/Launches/Past';
import UpcomingLaunches from './pages/Launches/Upcoming';

import GlobalStyles from './styles/global';

const Routes = () => (
  <>
    <GlobalStyles />

    <ReactDOMRoutes>
      <Route path="/" element={<Home />} />

      <Route path="/launches/latest" element={<LatestLaunch />} />
      <Route path="/launches/next" element={<NextLaunch />} />
      <Route path="/launches/past" element={<PastLaunches />} />
      <Route path="/launches/upcoming" element={<UpcomingLaunches />} />
    </ReactDOMRoutes>
  </>
);

export default Routes;
