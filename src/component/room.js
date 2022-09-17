import React, {Component} from 'react';
import img1 from '../assets/images/trangphuc1.png';
import img2 from '../assets/images/trangphuc4.png';
import img3 from '../assets/images/trangphuc5.png';
import img4 from '../assets/images/trangphuc6.png';
import img5 from '../assets/images/trangphuc7.png';
import img6 from '../assets/images/trangphuc8.png';
import img7 from '../assets/images/trangphuc9.png';
import img8 from '../assets/images/trangphuc10.png';
export default class Room extends Component{
    state = {
        img : img1
    }
    changeDress = (img) =>{
        return(
            this.setState({
            img: img
        })
        )
    }

    render(){
        return(
            <div>
                <div className='wrapper__room'>
                    <div className='room'>
                        <img className='room--img' src={require('../assets/images/dress-room.jpg')} alt=''/>
                        <img className='doll' src={require('../assets/images/girl.png')} alt=''/>
                        <img className='doll__dress dress1' src={this.state.img} alt=''/>
                    </div>
                </div>
                <div className="wrapper__box">
                <div className="box__menu">
                  <div className="box">
                    <img src={require("../assets/images/box.png")} alt="" />
                  </div>
                  <table className="box__menu--button">
                    <tr>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img1)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc1.png")}
                            alt=""
                          />
                        </button>
                      </th>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img2)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc4.png")}
                            alt=""
                          />
                        </button>
                      </th>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img3)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc5.png")}
                            alt=""
                          />
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img4)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc6.png")}
                            alt=""
                          />
                        </button>
                      </th>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img5)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc7.png")}
                            alt=""
                          />
                        </button>
                      </th>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img6)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc8.png")}
                            alt=""
                          />
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img7)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc9.png")}
                            alt=""
                          />
                        </button>
                      </th>
                      <th>
                        <button className="btn--dress" onClick={() => this.changeDress(img8)}>
                          <img
                            className="btn"
                            src={require("../assets/images/menu.png")}
                            alt=""
                          />
                          <img
                            className="dress"
                            src={require("../assets/images/trangphuc10.png")}
                            alt=""
                          />
                        </button>
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        )
    }
}