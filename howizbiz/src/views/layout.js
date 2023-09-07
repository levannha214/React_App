
import 'bootstrap/dist/css/bootstrap.min.css';
import TableAnimal from '../components/tableAnimal';
import logo from '../accsets/logo.png';
import '../style/layout.css';
import { useEffect, useState, createContext } from 'react';
import Navbar from '../components/navbar';
import NewAnimal from '../components/newAnimal';
import UpdateAnimalId from '../components/UpdateId';
const UserContext = createContext();

const Layout = () => {
    const [statusTable, setStatusTable] = useState('list');
    const [menu, setMenu] = useState(false);

    const [table, setTable] = useState(0);
    const navbar = [{
        icon: 'pets',
        name: 'Loài nguy cấp quý hiếm',

    },
    {
        icon: 'widgets',
        name: 'Bảng điều khiển',

    },
    {
        icon: 'person',
        name: 'Quản lý người dùng',

    },

    {
        icon: 'wrap_text',
        name: 'Phân loại học',

    },
    {
        icon: 'stylus',
        name: 'Bài viết',

    }, {
        icon: 'sticky_note_2',
        name: 'Phiếu đề xuất'
    }, {
        icon: 'category',
        name: 'Danh mục'
    }
    ];
    const [contentTable, setContentTable] = useState(<TableAnimal status={menu} table={navbar[table]} />);
    const [windowDimention, setWindowDimention] = useState({
        windowWidth: window.innerWidth
    });
    const textBanner = 'HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ';
    const [text, setText] = useState(textBanner);
    const detectSize = () => {
        setWindowDimention({
            windowWidth: window.innerWidth
        });
        if (windowDimention.windowWidth < 1300) {
            setText(textBanner.slice(0, Math.round(windowDimention.windowWidth / 20)) + '...');
        } else {
            setText(textBanner);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize);
        if (statusTable === 'list') {
            setContentTable(< TableAnimal status={menu} table={navbar[table]} />)
        } else if (statusTable === 'add') {
            setContentTable(<NewAnimal status={menu} statusTable={[statusTable, setStatusTable]} />);
        } else if (statusTable[0] === 'edit') {
            setContentTable(<UpdateAnimalId status={menu} statusTable={[statusTable, setStatusTable]} animal={statusTable[1]} />)
        }

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimention, statusTable, menu]);
    return (<div className='col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex p-3 banner'>
            <div className='col-7 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10 d-flex'>
                <span className="material-symbols-outlined " onClick={() => menu ? setMenu(false) : setMenu(true)}>
                    menu
                </span>
                <img src={logo} style={{ width: '30px', height: 'auto' }} alt='logo' className='mx-3' />
                <h5>{text}</h5>
            </div>
            <div className='col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2' id='avatar'>
                <img src='https://investone-law.com/wp-content/uploads/2019/06/chu-t.png' />
                <div>Quản lý dự án</div>
            </div>
        </div>
        <UserContext.Provider value={[statusTable, setStatusTable]}>
            <div className='col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex'>
                <Navbar status={menu} props={navbar} table={[table, setTable]} />
                {table === 0 && contentTable}
                {table !== 0 && <TableAnimal status={menu} table={navbar[table]} />}
            </div>
        </UserContext.Provider>
    </div>)

}
export { Layout, UserContext };