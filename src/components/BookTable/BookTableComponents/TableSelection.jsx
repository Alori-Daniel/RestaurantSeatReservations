import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
import crisp from '../../../assets/crisp-green.png'

const TableSelection = () => {
    const [tableSelected, setTableSelected]= useState(false)
    const [seatsPicked, setSeatsPicked] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false
      });
      const [isModalOpen, setModalOpen] = useState(false);

      const toggleSeat = (seatNumber) => {
        setSeatsPicked(prev => ({
          ...prev,
          [seatNumber]: !prev[seatNumber]
        }));
      };
      const isAnySeatPicked = Object.values(seatsPicked).some(value => value === true);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        date: '',
        time: '',
        noOfGuest: '',
        special: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formData).some(value => value === "")){
            alert("Fill all inputs")
        }else{
            setModalOpen(true); 
        }
        
      };
    
      const handleCloseModal = () => {
        setFormData({
            name: '',
            email: '',
            number: '',
            date: '',
            time: '',
            noOfGuest: '',
            special: ''
          });
        setModalOpen(false); 
      };
    
      const renderModalContent = () => {
        return (
          <div className='modal-info'>
            
            <h2>Reservation Summary</h2>
            <p className='p-modal'>check the summary to review your reservation details</p>
            <div className='customer-details'>
                    <div className='logo'>
                        <img loading="lazy" src={crisp} alt="" className='image-logo' />
                        <h3 >Crisp <br /> & Crave</h3>
                     </div>
            <div className='detail'>
                 <div> 
                    <p>Name </p>
                    <p>{formData.name}</p>
                </div>
            <hr />
            </div>
            <div className='detail' >
                <div> 
                    <p>Email </p>
                    <p>{formData.email}</p>
                </div>
            <hr />
            </div>  
            <div className='detail'>
                <div>
                    <p>Phone Number</p>
                    <p>{formData.number}</p>
                </div>
            <hr />
            </div>
            <div className='detail'>
                <div>
                    <p>Date</p>
                    <p>{formData.date}</p>
                </div>
            <hr />
            </div>
            <div className='detail'>
                <div>
                    <p>Time</p>
                    <p>{formData.time}</p>
                </div>
            <hr />
            </div>
            <div className='detail'>
                <div>
                    <p>Number of Guests</p>
                    <p>{formData.noOfGuest}</p>
                </div>
            <hr />
            </div>
            <div className='detail'>
                <div>
                    <p>Special Requests</p>
                    <p>{formData.special}</p>
                </div>
            <hr />
            </div>
            </div>
          </div>
        );
      };
  return (
    <>
        {!tableSelected ? (
              <div className='tableselection'>
              <div className='tableselection-container'>
                  <div className='tableselection-heading'>
                      <h2>PICK A TABLE</h2>
                      <p>Pick a table from the available tables</p>
                  </div>
              <div className='table'>
                  <div className='bottom-bar'></div>
                  <div className='right-bar'> <p>Kitchen Area</p></div>
                  <div className='table-container'>
                      <div className='box-container'>
                          <div className='table-box' onClick={()=>toggleSeat(1)}>
                              <div className= {seatsPicked[1] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>1</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(2)}>
                              <div className= {seatsPicked[2] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>2</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(3)}>
                              <div className= {seatsPicked[3] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat medium-seat'>3</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(4)}>
                              <div className= {seatsPicked[4] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat large-seat'>4</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(5)}>
                              <div className= {seatsPicked[5] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>5</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                      </div>
                      <div className='box-container'>
                          <div className='table-box' onClick={()=>toggleSeat(6)}>
                          <div className= {seatsPicked[6] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>6</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(7)}>
                              <div className= {seatsPicked[7] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat medium-seat'>7</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(8)}>
                              <div className= {seatsPicked[8] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>8</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(9)}>
                              <div className= {seatsPicked[9] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat medium-seat'>9</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(10)}>
                              <div className= {seatsPicked[10] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>10</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                      </div>
                      <div className='box-container'>
                          <div className='table-box' onClick={()=>toggleSeat(11)}>
                          <div className= {seatsPicked[11] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>11</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(12)}>
                              <div className= {seatsPicked[12] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat large-seat'>12</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(13)}>
                              <div className= {seatsPicked[13] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat medium-seat'>13</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(14)}>
                              <div className= {seatsPicked[14] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>14</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(15)}>
                              <div className= {seatsPicked[15] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>15</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                      </div>
                      <div className='box-container'>
                          <div className='table-box' onClick={()=>toggleSeat(16)}>
                          <div className= {seatsPicked[16] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>16</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(17)}>
                              <div className= {seatsPicked[17] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat'>17</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(18)}>
                              <div className= {seatsPicked[18] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat large-seat'>18</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(19)}>
                              <div className= {seatsPicked[19] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat medium-seat'>19</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                          <div className='table-box' onClick={()=>toggleSeat(20)}>
                              <div className= {seatsPicked[20] ? 'boxes box-selected' : 'boxes'}>
                              <div className='bar'></div>
                              <div className='seat large-seat'>20</div>
                              <div className='bar'></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {isAnySeatPicked && <button className='tablebook-btn btn-shine' onClick={()=>{setTableSelected(true), window.scroll(0,0)}}>BOOK A TABLE</button>}
          </div>
            
          </div>
        ): (
            <div className="tableselection">
                <div className='tableselection-heading'>
                        <h2>INFORMATION DETAILS</h2>
                        <p>Fill in the necessary information below and proceed to reserve Seat.</p>
                    </div>
                <div className="fillinformation-container">
                    
                <form className='table-information' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name
                        <input type="text" name='name' placeholder='Brenda James' value={formData.name} onChange={handleChange} />
                    </label>
                    <label htmlFor="email">Email
                        <input type="email" name='email' placeholder='brendajames@gmail.com' value={formData.email} onChange={handleChange} />
                    </label>
                    <label htmlFor="number">Phone Number
                        <input type="text" name='number' placeholder='09087652633' value={formData.number} onChange={handleChange} />
                    </label>
                    <div className='date-time'>
                        <label htmlFor="date">Date to Come
                        <input type="date" name='date' value={formData.date} onChange={handleChange} />
                        </label>
                        <label htmlFor="time">Time to Come
                        <input type="time" name='time' value={formData.time} onChange={handleChange} />
                        </label>
                    </div>
                    <label htmlFor="noOfGuest">No of Guest
                        <input type="number" name='noOfGuest' placeholder='How many will attend' value={formData.noOfGuest} onChange={handleChange} />
                    </label>
                    <label htmlFor="special">Special Requests
                        <textarea name='special' value={formData.special} onChange={handleChange} />
                    </label>
                        <button className='reserve-btn btn-shine'>Reserve Now</button>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={renderModalContent()} />

                    </form>
                </div>
            </div>
        )}
    </>
  )
}

export default TableSelection
