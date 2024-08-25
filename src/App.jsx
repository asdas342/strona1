import '@fortawesome/fontawesome-free/css/all.min.css';
import LeftSide from './components/left-side/LeftSide.jsx';
import RightSide from './components/right-side/RightSide.jsx';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <LeftSide/>
            <RightSide/>

        </div>
    );
}

export default App;
