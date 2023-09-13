import '../style/userTable.css';
import Form from 'react-bootstrap/Form';
const TableUser = () => {
    return (<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 px-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex mx-3 my-2">
            <div className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 d-flex p-1 searchFrom' >
                <button><span className='material-symbols-outlined text-muted'>
                    search
                </span></button>
                <input type="text" placeholder='Tìm kiếm theo tên hoặc số điện thoại' className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9' />
            </div>

            <button className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 buttonAdd mx-3' >+ Thêm mới</button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex mx-3 filterUser">

            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-1'>

            </div>
        </div>
    </div>
    );

}
export default TableUser;