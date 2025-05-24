import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <h1>My React App</h1>
        <p>This is a simple React application.</p>
        
      </header>
      <Sidebar />
    </div>
  );
}

export default App;