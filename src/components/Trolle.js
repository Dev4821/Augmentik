import React,{Component} from 'react';
import "./Trolle.css"
import img1 from './images/trello1.webp'
import tr1 from './images/trello1.webp'
import tr2 from './images/img2.webp';
import tr3 from './images/trello3.webp'
class Trolle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: tr1,
    }
  }
  hancdleClick = (img) => {
    this.setState({imgSrc: img});
  }
  render(){
  return (
    <div className="secondsec">
    <p className="t1">TRELLO 101</p>
    <h2 className="t2">A productivity powerhouse</h2>
    <div className="t3">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of
      who’s doing what
      and what needs to get done. Learn more in our <a className="linkForGetting" href="https://trello.com/guide">guide for
        getting started.</a></div>
    <div className="secsec">
      <div className="cardst">
        <div className="carder cardercopy" onClick={() => {
          this.hancdleClick(tr1);
        }}>
          <div className={`a2 eles ${this.state.imgSrc === tr1 ? 'active': ''}`} data-imagurl={img1}>
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Boards</h3>
            <p className="ct">Trello boards keep tasks organized and
              work moving forward. In a glance, see
              everything from "things to do" to "aww
              yeah, we did it!"</p>
          </div>
        </div>
        <div className="carder cardercopy" onClick={() => {
          this.hancdleClick(tr2)
        }}>
          <div className={`eles ${this.state.imgSrc === tr2 ? 'active': ''}`} data-imagurl="">
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Lists</h3>
            <p className="ct">The different stages of a task. Start as
              simple as To Do, Doing or Done-or build
              a workflow custom fit to your team's
              needs. There's no wrong way to Trello.</p>
          </div>
        </div>
        <div className="carder cardercopy" onClick={() => {
          this.hancdleClick(tr3)
        }}>
          <div className={`eles ${this.state.imgSrc === tr3 ? 'active': ''}`} data-imagurl="./images/trello3.webp">
            <p className="etext">bf</p>
          </div>
          <div>
            <h3>Cards</h3>
            <p className="ct">Trello boards keep tasks organized and
              work moving forward. In a glance, see
              everything from "things to do" to "aww
              yeah, we did it!"</p>
          </div>
        </div>
      </div>
      <div className="imagesinthis">
        <img id="img1" className="image-transition" src={this.state.imgSrc}></img>
      </div>
    </div>
  </div>)
  }
}

export default Trolle
