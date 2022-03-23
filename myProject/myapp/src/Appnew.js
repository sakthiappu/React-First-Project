import './App.css';
import EmpDetails from './EmpDetails';
import ListEmpDetails from './ListEmpDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';

function Appnew() {
//it is used to get value from the form and give to grid
  const [empObjList, setEmpObjList] = useState([]);

  //it is used to get value from the form and give to grid,it not an array its an obj ,it donot have multiple datas ,
  //have one form data with multiple values
  const [editEmpObjList, setEditObjList] = useState({});
  const [editEmpObjIndex, setEditObjIndex] = useState();

  const [deleteEmpObjList, setDeleteObjList] = useState("");
  

  function updateEmpList(newList){
    console.log("***",newList);
    setEmpObjList(newList);
  }

  function onEmpEdit(editObj,index){
   // console.log("***edit details",editObj);
   // console.log("***edit details",index);
    setEditObjList(editObj);
    setEditObjIndex(index);
  }

  function deleteEmpList(indexval){
    setDeleteObjList(indexval);
    var index = empObjList.indexOf(indexval); 
    /*The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. */
    empObjList.splice(index, 1);
  }
  
  
  return (
      <div className="container">
        <div className="row">
            <div className='col-md-6 col-sm-12'>
                <EmpDetails onEmployeeListChange={updateEmpList}  editobj={editEmpObjList} indexObj={editEmpObjIndex}/>
                {/* onEmployeeListChange is a props which is send from a child(empdetails) to parent(appnew.js) 
                initially onEmployeeListChange  has a function with empty value is send to child
                on child onEmployeeListChange with value is get back,what do u meant by onEmployeeListChange =>is a fn ,
                so it call that fn with the value that is get from  a child
                */}
            </div>
            <div className='col-md-6 col-sm-12 listdetails'>
                <ListEmpDetails employees={empObjList} onEmployeeEdit={onEmpEdit} onEmployeeDelete={deleteEmpList}/>
            </div>
           
        </div>
      </div>

    
  );
}

export default Appnew;
