import React from 'react'
import './FormEdit.css'

function FormEdit() {
  return (
    <section className='sectionSignup'>
      <form className='formSignup'>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" required autoFocus />
          </div>
          <div className="field">
            <label>Surname</label>
            <input type="text" name="surname" required autoFocus />
          </div>

          <div id='sexDiv' className="field">
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="sex" dafaultChecked />
              <label htmlFor="demo-priority-low">Woman</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" />
              <label htmlFor="demo-priority-normal">Man</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="sex" />
              <label htmlFor="demo-priority-normal">Others</label>
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="field">
            <label>BearthDay</label>
            <input type="date" name="bday" required />
          </div>

          <div className="field">
            <label>Phone</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="field">
            <label>City</label>
            <input type="text" name="city" required />
          </div>

          <div className="field">
            <label>Profession</label>
            <input type="text" name="profession" required />
          </div>

          <div className="field">
            <label>About</label>
            <textarea name="about" required />
          </div>

          <div className="field">
            <label>Тэги через map()</label>
            <div class="col-6 col-12-small">
              <input type="checkbox" id="demo-copy" name="demo-copy" />
              <label for="demo-copy">{'тэги'}</label>
            </div>
          </div>

          <div className="field">
            <label>Языки</label>
            <div class="col-12">
              <select onChange={' '} name="demo-category" id="demo-category">
                <option value="">- Наши языки -</option>
              </select>
            </div>
          </div>

          <div className="field">
            <div>
              <label>Соц-сети</label>
              через map
            <label>Инстаграмм</label>
              <input type="text" id="instagram" name="instagram" />
            </div>
          </div>
        </div>
      </form>
    </section>
  )
};

export default FormEdit;
