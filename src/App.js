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
  var img1landing =  "https://s-hliao.github.io/portfolio-react/portfolio-landing.jpg"
  var img2landing =  "https://s-hliao.github.io/portfolio-react/app-landing.png"
  var img3landing =  "https://s-hliao.github.io/portfolio-react/battlecode-landing.png"

  var img4landing =  "https://s-hliao.github.io/portfolio-react/autorally.jpg"
  
  
  return (
    
    
    <div className="portfolioapp stack-large">
      
      <Title image="myimage" id="title"/>
  
      <Banner id="banner"/>


      <Block title="Projects" id="project">
        <Table>
          <tr>
            <Hook displayImage={img1landing} />
            <Hook displayImage={img2landing}/>
            <Hook displayImage={img3landing}/>
          </tr>
    
        </Table>  
      </Block>
      <div class="section-container container-col divider">
        <hor/>
      </div>

      <Block title = "Research" id="research">
        <Table>
          <tr>
            <Hook displayImage={img4landing}/>
          </tr> 
        </Table>
      </Block>

      <Contact/>


      <Footer/>
    </div>
  );
}
export default App;
