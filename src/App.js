import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import IndexPage from './pages/home';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/" component={IndexPage} />
			</Switch>
		</Router>
	);
}

export default App;
