import { useState, useEffect} from "react";

function EmpDetails(props){
  
    const employeesEdit = props.editobj || [];//gets the edit value
const inde=props.indexObj || [];

  
    const [name,userNameSet] =useState("");
    const [pno,setpno] =useState("");
    const [vpno,setvpno] =useState("");
    const [email,updateEmail] =useState("");
    const [address,updateAddress] =useState("");
    const [designation,updateDesig] =useState("");
    const [gender,updateGender] =useState("Male");
    const [empList, updateEmpList] = useState([]);


//for display the edit value 
    useEffect(()=>{
        userNameSet(employeesEdit.name);
    },[employeesEdit.name]
    );
    useEffect(()=>{
        setpno(employeesEdit.pno);
    },[employeesEdit.pno]
    );
    useEffect(()=>{
        updateEmail(employeesEdit.email);
    },[employeesEdit.email]);
    useEffect(()=>{
        updateAddress(employeesEdit.address);
    },[employeesEdit.address]);
    useEffect(()=>{
        updateDesig(employeesEdit.designation);
    },[employeesEdit.designation]);
    useEffect(()=>{
        updateGender(employeesEdit.gender);
    },[employeesEdit.gender]);
    
    
    function uservalue(event){
        let phone=event.target.value;
        if(!Number(phone))
        {
            let error=<strong>Field is Mandatory</strong>;
            setvpno(error);
        }        
            setpno(phone);       
                
    }
    function userName(event){
         userNameSet(event.target.value);        
    }
    function genderMale(event){
        if(event.target.checked){
            updateGender("Male");
        }
    }
    function genderFemale(event){
        if(event.target.checked){
            updateGender("Female");
        }
    }
    function genderOthers(event){
        if(event.target.checked){
            updateGender("Others");
        }
    }

    function addEmployee(event) {
        
        if (!name) {
            alert("please enter name");
        }
       
        var updatedEmpListPush =JSON.parse(JSON.stringify(empList));
        
        updatedEmpListPush.push({
            name: name,
            pno:pno,
            email: email,
            address: address,
            designation:designation,
            gender:gender
            
        });
        updateEmpList(updatedEmpListPush);
        event.preventDefault();
        props.onEmployeeListChange(updatedEmpListPush);
      

        
    }

    function updateEmployee(event){
        var updatedEmpListPush =JSON.parse(JSON.stringify(empList));
        updatedEmpListPush.splice(props.indexObj,1,{
            name: name,
            pno:pno,
            email: email,
            address: address,
            designation:designation,
            gender:gender
            
        });
        updateEmpList(updatedEmpListPush);
        console.log("updated state", updatedEmpListPush);
        event.preventDefault();
        props.onEmployeeListChange(updatedEmpListPush);
    }

    
    return(
        <div className="empFull">
            <h1 className="empHeader">REGISTRATION FORM</h1>
            <form className="empForm was-validated">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required onChange={userName} value={ name } aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={address}
                    onChange={event => updateAddress(event.target.value)} 
                    ></textarea>
                </div>
                
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control"  id="exampleInputEmail1" required onChange={uservalue} value={pno} aria-describedby="emailHelp"/>
                    {vpno}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={event => updateEmail(event.target.value)} value={email} required aria-describedby="emailHelp"/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Designation</label>
                    <select className="form-select"  value={designation}
                    onChange={event => updateDesig(event.target.value)} 
                    >
                        <option>-----</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="Male" checked={gender==='Male'} onChange={genderMale}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" checked={gender==='Female'} onChange={genderFemale}/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="others" name="gender" value="Others" checked={gender==='Others'} onChange={genderOthers}/>
                        <label htmlFor="others">Others</label>
                    </div>
                    
                </div>            
                <button type="submit" className="btn btn-primary" onClick={addEmployee}>Submit</button>&emsp;
                <button type="submit" className="btn btn-primary" onClick={updateEmployee}>Update</button>
            </form>
        </div>
    );
}

export default EmpDetails;