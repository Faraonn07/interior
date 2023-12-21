import React, { Component } from 'react'
import "../About.css"


export default class About extends Component {
  render() {
    return (
      <div class="about-us">
  
  <div class="teammate reverse">
    <div class="profile-photo">
      <img src="Dev1.JPG" alt=""/>
    </div>
    <div class="info">
      <h3>Фаринич Ярослав</h3>
      <q class="link-light">Прагніть не до успіху, а до цінностей які він дає</q>
      <p>
      Цей перспективний студент володіє основами HTML, CSS та JavaScript, і відомості цих мов дозволяють йому створювати статичні веб-сторінки та основну функціональність. Проте він також звертає увагу на більш сучасні технології, зокрема на фреймворк React. Вивчення та застосування React дає йому можливість розробляти більш складні веб-додатки з багатофункціональним інтерфейсом.
      </p>
    </div>
  </div>
  <div class="teammate">
    <div class="profile-photo">
      <img src="Dev2.JPG" alt="" />
    </div>
    <div class="info">
      <h3>Попович Олександр</h3>
      <q class="link-light">Життя  це те, що з тобою відбувається поки ти будуєш плани.</q>
      <p>
      Перспективний студент, який відповідає за дизайн цього веб-сайту і надає допомогу у розробці фронтенду його напарнику, є творчою та відданою особою. Він вірить у силу дизайну та його важливий внесок у користувацький досвід. Він забезпечує веб-сайт ефективним та привабливим дизайном, що робить його вигляд сучасним та привабливим для користувачів.
      </p>
    </div>
  </div>
</div>
    )
  }
}