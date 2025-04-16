import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log('mount del componente HOME');

    return () => {
      console.log('unmount del componente HOME')
    }

  }, [])

  return <>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor quidem tempore mollitia cum minima similique enim officia provident id quisquam consectetur animi sequi, expedita pariatur, officiis sed, aut ex?</p>
  </>
}

export default Home;