import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Wiki from './Page/Wiki';
import Main from './Page/Main';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Data from './Data';
function App() {
  const[currentWikiId,setCurrentWikiId] = useState(null)
  const[currentWiki,setCurrentWiki] = useState(Data)
    let titleArr = []
    // currentWiki.map((content)=> titleArr.push([content.id,content.title]))
    // useEffect(()=>{

    //   console.log(titleArr)
    // },[currentWiki])

  return (
    <div className="App">
      <BrowserRouter>
        <Header 
        title={currentWiki[currentWikiId]
        &&currentWiki[currentWikiId].title}
        />
        <Routes>
          <Route path="/" element={<Main data={currentWiki} setCurrentWiki={setCurrentWiki}
          setCurrentWikiId={setCurrentWikiId}  
          />}
          />
          <Route 
            path={`/doc/${currentWikiId}`} 
            element={<Wiki 
            data={currentWiki[currentWikiId]
            &&currentWiki[currentWikiId]} 
            totalData={currentWiki}
            currentWikiId={currentWikiId}
            setCurrentWikiId={setCurrentWikiId}
            setCurrentWiki={setCurrentWiki}
            />}/>
        </Routes>
        <Footer setCurrentWikiId={setCurrentWikiId} />
      </BrowserRouter>
    </div>
  );
}

export default App;
