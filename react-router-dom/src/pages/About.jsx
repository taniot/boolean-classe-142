import { useEffect } from "react";
import MainNav from "../components/MainNav";

const About = () => {


  useEffect(() => {
    console.log('mount del componente ABOUT');

    return () => {
      console.log('unmount del componente ABOUT')
    }


  }, [])

  return <>

    <h1>About</h1>

  </>
}

export default About;