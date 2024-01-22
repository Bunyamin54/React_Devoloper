import {Container} from 'react-bootstrap';
import Header from './components/Header';
import ContainerCard from './components/ContainerCard';
import PlayerCard from './components/PlayerCard';

function App () {
  return (
    <Container>

      <Header />
      <ContainerCard />
      <PlayerCard />
    </Container>
  );
}

export default App;
