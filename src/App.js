import Title from './components/Title'
import Banner from './components/Banner'
import Block from './components/Block'
import Modal from "./components/Modal"
import Hook from "./components/Hook"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import {Carousel} from 'react-bootstrap';


import Table from "react-bootstrap/Table"
import "./styles/Container.css"


function App() {
  var img1landing =  "https://s-hliao.github.io/portfolio-react/portfolio-landing.png"

  var title1 = "React Portfolio"
  var desc1= "This website, for displaying my personal projects from college."
  var prog1= "Built with CSS, ReactJS, and Bootstrap"
  var full1= "This website, in and of itself is a personal project developed during\
               the winter of 2022. It's meant to be a place for me to show off personal\
                projects that don't fit well into an official experience but still\
                 contributed to my growth as a software engineer and roboticist.\
                 Many of these projects' genesis laid in the competitions and conversations that I had\
                 with friends. This is the second website that I've built after the first\
                 for a national history competition in middle school."
  var src1 =  "https://github.com/s-hliao/portfolio-react"

  var img2landing =  "https://s-hliao.github.io/portfolio-react/app-landing.png"
  var title2 = "MyVFarm"
  var desc2= "A companion app for a democratized automated vertical farming system."
  var prog2= "Built with Android Studio Java and Firebase for HackGT '22"
  var full2= "This is an ongoing project to automate vertical farming.\
              During the hackathon, my partner architected a preliminary CAD model for the vertical farm while I worked a mock-up of the companion app.\
              It features live authentication and database retrieval powered by Google's Firebase API, and has several\
              user-friendly features including a plant index, forum, and FAQ. Further applications include potentially selling\
              the automation at a low price point to attract people interested in DIY home vertical farming. Source code link in following devpost."
  var src2 =  "https://devpost.com/software/vfarm"


  var img3landing =  "https://s-hliao.github.io/portfolio-react/battlecode-landing.png"
  var title3 = "Battlecode 2022"
  var desc3= "An AI bot competing on ladder in an RTS-like environment."
  var prog3= "Built with Java for MIT Battlecode "
  var full3= "I competed in the MIT Battlecode 2022 season with team 'don't @ me', placing 20th overall out of about 220 high school and college teams.\
              During the season, I lead the development of various crucial pathfinding algorithms, communication protocols, and low-level unit behaviors. \
              While we did not make finals this year, I am eager to participate again in the 2023 season and hopefully make the top 12 to be able to go to finals\
              next year. See us play against another team in a match here: https://youtu.be/giZi8DKS1cM?t=650" 
  var src3 =  "https://github.com/georgezhang02/battlecode22"

  var img4landing =  "https://s-hliao.github.io/portfolio-react/autorally.jpg"
  var title4 = "PixelMPC for Autorally"
  var desc4= "A vision-based approach to learning offroad dynamics."
  var prog4= "Built with C++, ROS, and Gazebo for Autorally"
  var full4= "Offroad nonlinear dynamics have proved to be a difficult system to model. \
              This project focuses on the idea that it might be easier to learn the pixel dynamics of the videos \
              returned by the car's fixed position camera and derive controls from them than\
               learn the complex dynamics. This algorithm was initially applied to drones,\
              but as opposed to cars, drone dynamics and controls are relatively well-understood,\
              which when added to their capacity for omnidirectionalcamera orienatation and movement\
               simplifies the problem."
  var src4 =  "https://github.com/AutoRally/autorally/tree/henry/aruco_marker"
  
  
  return (
    
    
    <div className="portfolioapp stack-large">
      
      <Title image="myimage" id="title"/>
  
      <Banner id="banner"/>


      <Block title="Projects" id="project">
        <Table>
          <tr>
            <Hook displayImage={img1landing} title={title1} desc={desc1} prog={prog1} full={full1} src={src1}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/portfolio-landing.png" alt="React Photo"/>
              </Carousel.Item>
            </Hook>
            <Hook displayImage={img2landing} title={title2} desc={desc2} prog={prog2} full={full2} src={src2}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/vfarm-1.jpg" alt="Vfarm Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/vfarm-2.png" alt="Vfarm Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/vfarm-4.jpg" alt="Vfarm Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/vfarm-5.jpg" alt="Vfarm Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/vfarm-6.jpg" alt="Vfarm Photo"/>
              </Carousel.Item>

            </Hook>
            <Hook displayImage={img3landing} title={title3} desc={desc3} prog={prog3} full={full3} src={src3}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/battlecode-1.png" alt="Battlecode Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/battlecode-2.png" alt="Battlecode Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/battlecode-3.png" alt="Battlecode Photo"/>
              </Carousel.Item>
            </Hook>
          </tr>
    
        </Table>  
      </Block>
      <div class="section-container container-col divider">
        <hor/>
      </div>

      <Block title = "Research" id="research">
        <Table>
          <tr>
            <Hook displayImage={img4landing} title={title4} desc={desc4} prog={prog4} full={full4} src={src4}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/autorally-1.png" alt="AutoRally Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/autorally-2.png" alt="AutoRally Photo"/>
              </Carousel.Item>
              
            </Hook>
          </tr> 
        </Table>
      </Block>
      <div class="divider">
        
      </div>

      

      <Contact/>


      <Footer/>
    </div>
  );
}
export default App;
