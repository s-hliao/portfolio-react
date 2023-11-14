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
  var full2= <p>This is an ongoing project to automate vertical farming.
              During the hackathon, my partner architected a preliminary CAD model for the vertical farm while I worked a mock-up of the companion app. 
              It features live authentication and database retrieval powered by Google's Firebase API, and has several
              user-friendly features including a plant index, forum, and FAQ. Further applications include potentially selling
              the automation at a low price point to attract people interested in DIY home vertical farming. Source code link in following devpost.
              Check out our devpost  <a class="reglink" href="https://devpost.com/software/vfarm"> here</a>.</p>
  var src2 =  "https://github.com/s-hliao/hackgt22"


  var img3landing =  "https://s-hliao.github.io/portfolio-react/battlecode-landing.png"
  var title3 = "Battlecode 2022"
  var desc3= "An AI bot competing on ladder in an RTS-like environment."
  var prog3= "Built with Java for MIT Battlecode "
  var full3= <p>I competed in the MIT Battlecode 2022 season with team "don't @ me", placing 17th overall out of about 220 high school and college teams.
              During the season, I lead the development of various crucial pathfinding algorithms, communication protocols, and low-level unit behaviors. 
              While we did not make finals this year, I am eager to participate again in the 2023 season and hopefully make the top 12 to be able to go to finals. 
              See us play against another team in a match here: <a class="reglink" href="https://youtu.be/giZi8DKS1cM?t=650">Sprint 2 Tournament 2023 </a>
              </p>
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


  var img5landing =  "https://s-hliao.github.io/portfolio-react/bc.jpg"
  var title5 = "Battlecode 2023"
  var desc5= "Another AI bot for competing the annual RTS game."
  var prog5= "Built with Java for MIT Battlecode"
  var full5= <p>I competed in the MIT Battlecode 2023 season with team "don't @ me", placing 7th overall out of over 200 high school and college teams.
              During this season, we reexamined the shortcomings of our team from the previous season, and made modifications to our strategy
              both in and outside of programming. In anticipation of the new challenge. 
              I again lead the development of various pathfinding algorithms, communication protocols, and low-level unit behaviors. 
              We finished with over 4000 lines of code after 4 week-long, high-intensity sprints. 
              Check out our strategy guide here: 
              <a href="https://battlecode.org/assets/files/postmortem-2023-dont-at-me.pdf" class="reglink"> Guide</a>.
              See us play against another team in finals at MIT: <a class="reglink" href="https://www.youtube.com/watch?v=oa4CAizd1Nk">Final Tournament 2023 </a> 
              and <a class="reglink" href="https://www.youtube.com/watch?v=uz5hyXn9ICQ"> intro video</a>.
              </p> 
  var src5 =  "https://github.com/georgezhang02/battlecode23"


  var img6landing =  "https://s-hliao.github.io/portfolio-react/star.jpg"
  var title6 = "Stellar Classification"
  var desc6= "A collection of ML Models for classifying various stars"
  var prog6= "Built with Numpy, Jupyter, and Seaborn for GT Intro to ML"
  var full6= <p>I helped a group program multiple classification models using supervised and unsupervised learning techniques.
              We preprocessed, classified, and visualized data from the dataset found  
              <a href="https://www.kaggle.com/datasets/deepu1109/star-dataset?resource=download" class="reglink"> here</a>.
              Documentation for the entire development process and final results can be found
              <a class="reglink" href="https://s-hliao.github.io/Spring-ML-2023/"> here</a>. Algorithms used included PCA, K-means, GMM,
              neural networks, SGD, random forests, and logisitc regression, to varying degrees of success.
              </p> 
  var src6 =  "https://github.com/s-hliao/Spring-ML-2023"
  
  var img7landing =  "https://s-hliao.github.io/portfolio-react/racer.jpg"
  var title7 = "Optimizing MPPI Sampling via IRL"
  var desc7= "Improving MPPI control for DARPA RACER using expert demonstration."
  var prog7= "Built with ROS, C++, and Pytorch"
  var full7= <p>For a research project, I spent time developing algorithms that would help improve the quality
                of MPPI samples given degenerate pathing or pathological cases. This initially took the form of extracting
                series of controls from expert demonstrations and applying them as part of the MPPI samples. However,
                it became apparent that extra intelligence was needed.
                This led to the problem formulation of sampling around another mean based on the current costmap.
                I instead created a k-means algorithm for clustering MPPI samples, then a multi-layer-perceptron that included a
                CNN to map from costmaps and vehicle state to the control sequence cluster. This was in part inspired by waymo's behavioral trajectory classification research
                called <a href="https://arxiv.org/pdf/1910.05449v1.pdf" class="reglink"> MultiPath</a>. Note that the source code is for 
                the MPPI simulator I created, as the RACER code is export-controlled.
              </p> 
  var src7 =  "https://github.com/s-hliao/mppi-plt-sim"
  
  
  
  return (
    
    
    <div className="portfolioapp stack-large">
      
      <Title image="myimage" id="title"/>
      <Banner id="banner"/>
      <Block title="Projects" id="project">
        <Table class = "table">
          <tr>
            <Hook displayImage={img5landing} title={title5} desc={desc5} prog={prog5} full={full5} src={src5}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/bc1.png" alt="Battlecode Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/bc2.png" alt="Battlecode Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/bc3.png" alt="Battlecode Photo"/>
              </Carousel.Item>
            </Hook>

            <Hook displayImage={img6landing} title={title6} desc={desc6} prog={prog6} full={full6} src={src6}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/star1.jpg" alt="ML Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/star2.png" alt="ML Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/star3.jpg" alt="ML Photo"/>
              </Carousel.Item>
            </Hook>

            <Hook displayImage={img1landing} title={title1} desc={desc1} prog={prog1} full={full1} src={src1}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/portfolio-landing.png" alt="React Photo"/>
              </Carousel.Item>
            </Hook>

            
            
            
          </tr>
          <div class="row_divider"/>

          <tr>
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
        <Table class = "table">
          <tr>
            <Hook displayImage={img7landing} title={title7} desc={desc7} prog={prog7} full={full7} src={src7}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/racer1.png" alt="Racer Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/racer2.png" alt="Racer Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/racer3.png" alt="Racer Photo"/>
              </Carousel.Item>
              
            </Hook>

            <Hook displayImage={img4landing} title={title4} desc={desc4} prog={prog4} full={full4} src={src4}>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/autorally-1.png" alt="AutoRally Photo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="modalpart" src="https://s-hliao.github.io/portfolio-react/autorally-2.png" alt="AutoRally Photo"/>
              </Carousel.Item>
              
            </Hook>

            <td />

            
            
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
