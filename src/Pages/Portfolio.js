import React, { useEffect, useState } from 'react'
import '../Css/PortFolio.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { auth, db } from '../utilities/Firebase'
import Login from './Login'
import { onValue, ref } from 'firebase/database'
import ActivePositions from '../Components/ActivePositions'
import Performance from '../Components/Performance'
const Portfolio = () => {
  // const [activePill, setActivePill] = useActivePill('PortFolio')
  // useEffect(() => {
  //   setActivePill('PortFolio')
  // })

  const [PortFolioValue, setPortFolioValue] = useState(0)
  const [ProfitOrLose, setProfitOrLose] = useState(0)
  const [sectionSelection, setsectionSelection] = useState(0)

  const Portfoliovaluefetch = () => {
    if (auth.currentUser) {
      onValue(ref(db, 'users/' + auth.currentUser.uid + '/portfolio'), (res) => {
        setPortFolioValue(res.val().availableMoney)
      })
    }
    console.log('no')
  }
  useEffect(() => {
    Portfoliovaluefetch();
  })
  const handleSectionselection = (e) => {
    if ((Number(sectionSelection) === Number(e))) {
    } else {
      setsectionSelection(!sectionSelection)
    }
  }
  return (

    <>
      {auth.currentUser ?
        <div className='PortfolioPageOuter'>
          <Header />
          <div className="PortfolioPageInner">
            <div className="PortFolioValueDiv">
              <h2 className='handleresizemobile'>Paper Trade</h2>
              <div className="PortFolioChooseButtonDiv">
                <h4 className='handleresizelaptop'>Paper Trade</h4>
                <button className={`PortFolioChooseButton ${!sectionSelection ? 'PortFolioChooseButtonActive' : ''}`} value={0} onClick={() => handleSectionselection(0)}><h3>Positions</h3>Active Trades</button>
                <button className={`PortFolioChooseButton ${sectionSelection ? 'PortFolioChooseButtonActive' : ''}`} value={1} onClick={() => handleSectionselection(1)}><h3>Performance</h3>Past Trades</button>
              </div>
              {!sectionSelection ? <>
                <div className="  NewTradeButtonDiv">
                  <ActivePositions />
                </div>
              </> : <><div className="NewTradeButtonDiv">
                <Performance />
              </div></>}
            </div>
          </div>
          <Footer />
        </div >
        :
        <Login />}

    </>
  )
}

export default Portfolio
