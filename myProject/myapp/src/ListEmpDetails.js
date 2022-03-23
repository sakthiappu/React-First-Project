function ListEmpDetails(props){
    const employees = props.employees || [];
   // if a is false (props.emp) then go to b (default)
 //  const employeesEdit = props.onEmployeeEdit || [];

    return(
        <div className="empListFull">
            <h1 className="empHeader">DISPLAY INFO</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Action</th>
                    </tr>     
                </thead>
                <tbody>
                {
                    employees.map((emp, i) =>
                            
                    <tr key={"emp" + i.toString()} className="">
                        <td scope="row">{i+1}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.pno}</td>
                        <td>{emp.email}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.designation}</td>
                        <td>
                            <button onClick={event => props.onEmployeeEdit(emp,i)}>Edit</button>
                            <button onClick={event => props.onEmployeeDelete(emp)}>Delete</button>
                        </td>
                    </tr>
                
                            
                    )
                }
                </tbody>
            </table>
            
            
        </div>
    );
}

export default ListEmpDetails;