import logo from './logo.svg';
import './App.css';

function App() {
  return (

<>
<div class="buttons">

<button class="duplicate">DUPLICATE</button>

<button onclick="changeHeading()" class="change">CHANGE HEADING</button>

<button class="bg-color">CHANGE COLOR</button>

<button onclick="deleteLast()" class="delete">DELETE COPY</button>
</div>

<div class="card">
<img class ="img" src="https://content.sportslogos.net/logos/54/70/full/hplu542ts3fp99gkmueu7uirg.gif"/>

<h1 class="h1">NLCS Game 5: Phillies vs Padres</h1>

<img class="bryce" src = "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1440/810/bryce-hr.jpg?ve=1&tl=1"/>
 <p class="description">Seconds after Bryce Harper's 8th inning go ahead home run in the 2022 NLCS</p>
<a>
<button class ="details">DETAILS</button>
</a>
</div>


  
</>
  );
}

export default App;
