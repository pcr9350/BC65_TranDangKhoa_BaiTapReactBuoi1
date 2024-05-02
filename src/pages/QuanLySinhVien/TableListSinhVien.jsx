import React from 'react'
import { useSelector } from 'react-redux'

const TableListSinhVien = () => {
    const {arrSinhVien} = useSelector(state => state.sinhVienReducer);
  return (
    <div className='container'>
        <h3>Danh sách Sinh Viên</h3>
        <table className='table'>
            <thead>
                <tr>
                <th>
                    Mã Sinh Viên
                </th>
                <th>
                    Tên Sinh Viên
                </th>
                <th>
                    Email
                </th>
                <th>
                    Số điện thoại
                </th>
                </tr>
            </thead>
            <tbody>
                {arrSinhVien.map((sv, index)=>{
                return <tr key={index}>
                    <td>
                        {sv.maSinhVien}
                    </td>
                    <td>{sv.tenSinhVien}</td>
                    <td>{sv.email}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>
                        <button className='btn btn-danger mx-2'>Delete</button>
                        <button className='btn btn-success mx-2'>Edit</button>
                    </td>
                </tr>})}
            </tbody>
        </table>
    </div>
  )
}

export default TableListSinhVien