import React ,{useState} from 'react'
import './Application.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'

const Application =() => {
    const history = useHistory()

    const [ application, setApplication] = useState({
        
        proposal : "",
        intermediaryname: "",
        intermediarycode: "",
        branchcode: "",
        rmcode: "",
        sector: "",
        fullname: "",
        contact: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
        email: "",
        pan: "",
        person: "",
        date: "",
        place: "",
        policyholder: ""
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setApplication({
            ...application,
            [name]: value
        })
    }

    const submit_application = () => {
        const {proposal,intermediaryname,intermediarycode,branchcode,rmcode,sector,fullname,contact,address,state,city,pincode,email,pan,person,date,place,policyholder  } = application
        axios.post("http://localhost:9002/submit_application", application)
            .then( res => {
                console.log(res)
                alert(res.data.message)
                history.push("/Application")
            })
        }

    return (
        <div className="application_form">
            <div className="application">
            {console.log("Application", application)}
                <h1>Premium Application For Group Health Insurance</h1>
            </div>
            <div className="application1">
                <h1>Proposal Form - "Group Care"</h1>
                <p>proposal No : <input type="text" name="proposal"value={application.proposal} onChange={ handleChange } ></input></p>
            </div>
            <div className="application3">
                <h2>For Office Use only</h2>
            </div>
            <div className="application4">
                <h2>Intermediary Details</h2>

                <label>Intermediary Name: </label>
              <input name="intermediaryname"type="text" value={application.intermediaryname} onChange={ handleChange }/>
              <label>Intermediary Code: </label>
              <input type="text"name="intermediarycode" value={application.intermediarycode} onChange={ handleChange }/>
              <label>Intermediary Branch Code: </label>
              <input type="text"name="branchcode" value={application.branchcode} onChange={ handleChange }/>
              <label>Intermediary RM Code: </label>
              <input type="text"name="rmcode" value={application.rmcode} onChange={ handleChange }/>
              <label>Bussiness Sector: </label>
              <input type="text"name="sector" value={application.sector} onChange={ handleChange }/>
              
            </div>
            <div className="application5">
                <h2>Proposer Details</h2>
            </div>
            <div className="application6">

            <label>Full Name of Proposer: </label>
              <input type="text"name="fullname" value={application.fullname} onChange={ handleChange }/>
              <label>Contact Details: </label>
              <input type="text"name="contact" value={application.contact} onChange={ handleChange }/>
              <label>Address For Communication: </label>
              <input type="text"name="address" value={application.address} onChange={ handleChange }/>
              <label>State: </label>
              <input type="text"name="state" value={application.state} onChange={ handleChange }/>
              <label>City: </label>
              <input type="text"name="city" value={application.city} onChange={ handleChange }/>
              <label>Pincode: </label>
              <input type="text"name="pincode" value={application.pincode} onChange={ handleChange }/>
              <label>Email Id: </label>
              <input type="email"name="email" value={application.email} onChange={ handleChange }/>
              <label>PAN/Service Tax Number: </label>
              <input type="text"name="pan" value={application.pan} onChange={ handleChange }/>
            </div>
            <div className="application7">
                <h2>Details of persons to be Insured</h2>
            </div>
            <div>
            <label>No.of Persons to be Insured: </label>
              <input type="text"name="person" value={application.person} onChange={ handleChange }/>
            </div>
            <div className="application8">
                <h2>Declaration</h2>
            </div>
            <div>
                <ol>
                    <li>
                    The insurance cover provided under this Policy to the Insured Person up to the Sum Insured
and is and shall be subject to (a) the terms and conditions of this Policy and (b) the receipt of
premium, and (c) the information disclosed to Us (including by way of the proposal form) by
You or on Your behalf and on behalf of all persons to be insured.
                    </li>
                    <li>
                    Please inform us immediately of any change in the address, Primary Insured, state of health, or of any other
changes affecting You and/or any Insured Person.
                    </li>
                </ol>
                <label>DATE: </label>
              <input type="date"name="date" value={application.date} onChange={ handleChange }/>
              <label>Place: </label>
              <input type="text"name="place" value={application.place} onChange={ handleChange }/>
              <label>Policy Holder Name: </label>
              <input type="text"name="policyholder" value={application.policyholder}onChange={ handleChange }/>
            </div>
            <div className="button" onClick={submit_application}>Submit</div>
        </div>
    )
}

export default Application
