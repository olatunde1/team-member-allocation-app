import React,{ useState } from 'react';
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';

const Employees = () => {

    const [selectedTeam, setTeam] = useState('TeamB');

    const [ employees,setEmployees ] = useState([{
        id: 1,
        fullName:"Bob Jones",
        designation:"Javascript Developer",
        gender:"male",
        teamName:"TeamA"
        },
        {
        id: 2,
        fullName:"Boba Joner",
        designation:"Python Developer",
        gender:"female",
        teamName:"TeamA"
        },
        {
        id: 3,
        fullName:"Beb kones",
        designation:"Graphic Designer",
        gender:"male",
        teamName:"TeamA"
        },
        {
        id: 4,
        fullName:"Bob Jones",
        designation:"C++ Developer",
        gender:"female",
        teamName:"TeamB"
        },
        {
        id: 5,
        fullName:"Terry Park",
        designation:"Javascript Developer",
        gender:"female",
        teamName:"TeamB"
        },
        {
        id: 6,
        fullName:"Bob Jones",
        designation:"Vanilla Javascript Developer",
        gender:"male",
        teamName:"TeamB"
        },
        {
        id: 7,
        fullName:"Bob Jones",
        designation:"React Developer",
        gender:"female",
        teamName:"TeamC"
        },
        {
        id: 8,
        fullName:"Bob Jones",
        designation:"Javascript Developer",
        gender:"male",
        teamName:"TeamC"
        },
        {
        id: 9,
        fullName:"Bob Jones",
        designation:"Angular Developer",
        gender:"female",
        teamName:"TeamC"
        },
        {
        id: 10,
        fullName:"Bob Jones",
        designation:"Vuejs Developer",
        gender:"male",
        teamName:"TeamD"
        },
        {
        id: 11,
        fullName:"Bob Jones",
        designation:"Node Developer",
        gender:"female",
        teamName:"TeamD"
        },
        {
        id: 12,
        fullName:"Bob Jones",
        designation:"Java Developer",
        gender:"male",
        teamName:"TeamD"
        }])

    function HandleTeamSelectionChange(event){
        console.log(event.target.value)
        setTeam(event.target.value);
    }    

  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-6 '>
                
                <select className='form-select form-select-lg mb-3 mt-3' value={selectedTeam} onChange={HandleTeamSelectionChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>

            </div>
            <div className='col-8'>
                <div className='card-collection'>
                    {
                        employees.map((employee) =>(
                            <div id={employee.id} className="card m-3" style={{cursor:"pointer"}}>
                               {(employee.gender === 'male')?<img src={maleProfile} className='card-img-top' />
                                                            :<img src={femaleProfile} className='card-img-top'/> }
                                <div className='card-body'>
                                    <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                                    <p className='card-text'><b>Designation: </b>{employee.designation}</p>
                                    <p className='card-gender'><b>Gender: </b>{employee.gender}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees