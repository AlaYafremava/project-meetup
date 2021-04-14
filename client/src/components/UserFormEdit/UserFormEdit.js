import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchInitTags } from '../../redux/reduxThunk/asyncFuncs'
import { UPDATE_USER } from '../../redux/actionTypes/actionTypes'
import { v4 as uuidv4 } from 'uuid';
import './UserFormEdit.css'
import UserTag from '../../components/UserTag/UserTag'
import UserLang from '../../components/UserLang/UserLang'

function UserFormEdit() {
  const user = useSelector(store => store.user.user)
  const [tagList, setTagList] = useState(user.tags);
  const [langList, setLangList] = useState(user.languages);

  const dispatch = useDispatch();
  const history = useHistory();

  const changeStatusHandler = (tagTitle) => {
    setTagList((prevState) => prevState.map(el => {
      if (el.title === tagTitle) {
        el.check = !el.check;
        return el
      }
      return el
    }))
    // dispatch(fetchChangeTagStatus(id))
  }

  const selectLangHandler = (langTitle) => {
    setLangList((prev) => prev.map(el => {
      if (el.title === langTitle) {
        el.check = !el.check
        return el
      }
      return el
    }))
  }

  const formHandler = (e) => {
    e.preventDefault();
    let { name, surname, sex, bday, phone, country, city, homeCountry, homeTown, occupation, education, description, telegram, instagram, facebook } = e.target
    // console.log(name.value, surname.value, sex.value, bday.value, phone.value, country.value, city.value, homeCountry.value, homeTown.value, profession.value, education.value, about.value, socials.value)
    console.log(user);
    fetch('/profile/edit', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: user._id,
        name: name.value,
        surname: surname.value,
        sex: sex.value,
        bday: bday.value,
        phone: phone.value,
        country: country.value,
        city: city.value,
        homeCountry: homeCountry.value,
        homeTown: homeTown.value,
        occupation: occupation.value,
        education: education.value,
        description: description.value,
        telegram: telegram.value,
        instagram: instagram.value,
        facebook: facebook.value,
        tags: tagList,
        languages: langList,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // console.log(data);
          dispatch({ type: UPDATE_USER, payload: data })
          history.push('/profile')
        }
      })
  }

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <h2>Edit your profile</h2>

          <form onSubmit={formHandler}>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  defaultValue={user.name}
                  required
                />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Surname</label>
                <input type="text" name="surname" autoComplete="off" defaultValue={user.surname} />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>BirthDay</label>
                <input
                  type="date"
                  name="bday"
                  min="1949-12-31"
                  max={Date.now()}
                  defaultValue={user.bday}

                />
              </div>

              <div className="col-6 col-12-xsmall sexDivEdit">
                <div id="sexDiv" className="field sexDivclass">
                  <div className="col-4 col-12-small">
                    <input type="radio" id="demo-priority-low" name="sex" value="Female" defaultChecked={user.sex === 'Female' && user.sex} />
                    <label htmlFor="demo-priority-low">Female</label>
                  </div>
                  <div className="col-4 col-12-small">
                    <input type="radio" id="demo-priority-normal" name="sex" value="Male" defaultChecked={user.sex === 'Male' && user.sex} />
                    <label htmlFor="demo-priority-normal">Male</label>
                  </div>
                  <div className="col-4 col-12-small">
                    <input type="radio" id="demo-priority-high" name="sex" value="Other" defaultChecked={user.sex === 'Other' && user.sex} />
                    <label htmlFor="demo-priority-high">Other</label>
                  </div>
                </div>
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Email</label>
                <input type="email" name="email" autoComplete="off" defaultValue={user.email} readOnly />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Phone number</label>
                <input type="tel" name="phone" autoComplete="off" defaultValue={user.phone} />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Country</label>
                <select className="form-control" name="country" >
                  <option>{user.country}</option>
                  <option>AALAND ISLANDS</option>
                  <option>AFGHANISTAN</option>
                  <option>ALBANIA</option>
                  <option>ALGERIA</option>
                  <option>AMERICAN SAMOA</option>
                  <option>ANDORRA</option>
                  <option>ANGOLA</option>
                  <option>ANGUILLA</option>
                  <option>ANTARCTICA</option>
                  <option>ANTIGUA AND BARBUDA</option>
                  <option>ARGENTINA</option>
                  <option>ARMENIA</option>
                  <option>ARUBA</option>
                  <option>AUSTRALIA</option>
                  <option>AUSTRIA</option>
                  <option>AZERBAIJAN</option>
                  <option>BAHAMAS</option>
                  <option>BAHRAIN</option>
                  <option>BANGLADESH</option>
                  <option>BARBADOS</option>
                  <option>BELARUS</option>
                  <option>BELGIUM</option>
                  <option>BELIZE</option>
                  <option>BENIN</option>
                  <option>BERMUDA</option>
                  <option>BHUTAN</option>
                  <option>BOLIVIA</option>
                  <option>BOSNIA AND HERZEGOWINA</option>
                  <option>BOTSWANA</option>
                  <option>BOUVET ISLAND</option>
                  <option>BRAZIL</option>
                  <option>BRITISH INDIAN OCEAN TERRITORY</option>
                  <option>BRUNEI DARUSSALAM</option>
                  <option>BULGARIA</option>
                  <option>BURKINA FASO</option>
                  <option>BURUNDI</option>
                  <option>CAMBODIA</option>
                  <option>CAMEROON</option>
                  <option>CANADA</option>
                  <option>CAPE VERDE</option>
                  <option>CAYMAN ISLANDS</option>
                  <option>CENTRAL AFRICAN REPUBLIC</option>
                  <option>CHAD</option>
                  <option>CHILE</option>
                  <option>CHINA</option>
                  <option>CHRISTMAS ISLAND</option>
                  <option>COLOMBIA</option>
                  <option>COMOROS</option>
                  <option>COOK ISLANDS</option>
                  <option>COSTA RICA</option>
                  <option>COTE D'IVOIRE</option>
                  <option>CUBA</option>
                  <option>CYPRUS</option>
                  <option>CZECH REPUBLIC</option>
                  <option>DENMARK</option>
                  <option>DJIBOUTI</option>
                  <option>DOMINICA</option>
                  <option>DOMINICAN REPUBLIC</option>
                  <option>ECUADOR</option>
                  <option>EGYPT</option>
                  <option>EL SALVADOR</option>
                  <option>EQUATORIAL GUINEA</option>
                  <option>ERITREA</option>
                  <option>ESTONIA</option>
                  <option>ETHIOPIA</option>
                  <option>FAROE ISLANDS</option>
                  <option>FIJI</option>
                  <option>FINLAND</option>
                  <option>FRANCE</option>
                  <option>FRENCH GUIANA</option>
                  <option>FRENCH POLYNESIA</option>
                  <option>FRENCH SOUTHERN TERRITORIES</option>
                  <option>GABON</option>
                  <option>GAMBIA</option>
                  <option>GEORGIA</option>
                  <option>GERMANY</option>
                  <option>GHANA</option>
                  <option>GIBRALTAR</option>
                  <option>GREECE</option>
                  <option>GREENLAND</option>
                  <option>GRENADA</option>
                  <option>GUADELOUPE</option>
                  <option>GUAM</option>
                  <option>GUATEMALA</option>
                  <option>GUINEA</option>
                  <option>GUINEA-BISSAU</option>
                  <option>GUYANA</option>
                  <option>HAITI</option>
                  <option>HEARD AND MC DONALD ISLANDS</option>
                  <option>HONDURAS</option>
                  <option>HONG KONG</option>
                  <option>HUNGARY</option>
                  <option>ICELAND</option>
                  <option>INDIA</option>
                  <option>INDONESIA</option>
                  <option>IRAQ</option>
                  <option>IRELAND</option>
                  <option>ISRAEL</option>
                  <option>ITALY</option>
                  <option>JAMAICA</option>
                  <option>JAPAN</option>
                  <option>JORDAN</option>
                  <option>KAZAKHSTAN</option>
                  <option>KENYA</option>
                  <option>KIRIBATI</option>
                  <option>KUWAIT</option>
                  <option>KYRGYZSTAN</option>
                  <option>LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                  <option>LATVIA</option>
                  <option>LEBANON</option>
                  <option>LESOTHO</option>
                  <option>LIBERIA</option>
                  <option>LIBYAN ARAB JAMAHIRIYA</option>
                  <option>LIECHTENSTEIN</option>
                  <option>LITHUANIA</option>
                  <option>LUXEMBOURG</option>
                  <option>MACAU</option>
                  <option>MADAGASCAR</option>
                  <option>MALAWI</option>
                  <option>MALAYSIA</option>
                  <option>MALDIVES</option>
                  <option>MALI</option>
                  <option>MALTA</option>
                  <option>MARSHALL ISLANDS</option>
                  <option>MARTINIQUE</option>
                  <option>MAURITANIA</option>
                  <option>MAURITIUS</option>
                  <option>MAYOTTE</option>
                  <option>MEXICO</option>
                  <option>MONACO</option>
                  <option>MONGOLIA</option>
                  <option>MONTSERRAT</option>
                  <option>MOROCCO</option>
                  <option>MOZAMBIQUE</option>
                  <option>MYANMAR</option>
                  <option>NAMIBIA</option>
                  <option>NAURU</option>
                  <option>NEPAL</option>
                  <option>NETHERLANDS</option>
                  <option>NETHERLANDS ANTILLES</option>
                  <option>NEW CALEDONIA</option>
                  <option>NEW ZEALAND</option>
                  <option>NICARAGUA</option>
                  <option>NIGER</option>
                  <option>NIGERIA</option>
                  <option>NIUE</option>
                  <option>NORFOLK ISLAND</option>
                  <option>NORTHERN MARIANA ISLANDS</option>
                  <option>NORWAY</option>
                  <option>OMAN</option>
                  <option>PAKISTAN</option>
                  <option>PALAU</option>
                  <option>PANAMA</option>
                  <option>PAPUA NEW GUINEA</option>
                  <option>PARAGUAY</option>
                  <option>PERU</option>
                  <option>PHILIPPINES</option>
                  <option>PITCAIRN</option>
                  <option>POLAND</option>
                  <option>PORTUGAL</option>
                  <option>PUERTO RICO</option>
                  <option>QATAR</option>
                  <option>REUNION</option>
                  <option>ROMANIA</option>
                  <option>RUSSIAN FEDERATION</option>
                  <option>RWANDA</option>
                  <option>SAINT HELENA</option>
                  <option>SAINT KITTS AND NEVIS</option>
                  <option>SAINT LUCIA</option>
                  <option>SAINT PIERRE AND MIQUELON</option>
                  <option>SAINT VINCENT AND THE GRENADINES</option>
                  <option>SAMOA</option>
                  <option>SAN MARINO</option>
                  <option>SAO TOME AND PRINCIPE</option>
                  <option>SAUDI ARABIA</option>
                  <option>SENEGAL</option>
                  <option>SERBIA AND MONTENEGRO</option>
                  <option>SEYCHELLES</option>
                  <option>SIERRA LEONE</option>
                  <option>SINGAPORE</option>
                  <option>SLOVAKIA</option>
                  <option>SLOVENIA</option>
                  <option>SOLOMON ISLANDS</option>
                  <option>SOMALIA</option>
                  <option>SOUTH AFRICA</option>
                  <option>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                  <option>SPAIN</option>
                  <option>SRI LANKA</option>
                  <option>SUDAN</option>
                  <option>SURINAME</option>
                  <option>SVALBARD AND JAN MAYEN ISLANDS</option>
                  <option>SWAZILAND</option>
                  <option>SWEDEN</option>
                  <option>SWITZERLAND</option>
                  <option>SYRIAN ARAB REPUBLIC</option>
                  <option>TAIWAN</option>
                  <option>TAJIKISTAN</option>
                  <option>THAILAND</option>
                  <option>TIMOR-LESTE</option>
                  <option>TOGO</option>
                  <option>TOKELAU</option>
                  <option>TONGA</option>
                  <option>TRINIDAD AND TOBAGO</option>
                  <option>TUNISIA</option>
                  <option>TURKEY</option>
                  <option>TURKMENISTAN</option>
                  <option>TURKS AND CAICOS ISLANDS</option>
                  <option>TUVALU</option>
                  <option>UGANDA</option>
                  <option>UKRAINE</option>
                  <option>UNITED ARAB EMIRATES</option>
                  <option>UNITED KINGDOM</option>
                  <option>UNITED STATES</option>
                  <option>UNITED STATES MINOR OUTLYING ISLANDS</option>
                  <option>URUGUAY</option>
                  <option>UZBEKISTAN</option>
                  <option>VANUATU</option>
                  <option>VENEZUELA</option>
                  <option>VIET NAM</option>
                  <option>WALLIS AND FUTUNA ISLANDS</option>
                  <option>WESTERN SAHARA</option>
                  <option>YEMEN</option>
                  <option>ZAMBIA</option>
                  <option>ZIMBABWE</option>
                </select>
              </div>
              <div className="col-6 col-12-xsmall">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  autoComplete="off"
                  defaultValue={user.city}

                />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Country you are from</label>
                <select className="form-control" name="homeCountry">
                  <option>{user.homeCountry}</option>
                  <option>AALAND ISLANDS</option>
                  <option>AFGHANISTAN</option>
                  <option>ALBANIA</option>
                  <option>ALGERIA</option>
                  <option>AMERICAN SAMOA</option>
                  <option>ANDORRA</option>
                  <option>ANGOLA</option>
                  <option>ANGUILLA</option>
                  <option>ANTARCTICA</option>
                  <option>ANTIGUA AND BARBUDA</option>
                  <option>ARGENTINA</option>
                  <option>ARMENIA</option>
                  <option>ARUBA</option>
                  <option>AUSTRALIA</option>
                  <option>AUSTRIA</option>
                  <option>AZERBAIJAN</option>
                  <option>BAHAMAS</option>
                  <option>BAHRAIN</option>
                  <option>BANGLADESH</option>
                  <option>BARBADOS</option>
                  <option>BELARUS</option>
                  <option>BELGIUM</option>
                  <option>BELIZE</option>
                  <option>BENIN</option>
                  <option>BERMUDA</option>
                  <option>BHUTAN</option>
                  <option>BOLIVIA</option>
                  <option>BOSNIA AND HERZEGOWINA</option>
                  <option>BOTSWANA</option>
                  <option>BOUVET ISLAND</option>
                  <option>BRAZIL</option>
                  <option>BRITISH INDIAN OCEAN TERRITORY</option>
                  <option>BRUNEI DARUSSALAM</option>
                  <option>BULGARIA</option>
                  <option>BURKINA FASO</option>
                  <option>BURUNDI</option>
                  <option>CAMBODIA</option>
                  <option>CAMEROON</option>
                  <option>CANADA</option>
                  <option>CAPE VERDE</option>
                  <option>CAYMAN ISLANDS</option>
                  <option>CENTRAL AFRICAN REPUBLIC</option>
                  <option>CHAD</option>
                  <option>CHILE</option>
                  <option>CHINA</option>
                  <option>CHRISTMAS ISLAND</option>
                  <option>COLOMBIA</option>
                  <option>COMOROS</option>
                  <option>COOK ISLANDS</option>
                  <option>COSTA RICA</option>
                  <option>COTE D'IVOIRE</option>
                  <option>CUBA</option>
                  <option>CYPRUS</option>
                  <option>CZECH REPUBLIC</option>
                  <option>DENMARK</option>
                  <option>DJIBOUTI</option>
                  <option>DOMINICA</option>
                  <option>DOMINICAN REPUBLIC</option>
                  <option>ECUADOR</option>
                  <option>EGYPT</option>
                  <option>EL SALVADOR</option>
                  <option>EQUATORIAL GUINEA</option>
                  <option>ERITREA</option>
                  <option>ESTONIA</option>
                  <option>ETHIOPIA</option>
                  <option>FAROE ISLANDS</option>
                  <option>FIJI</option>
                  <option>FINLAND</option>
                  <option>FRANCE</option>
                  <option>FRENCH GUIANA</option>
                  <option>FRENCH POLYNESIA</option>
                  <option>FRENCH SOUTHERN TERRITORIES</option>
                  <option>GABON</option>
                  <option>GAMBIA</option>
                  <option>GEORGIA</option>
                  <option>GERMANY</option>
                  <option>GHANA</option>
                  <option>GIBRALTAR</option>
                  <option>GREECE</option>
                  <option>GREENLAND</option>
                  <option>GRENADA</option>
                  <option>GUADELOUPE</option>
                  <option>GUAM</option>
                  <option>GUATEMALA</option>
                  <option>GUINEA</option>
                  <option>GUINEA-BISSAU</option>
                  <option>GUYANA</option>
                  <option>HAITI</option>
                  <option>HEARD AND MC DONALD ISLANDS</option>
                  <option>HONDURAS</option>
                  <option>HONG KONG</option>
                  <option>HUNGARY</option>
                  <option>ICELAND</option>
                  <option>INDIA</option>
                  <option>INDONESIA</option>
                  <option>IRAQ</option>
                  <option>IRELAND</option>
                  <option>ISRAEL</option>
                  <option>ITALY</option>
                  <option>JAMAICA</option>
                  <option>JAPAN</option>
                  <option>JORDAN</option>
                  <option>KAZAKHSTAN</option>
                  <option>KENYA</option>
                  <option>KIRIBATI</option>
                  <option>KUWAIT</option>
                  <option>KYRGYZSTAN</option>
                  <option>LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                  <option>LATVIA</option>
                  <option>LEBANON</option>
                  <option>LESOTHO</option>
                  <option>LIBERIA</option>
                  <option>LIBYAN ARAB JAMAHIRIYA</option>
                  <option>LIECHTENSTEIN</option>
                  <option>LITHUANIA</option>
                  <option>LUXEMBOURG</option>
                  <option>MACAU</option>
                  <option>MADAGASCAR</option>
                  <option>MALAWI</option>
                  <option>MALAYSIA</option>
                  <option>MALDIVES</option>
                  <option>MALI</option>
                  <option>MALTA</option>
                  <option>MARSHALL ISLANDS</option>
                  <option>MARTINIQUE</option>
                  <option>MAURITANIA</option>
                  <option>MAURITIUS</option>
                  <option>MAYOTTE</option>
                  <option>MEXICO</option>
                  <option>MONACO</option>
                  <option>MONGOLIA</option>
                  <option>MONTSERRAT</option>
                  <option>MOROCCO</option>
                  <option>MOZAMBIQUE</option>
                  <option>MYANMAR</option>
                  <option>NAMIBIA</option>
                  <option>NAURU</option>
                  <option>NEPAL</option>
                  <option>NETHERLANDS</option>
                  <option>NETHERLANDS ANTILLES</option>
                  <option>NEW CALEDONIA</option>
                  <option>NEW ZEALAND</option>
                  <option>NICARAGUA</option>
                  <option>NIGER</option>
                  <option>NIGERIA</option>
                  <option>NIUE</option>
                  <option>NORFOLK ISLAND</option>
                  <option>NORTHERN MARIANA ISLANDS</option>
                  <option>NORWAY</option>
                  <option>OMAN</option>
                  <option>PAKISTAN</option>
                  <option>PALAU</option>
                  <option>PANAMA</option>
                  <option>PAPUA NEW GUINEA</option>
                  <option>PARAGUAY</option>
                  <option>PERU</option>
                  <option>PHILIPPINES</option>
                  <option>PITCAIRN</option>
                  <option>POLAND</option>
                  <option>PORTUGAL</option>
                  <option>PUERTO RICO</option>
                  <option>QATAR</option>
                  <option>REUNION</option>
                  <option>ROMANIA</option>
                  <option>RUSSIAN FEDERATION</option>
                  <option>RWANDA</option>
                  <option>SAINT HELENA</option>
                  <option>SAINT KITTS AND NEVIS</option>
                  <option>SAINT LUCIA</option>
                  <option>SAINT PIERRE AND MIQUELON</option>
                  <option>SAINT VINCENT AND THE GRENADINES</option>
                  <option>SAMOA</option>
                  <option>SAN MARINO</option>
                  <option>SAO TOME AND PRINCIPE</option>
                  <option>SAUDI ARABIA</option>
                  <option>SENEGAL</option>
                  <option>SERBIA AND MONTENEGRO</option>
                  <option>SEYCHELLES</option>
                  <option>SIERRA LEONE</option>
                  <option>SINGAPORE</option>
                  <option>SLOVAKIA</option>
                  <option>SLOVENIA</option>
                  <option>SOLOMON ISLANDS</option>
                  <option>SOMALIA</option>
                  <option>SOUTH AFRICA</option>
                  <option>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                  <option>SPAIN</option>
                  <option>SRI LANKA</option>
                  <option>SUDAN</option>
                  <option>SURINAME</option>
                  <option>SVALBARD AND JAN MAYEN ISLANDS</option>
                  <option>SWAZILAND</option>
                  <option>SWEDEN</option>
                  <option>SWITZERLAND</option>
                  <option>SYRIAN ARAB REPUBLIC</option>
                  <option>TAIWAN</option>
                  <option>TAJIKISTAN</option>
                  <option>THAILAND</option>
                  <option>TIMOR-LESTE</option>
                  <option>TOGO</option>
                  <option>TOKELAU</option>
                  <option>TONGA</option>
                  <option>TRINIDAD AND TOBAGO</option>
                  <option>TUNISIA</option>
                  <option>TURKEY</option>
                  <option>TURKMENISTAN</option>
                  <option>TURKS AND CAICOS ISLANDS</option>
                  <option>TUVALU</option>
                  <option>UGANDA</option>
                  <option>UKRAINE</option>
                  <option>UNITED ARAB EMIRATES</option>
                  <option>UNITED KINGDOM</option>
                  <option>UNITED STATES</option>
                  <option>UNITED STATES MINOR OUTLYING ISLANDS</option>
                  <option>URUGUAY</option>
                  <option>UZBEKISTAN</option>
                  <option>VANUATU</option>
                  <option>VENEZUELA</option>
                  <option>VIET NAM</option>
                  <option>WALLIS AND FUTUNA ISLANDS</option>
                  <option>WESTERN SAHARA</option>
                  <option>YEMEN</option>
                  <option>ZAMBIA</option>
                  <option>ZIMBABWE</option>
                </select>
              </div>
              <div className="col-6 col-12-xsmall">
                <label>Hometown</label>
                <input
                  type="text"
                  name="homeTown"
                  autoComplete="off"
                  defaultValue={user.homeTown}

                />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Your occupation</label>
                <input
                  type="text"
                  name="occupation"
                  autoComplete="off"
                  defaultValue={user.profession}
                />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Your education</label>
                <input
                  type="text"
                  name="education"
                  autoComplete="off"
                  defaultValue={user.education}
                />
              </div>

              <div className="col-12">
                <label>Tell something about yourself</label>
                <textarea
                  name="description"
                  placeholder="Put some interesting and important information about yourself"
                  defaultValue={user.about}
                  rows="5"></textarea>
              </div>

              <div className="col-12">
                <label>Your interests or hobbies</label>
              </div>
              <ul>
                {user.tags && user?.tags?.map(el => <UserTag key={uuidv4()} el={el} changeStatusHandler={changeStatusHandler} />)}
              </ul>

              <div className="col-12">
                <label>Languages you speak</label>
              </div>
              <ul>
                {user.languages && user?.languages?.map(el => <UserLang el={el} selectLangHandler={selectLangHandler} />)}

              </ul>
              {/* <div className="col-4 col-12-small">
                <input type="checkbox" id="lang1" name="demo-languages" />
                <label htmlFor="demo-copy">russian</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="lang2" name="demo-languages" />
                <label htmlFor="demo-copy">english</label>
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" id="lang3" name="demo-languages" />
                <label htmlFor="demo-copy">spain</label>
              </div> */}

              <div className="col-12">
                <label>Your socials</label>
              </div>
              <div className="col-4 col-12-small">
                <span>
                  <i className="element-icon fa-telegram"></i>
                </span>
                <input
                  type="text"
                  name="telegram"
                  autoComplete="off"
                  defaultValue={user.telegram ? '@' + user.telegram : '@'}
                />
              </div>
              <div className="col-4 col-12-small">
                <span>
                  <i className="element-icon fa-instagram"></i>
                </span>
                <input
                  type="text"
                  name="instagram"
                  autoComplete="off"
                  defaultValue={user.instagram ? '@' + user.instagram : '@'}
                />
              </div>
              <div className="col-4 col-12-small">
                <span>
                  <i className="element-icon fa-facebook"></i>
                </span>
                <input
                  type="text"
                  name="facebook"
                  autoComplete="off"
                  defaultValue={user.facebook ? user.facebook : ''}
                />
              </div>
            </div>
            <div className="col-12 travel-btn">
              <button className="button large">Save changes</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default UserFormEdit
