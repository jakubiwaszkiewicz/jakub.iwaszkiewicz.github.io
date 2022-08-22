import { FaBaby } from "react-icons/fa";

export default function HelloPage () {
    return (
      <div id="HelloPage">
          <header>
              <h1>Sieeemano!</h1>
              <h2> z tej strony Jakub i witam Cię na mojej aplikcji na</h2>
              <h2>Baby Membera!<FaBaby /></h2>
          </header>
          <a className="scroll-bottom" id="scroll-1" href="#KrzychuPage">
              <div className="top-bar bar"></div>
              <div className="middle-bar bar"></div>
              <div className="bottom-bar bar"></div>
          </a>
      </div>
    );

}