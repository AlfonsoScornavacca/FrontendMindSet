import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from 'Components/Psychologist/Home';
import FirstView from 'Components/Psychologist/FirstView';
import CompletedInterviews from 'Components/Psychologist/CompletedInterviews';
import Layout from 'Components/Layout';
import PostulantProfile from 'Components/Psychologist/PostulantProfile';

const PsychologistRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout routes={[{ name: 'Go to admin app', path: '/admin' }]} styleType="psychologist">
      <Switch>
        <Route path={`${url}/`} exact component={Home} />
        <Route path={`${url}/first-view`} component={FirstView} />
        <Route path={`${url}/completed-interviews`} component={CompletedInterviews} />
        <Route path={`${url}/postulant/:id`} component={PostulantProfile} />
      </Switch>
    </Layout>
  );
};

export default PsychologistRoutes;
