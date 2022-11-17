import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'





document.querySelector('#app').innerHTML = `
  <div>
  <section>
  <div class = "merki"><a href="sida.html"><img src="../myndir/liverpool.png" class="logo" alt="Liverpool logo"/></a></div>
    <h1>Hversu margir halda með Liverpool</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
       ýttu á takkann ef þú heldur með Liverpool!
    </p>
    </section>
    <h2>Saga Liverpool</h2>
    <p>Liverpool Football Club is a professional football club</p> 
    <p>based in Liverpool, England. The club competes in the Premier League,</p>
    <p>the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation.</p>
    <img src="../myndir/anfield.jpg" alt=" mynd af Anfield" />
  </div>
  
`

setupCounter(document.querySelector('#counter'))

