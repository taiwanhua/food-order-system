import * as React from 'react'
import './App.css';
import { MenuAndCart } from './Component/Menu';
import { useWindowSize } from './Hooks/useWindowSize';
import { History } from './Component/History'

function App() {

  const [, height] = useWindowSize();
  const [showHistory, setShowHistory] = React.useState(false)

  return (
    <>
      {/* 一般是不會寫 inline-style 這裡因為case不複雜，且非題目重點而使用 */}
      <div className="App" style={{ height: `${height}px`, textAlign: "center" }}>
        <header className="App-header">
          <h1>
            food order system client
          </h1>
        </header>

        <MenuAndCart />

        <button className="view-history" onClick={() => { setShowHistory(s => !s) }}>View History</button>

        {showHistory && <History close={() => { setShowHistory(s => !s) }} />}

      </div>
    </>
  );
}

export default App;
