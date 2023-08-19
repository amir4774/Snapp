import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "./components/styles/Global";
import Navbar from "./components/Navbar";
import Ul from "./components/Ul";
import ShowCase from "./components/ShowCase";
import Items from "./components/Items";
import About from "./components/About";
import BeDriver from "./components/BeDriver";
import Footer from "./components/Footer";

const theme = {
  colors: {
    green: '#00d16f',
    backgrounGreen: '#21aa58',
    lightBlue: 'rgb(242, 245, 248)',
    textColor: 'rgb(64, 64, 64)'
  },
  mobile: '768px',
}

const App = () => {

  const [change, setChange] = useState(false);
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setBodyWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, [bodyWidth])

  const onChange = () => {
    setChange(!change);
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Navbar change={change} onChange={onChange} />
      {bodyWidth <= parseInt(theme.mobile) && change ? <Ul /> :
        <>
          <ShowCase />
          <Items />
          <About />
          <BeDriver />
          <Footer />
        </>
      }
    </ThemeProvider>
  )
}

export default App;