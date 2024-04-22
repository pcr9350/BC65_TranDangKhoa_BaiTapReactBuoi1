import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'
import Databinding from './databinding/databinding'
import HandleEvent from './handleEvent/HandleEvent'
import DemoState from './state/DemoState'
import StyleWithComponent from './StyleWithComponent/StyleWithComponent'
import './assets/scss/index.scss'
import RenderWithMap from './RenderWithMap/RenderWithMap'
import DemoProps from './Props/DemoProps'
import ExWithMap_Props from './Props/ExWithMap_Props'
import DemoChildrenProps from './Props/DemoChildrenProps'
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet'
import ExerciseCarStore from './Props/ExcerciseCarStore/ExerciseCarStore'
import ExCart from './Props/ExCart/ExCart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <HomePage /> */}
    {/* <Databinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoState /> */}
    {/* <StyleWithComponent />
    <div className='container'>
    <p className='p-primary'>abc</p>
    </div> */}
    {/* <RenderWithMap /> */}
    {/* <DemoProps /> */}
    {/* <ExWithMap_Props /> */}
    {/* <DemoChildrenProps>
      <div>abc</div>
      <ExWithMap_Props />
    </DemoChildrenProps> */}
    {/* <BaiTapXemChiTiet /> */}
    {/* <ExerciseCarStore /> */}
    <ExCart />
  </div>
)
