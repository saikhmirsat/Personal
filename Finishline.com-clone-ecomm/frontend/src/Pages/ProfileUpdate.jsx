import React from 'react'
import { useEffect } from 'react'
import { json } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './ProfileUpdate.css'


export default function ProfileUpdate() {
    const [avatar, setAvatar] = useState("")
    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("male")


    const [userdata, setUserdata] = useState({})
    // console.log(userdata)
    const user = JSON.parse(localStorage.getItem("user"))
    const userid = user.id
    const GetData = () => {
        axios.get(`https://gray-dead-springbok.cyclic.app/users/${userid}`)
            .then((res) => setUserdata(res.data.user))
    }
    useEffect(() => {
        GetData()
    }, [])

    const updateProfile = () => {
        const obj = {
            avatar: avatar || userdata.avatar,
            firstname: firstname || userdata.firstname,
            lastname: lastname || userdata.lastname,
            dob: dob || userdata.dob,
            email: email || userdata.email,
            gender: gender || userdata.gender
        }
        console.log(obj)
        try {
            fetch(`https://gray-dead-springbok.cyclic.app/users/update/${userid}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then(res => res.json())
                .then(res => {
                    alert(res.msg)
                    GetData()
                    console.log(res)
                })



        } catch (err) {
            console.log(err)
            alert("Something went wrong")
        }
    }

    // http://localhost:4000/users/63fef826c74f8bcf0b39808c

    return (
        <div className='profile-update-main-con'>
            <div className='profile-update-image-div' >
                <img src={userdata.avatar} alt="" />
            </div>
            <div>
                <label>Avatar</label> <input type="text" placeholder="image url" onChange={(e) => setAvatar(e.target.value)} />
                <label>{userdata.firstname} </label> <input type="text" placeholder={userdata.firstname} onChange={(e) => setFname(e.target.value)} />
                <label>{userdata.lastname}</label><input type="text" placeholder={userdata.lastname} onChange={(e) => setLname(e.target.value)}></input>
                <label>{userdata.dob}</label><input type="text" placeholder={userdata.dob} onChange={(e) => setDob(e.target.value)}></input>
                <label>{userdata.email}</label><input type="text" placeholder={userdata.email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>{userdata.gender}</label><select name="" id="" onChange={(e) => setGender(e.target.value)}>
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Other</option>
                </select>
                <button onClick={updateProfile}>Update</button>
                {/* <label>{userdata}</label><input type="text"></input> */}
            </div>
        </div>
    )
}
