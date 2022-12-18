import Title from './components/Title'
import Banner from './components/Banner'
import Block from './components/Block'
import Modal from "./components/Modal"
import Hook from "./components/Hook"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


import Table from "react-bootstrap/Table"
import "./styles/Container.css"


function App() {
  return (
    
    
    <div className="portfolioapp stack-large">
      
      <Title image="myimage" id="title"/>
  
      <Banner id="banner"/>


      <Block title="Projects" id="project">
        <Table>
          <tr>
            <Hook/>
            <Hook/>
            <Hook/>
          </tr>
          <tr>
            <Hook/>
          </tr>      
        </Table>  
      </Block>
      <div class="section-container container-col divider">
        <hor/>
      </div>

      <Block title = "Research" id="research">
        <Table>
          <tr>
            <Hook/>
          </tr> 
        </Table>
      </Block>

      <Contact/>


      <Footer/>
    </div>
  );
}
export default App;
