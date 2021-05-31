import React, {useState} from 'react';

import Context from "./context"

const Provider = props =>{

    const [teacherDetails, setTeacherDetails] = useState([{
        email:"harish.alhate@gmail.com",
        password:"Harish123"
    },
    {
        email:"abc@123.com",
        password:"123"
    }])

    const [studentDetails, setStudentDetails] = useState([
        {
        name:"Harish Alhate",
        address:"Abc street"
    },
    {
        name:"ABCD",
        address:"EFG street"
    },
    {
        name:"ABCD",
        address:"EFG street"
    },
    {
        name:"ABCD",
        address:"EFG street"
    }])
    return(
        <Context.Provider
        value={{
            data:teacherDetails,
            data1:studentDetails
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;