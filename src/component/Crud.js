import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
    const [Id, SetId] = useState();
    const [Name, SetName] = useState("");
    const [Phone_No, SetPhone_No] = useState("");
    const [Data, SetData] = useState([]);

    const Add = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const data = {
            Name: Name,
            Phone_No: Phone_No
        };

        try {
            const response = await axios.post('http://localhost:5066/api/Patient', data);
            console.log(response.data);
            SetName('');
            SetPhone_No('');
        } catch (error) {
            console.log(error);
        }
    };

    const HandleDelete = async (id) => {
        alert(`Deleting patient with ID: ${id}`);
    };

    const HandleEdit = async (id, name, phone_No) => {
        alert(`Editing patient with ID: ${id}, Name: ${name}, Phone Number: ${phone_No}`);
    };

    useEffect(() => {
        // Fetch data from the server and update the Data state
    }, []);

    return (
        <>
            <div>
                <form onSubmit={Add}>
                    <h3>Add New</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td><input value={Name} onChange={(e) => SetName(e.target.value)} /></td>
                                <th>Phone Number</th>
                                <td><input value={Phone_No} onChange={(e) => SetPhone_No(e.target.value)} /></td>
                                <td colSpan="2"><button type="submit">Add</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        {Data && Data.length > 0 && Data.map(patient => (
                            <tr key={patient.Id}>
                                <td>{patient.Id}</td>
                                <td>{patient.Name}</td>
                                <td>{patient.Phone_No}</td>
                                <td>
                                    <button onClick={() => HandleDelete(patient.Id)}>Delete</button>
                                    <button onClick={() => HandleEdit(patient.Id, patient.Name, patient.Phone_No)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Crud;
