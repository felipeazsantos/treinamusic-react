import { createContext } from 'react';
import styles from './App.module.css';
import Index from './ui/pages/Index';
import { useApp } from './data/hooks/useApp.page'

export const AppContext = createContext({});

function App() {
  const useAppValues = useApp();

  return (
    <div >
      <header className={styles['header']}>
        <h1>Treina<span>Music</span></h1>
      </header>
      <AppContext.Provider value={useAppValues}>
        <Index />
      </AppContext.Provider>
    </div>
  );
}

export default App;
