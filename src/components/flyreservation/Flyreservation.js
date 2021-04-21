import React, { useState, useEffect } from 'react';
import './Flyreservation.css';
import axios from 'axios';
import Footer from '../footer/Footer';
import decode from 'jwt-decode';
import Select from "react-select";
import DisplayFlight from './DisplayFlight';

const Flyreservation = () => {
    const [posts, setPosts] = useState([]);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [no, setNumber] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/flight').then((response) => {
          setPosts(response.data);
          console.log(response);
        });
    }, []);

    const count = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' }
    ]

    // const handleRemoveTask = async (id) => {
    //     setPosts((prevState) => prevState.filter((t) => t.id !== id));
    
    //     let token = localStorage.getItem('token');
    //     let config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'x-auth-token': token,
    //       },
    //     };
    
    //     try {
    //       const response = await axios.delete(
    //         `http://localhost:5000/api/flight/${id}`    
    //         ,config
    //       );
    //      localStorage.setItem('token', response.data.token);
    //      console.log(response);
    //     } 
    //     catch (error) {
    //         console.log("server error");
    //       }
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let token = localStorage.getItem('token');
        let config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        };
    
        let data = {
          from: from,
          to: to,
          no: no,
          dateStart: dateStart,
          dateEnd: dateEnd,
        };
        
        try {
          const response = await axios.post(
            'http://localhost:5000/api/reserve',
            data,
            config
          );
         
          localStorage.setItem('token', response.data.token);
          console.log(response);
          let decodeduser = decode(response.data.token);
          console.log(decodeduser);
    
        } 
        catch (error) {
          console.log("server error", error);
        }
    }

    let options = posts.map(function (city) {
        return city.from;
    })

    let counts = count.map(function (num) {
        return num.value;
    })

    return (
        
        <html>
        <body>
          <div className="back-fly">
             <div className=" input-unit ">
                 <div className="input-content">
                     <form onSubmit={(e) => handleSubmit(e)}>
                         <div className="d-flex justify-content-center row-hl">
                             <div>
                                <input type="submit" value="submit" className="input-submit button1"/>
                             </div>
                             <div>
                             <select className="inputselect">
                                        {counts.map(option => (
                                        <option key={option} value={option*60}  onChange={(e) => setNumber(e.target.value)}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                             </div>&nbsp;&nbsp;

                             <div>
                                <select className="inputselect">
                                        {options.map(option => (
                                        <option key={option} value={option*60}  onChange={(e) => setFrom(e.target.value)}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>&nbsp;&nbsp;
                                    <div >
                                        <select className="inputselect">
                                            {options.map(option => (
                                                <option key={option} value={option*60}  onChange={(e) => setTo(e.target.value)}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div> 
                            <div>
                                 <input type="date" className="input-text-field"  onChange={(e) => setDateStart(e.target.value)}/>
                             </div>
                             <div >
                                 <input type="date" className="input-text-field"  onChange={(e) => setDateEnd(e.target.value)}/>
                             </div> 

                         </div>
                     </form>
                 </div>

             </div>
         </div>
        </body>
        <Footer/>

        </html>
    );
};

export default Flyreservation;