import React, { useState } from 'react'
import Login from '../pages/Login'
import HOCModal from './HOCModal'
import DemoAntd from '../components/DemoAntd'
import ContainerModal from './ContainerModal';
import { openModalAction } from '../redux/reducers/modalReducer';
import useRedux from '../CustomHook/useRedux';

const LoginModalComponent = HOCModal('Login', Login);
const AntDModalComponent = HOCModal(DemoAntd);
// HOC: là component nhận vào tham số là component khác để tạo ra logic của component đó với nội dung bên trong là component được truyền vào. HOCModal, HOCPaging ... 


const DemoHOC = () => {
    const [component, setComponent] = useState(<div>Default</div>)
    const{dispatch,state} = useRedux();
  return (
    <div className='container'>
        {/* <h3 draggable onDragStart={(props) => {
            const handleDragStart = (event) => {
                event.dataTransfer.setData('text/plain', props.children);
            }
        }}>DemoHOC(Higher Order Component)</h3> */}
        <h3>Demo HOC (Higher Order Component)</h3>

       
        <button type="button" className="btn btn-primary btn-lg mx-3" data-toggle="modal" data-target="#modelId" onClick={()=>{
            setComponent(<Login />)
        }}>
          Login
        </button>
        
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={()=>{
            setComponent(<DemoAntd />)
        }}>
        AntDesign
        </button>
        {/* <AntDModalComponent /> */}
        <hr />
        <h3>Container component</h3>
        <ContainerModal funcComponent={DemoAntd} jsxComponent={component}/>
       <hr />
       <h3>Modal redux</h3>
         {/* Button trigger modal */}
  <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-redux" onClick={()=>{
    const payload = {
      modalTitle: 'Login',
      modalContent: <Login />
    }
    const action = openModalAction(payload);
    dispatch(action);
  }}>
    Open modal redux
  </button>
        </div>
  )
}

export default DemoHOC