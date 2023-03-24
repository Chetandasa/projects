import './App.css';
import Layout from './Layout/Layout';
import Filter from './Components/Filter';
import Details from './Components/Details';
import Home from './Components/Home';

function App() {
  return (
    <Layout>
      <Home />
      <Filter />
      <Details />
    </Layout>
  );
}

export default App;
