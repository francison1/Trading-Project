import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./StockOverviewPage";
import { StockDetailPage } from "./StockDetailPage";
import './App.css'
import { WatchListContextProvider } from "./context/watchListContent";
function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<StockOverviewPage />}/>
     <Route path="/detail/:symbol" element={<StockDetailPage />} />
     </Routes>
     </BrowserRouter>
     </WatchListContextProvider>
    </main>
  )
  
}

export default App;
