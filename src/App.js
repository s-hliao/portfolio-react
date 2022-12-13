import Title from './components/Title'
import Banner from './components/Banner'
import Block from './components/Block'
import Array from './components/Array'
import BlockText from './components/BlockText'
import Modal from "./components/Modal"
import Hook from "./components/Hook"

function App() {

  var aboutMeText = "Hi, my name is Henry and I'm a Computer Science student from the Georgia Institute of Technology."
  +"I'm keen to understand all approaches to autonomous robotics from engineering to theory."+
  +"I also spend some of my free time working on the following projects, mainly just cool ideas inspired by my everyday life or conversations with friends."+
  "In my free time, I like to cook, practice piano, and play various video games."


  return (
    <div className="portfolioapp stack-large">
      <Title>
        <BlockText text = "Software Engineer | Roboticist"/>
      </Title>
      

      <Banner title="About Me">
        <BlockText text = {aboutMeText}/>
      </Banner>

      <Block title="Resume">
          <a href="\Resume Henry Liao.pdf">Resume</a>
      </Block>

      <Block title="Projects">
        <Array>
          <Hook/>
          <Hook/>
          <Hook/>
          <Hook/>
        </Array>
        
      </Block>

      <Block title = "Research">
        <Array>
          <Hook/>
        </Array>
      </Block>

      <Block title = "Contact Me">
        <></>
      </Block>

      <h2>Made with JSX</h2>
    </div>
  );
}
export default App;
