import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const appointMents = []

class Appointments extends Component {
  state = {
    appointMentsList: appointMents,
    specelist: '',
    selectedDate: '',
    started: false,
  }

  onEnterTitle = event => {
    this.setState({specelist: event.target.value})
  }

  onSelectDate = event => {
    this.setState({selectedDate: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {specelist, selectedDate} = this.state
    const newAppointMent = {
      id: uuidv4(),

      specelist,

      selectedDate,
      isBooked: false,
    }
    this.setState(prevState => ({
      appointMentsList: [...prevState.appointMentsList, newAppointMent],
      specelist: '',
      selectedDate: '',
    }))
  }

  onClickStarButton = id => {
    //    const {appointMentsList} = this.state
    this.setState(prevState => ({
      appointMentsList: prevState.appointMentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isBooked: !eachAppointment.isBooked}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarted = () => {
    const {started} = this.state
    this.setState(prevState => ({started: !prevState.started}))
    console.log(started)
  }

  render() {
    const {specelist, selectedDate, appointMentsList, started} = this.state

    const filterdAppointments = started
      ? appointMentsList.filter(
          eachAppointment => eachAppointment.isBooked === true,
        )
      : appointMentsList

    const isfilterd = started ? 'filter' : ''

    return (
      <div className="app-container">
        <div className="appointment-container">
          <div className="top-container">
            <div className="top-left-container">
              <h1 className="heading">Add Appointment</h1>
              <form
                onSubmit={this.onAddAppointment}
                className="input-form-container"
              >
                <div className="label-container">
                  <label htmlFor="name" className="title">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Title"
                    className="title-input"
                    onChange={this.onEnterTitle}
                    value={specelist}
                  />
                </div>
                <div className="label-container">
                  <label htmlFor="date" className="title">
                    DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="title-input"
                    onChange={this.onSelectDate}
                    value={selectedDate}
                  />
                </div>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr className="h-r" />
          <div className="appointments-Starred-container">
            <h1 className="bottom-heading">Appointments</h1>
            <button
              className={`btn-starred ${isfilterd ? 'filtered' : ''}`}
              type="button"
              onClick={this.onClickStarted}
            >
              Starred
            </button>
          </div>

          <ul className="appointsments-list-container">
            {filterdAppointments.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                key={eachAppointment.id}
                onClickStarButton={this.onClickStarButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

/*  

   <div className="app-container">
        <div className="appointment-container">
          <div className="input-container">
            <div>
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.onAddAppointment}>
                <div>
                  <p className="title">TITLE</p>
                  <input
                    type="text"
                    placeholder="Title"
                    className="title-input"
                    onChange={this.onEnterTitle}
                    value={specelist}
                  />
                </div>
                <div>
                  <p className="title">Date</p>
                  <input
                    type="date"
                    onChange={this.onSelectDate}
                    value={selectedDate}
                  />
                </div>
                <button className="add-button" type="submit">
                  add
                </button>
              </form>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          
        </div>
      </div>



*/
