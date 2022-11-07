import React, { useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from '@react-spring/web'
import { useWindowSize } from 'react-use';
import { merchant } from "./data";

import ConnectPage from './pages/ConnectPage';
import MintPage from "./pages/MintPage";
import SuccessPage from "./pages/SuccessPage"
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import { PageContainer } from "./components/styled/Layout.styled";

function App() {
  //animate each page transition
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 30, opacity: 0 },
    exitBeforeEnter: true,
  })

  //100vh iOS fix, window height to adapt iOS mobile browsers, -research other solutions
  const { height } = useWindowSize()

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return transitions((props, item) => (
    <PageContainer height={height}>
      <Topbar merchant={merchant} />

      <animated.div style={props} className="spring-wrapper">
        <Routes location={item}>
          <Route
            path="/"
            exact
            element={
              <ConnectPage
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />}
          />
          <Route
            path="/connectwallet/:wallet"
            element={
              <MintPage
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />}
          />
          <Route
            path="/mintsuccess"
            element={<SuccessPage />}
          />
        </Routes>
      </animated.div>

      <Footer />
    </PageContainer>

  ));
}

export default App;
