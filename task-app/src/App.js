import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/throw';

import { ImageMap } from '@qiuz/react-image-map'; 

import { Container } from "react-bootstrap"

import task from "../src/image/task.png"

export default function Home() {
  return <div>
     <Container>
          <figure className="position-relative">
          
          </figure> 



          <img src="./image/task.png" alt="task"  className="img-fluid" useMap="#task"></img>
                <map name="task">

                    <area shape="rect" alt="task" coords="545,202,  632,306" href="https://statueofunity.in//"></area>
                    <area shape="rect" alt="task" coords="215,660,  375,802" href="https://en.wikipedia.org/wiki/Tree//"></area>
                    <area shape="rect" alt="task" coords="137,504,  199,580" href="https://csfs.colostate.edu/colorado-trees/what-is-a-tree-how-does-it-work///"></area>
                    <area shape="rect" alt="task" coords="137,504,  199,580" href="https://csfs.colostate.edu/colorado-trees/what-is-a-tree-how-does-it-work///"></area>
                    <area shape="rect" alt="task" coords="14,708,  175,853" href="https://trees.org//"></area>
                    <area shape="rect" alt="task" coords="11,559,  159,657" href="https://www.savatree.com/whytrees.html//"></area>
                    <area shape="rect" alt="task" coords="17,482,  117,540" href="https://trees.org//"></area>
                </map>

            
          {/* <img src= "./src/image/task.png" className="img-fluid" alt="" useMap="#task"></img>
    <map name="task">
        <area target="" alt="flag1" title="Milestone 1" href="https://statueofunity.in" coords="545,202,  632,306" shape="rect"></area>
        <area target="" alt="flag2" title="Milestone 2" href="https://en.wikipedia.org/wiki/Tree" coords="215,660,  375,802" shape="rect"></area>
        <area target="" alt="flag3" title="Milestone 3" href="https://en.wikipedia.org/wiki/Tree" coords="137,504,  199,580" shape="rect"></area>
        <area target="" alt="flag4" title="Milestone 4" href="https://en.wikipedia.org/wiki/Tree" coords="11,559,  159,657" shape="rect"></area>
        <area target="" alt="cap" title="DDA" href="https://en.wikipedia.org/wiki/Tree" coords="17,482,  117,540" shape="rect"></area>
    </map> */}
            
         

    </Container>
</div>
}   


