import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css'; // We will put the "width" logic here

function App() {
  const hubName = "My Community Hub";
  const currentUser = "Caroline";

  return (
    <div className="app-container">
      <Header title={hubName} /> 
      
      <div className="main-layout">
        <Sidebar />
        <Feed user={currentUser} />
      </div>
    </div>
  );
}

export default App;