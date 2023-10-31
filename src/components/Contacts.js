import React, { Component } from 'react'
import "../Contacts.css"
export default class Contacts extends Component {
  render() {
    return (
      <div className='fon'>
      <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Місто Ужгород.</div>
          <div class="text-two">вулиця Заньковецької 89.</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+38 (099) 071 71 93</div>
          <div class="text-two">+38 (096) 115 10 30</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">farynych.yaroslav@student.uzhnu.edu.ua</div>
          <div class="text-two">popovych.oleksandr@student.uzhnu.edu.ua</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Надішліть нам повідомлення</div>
        <div class="topic-text2">Якщо у вас будуть якісь питання до нас, нам буде дуже корисно їх почути та вислухати вашу думку, саме ваш фітбек допоможе нам зробити наш сайт кращим!</div>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Відправити" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
    )
  }
}
