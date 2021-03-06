import './App.css';
import { Footer, Header } from './layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Examples, Pictures, Wrong } from './pages';
import styled from 'styled-components';

const Container = styled.div``;

const Pages = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Router basename="/posting">
      <div className="App">
        <Header />
        <Container id="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1/*" element={<Examples />} />
            <Route path="/2/*" element={<Pictures />} />
            <Route path="/3" element={<Examples />} />
            <Route path="/*" element={<Wrong />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
