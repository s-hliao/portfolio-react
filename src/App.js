import Title from './components/Title'
import Banner from './components/Banner'
import Block from './components/Block'
import Array from './components/Array'
import BlockText from './components/BlockText'
import Modal from "./components/Modal"

function App() {

  fetch

  var aboutMeText = "Hi, my name is Henry and I'm a Computer Science student from the Georgia Institute of Technology."
  +"I'm keen to understand all approaches to autonomous robotics from engineering to theory."+
  +"I also spend some of my free time working on the following projects, mainly just cool ideas inspired by my everyday life or conversations with friends."+
  "In my free time, I love to cook, practice piano, and play various video games."
  return (
    <div className="portfolioapp stack-large">
      <Title>
        <BlockText text = "Software Engineer | Roboticist"/>
      </Title>
      

      <Banner title="About Me">
        <BlockText text = {aboutMeText}/>
      </Banner>

      <Block title="Resume">
          <a href="s-hliao.github.io/portfolio-react/public/Resume Henry Liao.pdf"></a>

      </Block>

      <Block title="Projects">

      </Block>

      <Block title = "Research">

      </Block>

      <Block title = "Contact Me">

      </Block>
    </div>
  );
}
export default App;
