import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './layout/Nav';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About us';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import Request from './pages/Request';
import Calculation from './pages/Calculation';

function App() {
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route
                    path='/Services'
                    element={<Services />}
                />
                <Route
                    path='/Products'
                    element={<Products />}
                />
                <Route
                    path='/About'
                    element={<About />}
                />
                <Route
                    path='/Portfolio'
                    element={<Portfolio />}
                />
                <Route
                    path='/FAQ'
                    element={<FAQ />}
                />
                <Route
                    path='/Contacts'
                    element={<Contacts />}
                />
                <Route
                    path='/Request'
                    element={<Request />}
                />
                <Route
                    path='/Calculation'
                    element={<Calculation />}
                />
            </Routes>
        </div>
    );
}

export default App;