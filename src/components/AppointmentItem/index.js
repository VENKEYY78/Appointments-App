import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, onClickStarButton} = props
  const {specelist, selectedDate, isBooked, id} = eachAppointment

  const isStarted = isBooked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClikStar = () => {
    onClickStarButton(id)
  }

  return (
    <li className="list-container">
      <div className="name-container">
        <h1 className="name-heading">{specelist}</h1>
        <button className="stat-button" type="button" onClick={onClikStar}>
          <img src={isStarted} className="star" alt="star" data-testid="star" />
        </button>
      </div>
      <div>
        <p className="date-format">
          Date: {format(new Date(selectedDate), 'dd MMMM yyyy, EEEE')}
        </p>
      </div>
    </li>
  )
}

export default AppointmentItem
