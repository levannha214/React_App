import { useEffect, useState, useContext } from 'react';
import '../style/table.css';
import Table from 'react-bootstrap/Table';
import { FecthAllUser } from '../api/service';
import ReactPaginate from 'react-paginate';
import { UserContext } from '../views/layout';
import logo from '../accsets/logo.png';
import Example from './DeleteAnimal';
const SpeciesTable = () => {

    const statusTable = useContext(UserContext);
    const [listAnimal, setListAnimal] = useState(null);
    const [page, setPage] = useState(1);
    const [perpage, setPerpage] = useState(10);
    const [search, setSearch] = useState('');
    const [total, setTotal] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const headers = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    const [selectTotal, setSelectTotal] = useState({
        status: false, view: <span className=" material-symbols-outlined text-muted" >
            article
        </span>
    })
    const GetListAnimal = async (page, perpage, search) => {
        let res = await FecthAllUser(headers, { page, perpage, search }).then(reponse => {
            setListAnimal(reponse.data.list);
            setTotalPage(reponse.data.pagination.total / perpage);
            setTotal(reponse.data.pagination.total);
        });
    };
    const ClickPageTotal = () => {
        if (selectTotal.status) {
            setSelectTotal({
                status: false,
                view: <span className="material-symbols-outlined text-muted">article</span>
            });
        } else {
            setSelectTotal({
                status: true, view: <div>
                    <button className='btnPage mx-1' onClick={() => setPerpage(5)}>5/trang</button>
                    <button className='btnPage mx-1' onClick={() => setPerpage(10)}>10/trang</button>
                    <button className='btnPage mx-1' onClick={() => setPerpage(15)}>15/trang</button>
                </div>
            })
        }
    }

    const HandlePageClick = (event) => {
        setPage(+event.selected + 1);
        GetListAnimal(page, perpage, search);
    }
    const NewAddAnimal = () => {
        statusTable[1]('add');
    }

    useEffect(() => {
        GetListAnimal(page, perpage, search);

    }, [page, perpage, search]);
    return (<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 px-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex m-3">
            <div className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 d-flex p-1 searchFrom' >
                <button><span className='material-symbols-outlined text-muted'>
                    search
                </span></button>
                <input type="text" placeholder='Tìm kiếm theo tên' onChange={e => setSearch(e.target.value)} className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9' />
            </div>

            <button className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 buttonAdd mx-3' onClick={NewAddAnimal}>+ Thêm mới</button>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 tableAnimal'>
            <Table hover>
                <thead>
                    <tr>
                        <th>Tên </th>
                        <th>Tên khoa học</th>
                        <th>Giới</th>
                        <th>Ngành</th>
                        <th>Lớp</th>
                        <th>Bộ</th>
                        <th>Họ</th>
                        <th>Chi</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {listAnimal && listAnimal.map(item => <tr>
                        <td><img src={item.attachments[0] ? `https://wlp.howizbiz.com${item.attachments[0].path}` : logo} alt='logo.png' className='logoAnimal' />{item.ten}</td>
                        <td>{item.ten_khoa_hoc}</td>
                        <td>{item.kingdom.ten_khoa_hoc}</td>
                        <td>{item.phylumn.ten_khoa_hoc}</td>
                        <td>{item.class.ten_khoa_hoc}</td>
                        <td>{item.order.ten_khoa_hoc}</td>
                        <td>{item.family.ten_khoa_hoc}</td>
                        <td>{item.genus.ten_khoa_hoc}</td>
                        <td></td>
                        <td><div className='d-flex'>
                            <span className="material-symbols-outlined mx-3 text-warning Edit" data-bs-toggle="tooltip" title='Cập nhật' onClick={() => statusTable[1](['edit', item])}>edit</span>
                            <Example idDelete={item} />
                        </div>
                        </td>
                    </tr>)}


                </tbody>
            </Table>

        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-3 d-flex justify-content-between'>
            <span className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-2 text-muted'>{`${page * perpage - perpage + 1}-${page * perpage}/${total}`}</span>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={HandlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={totalPage}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    containerClassName='pagination'
                    activeClassName='active'
                />
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-end' onClick={ClickPageTotal}><span>{selectTotal.view}</span></div>
        </div>
    </div>);
}
export default SpeciesTable;