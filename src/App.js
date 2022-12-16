import Title from './components/Title'
import Banner from './components/Banner'
import Block from './components/Block'
import Array from './components/Array'
import BlockText from './components/BlockText'
import Modal from "./components/Modal"
import Hook from "./components/Hook"

function App() {



  return (
    
    
    <div className="portfolioapp stack-large">
      
      <Title image="myimage" id="title"/>
  
      <Banner id="banner"/>

      <Block title="Resume" id="resume">
        
          <a href="https:\\s-hliao.github.io\portfolio-react\Resume Henry Liao.pdf">Resume</a>
      </Block>

      <Block title="Projects" id="project">
        <Array>
          <Hook/>
          <Hook/>
          <Hook/>
          <Hook/>
        </Array>
        
      </Block>

      <Block title = "Research" id="research">
        <Array>
          <Hook/>
        </Array>
      </Block>

      <Block title = "Contact Me" id="contact">
        <></>
      </Block>

      <h2>Made with JSX</h2>
    </div>
  );
}
export default App;
