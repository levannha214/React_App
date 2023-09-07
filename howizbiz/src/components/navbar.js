
import { useEffect, useState } from 'react';
import '../style/layout.css';
import '../style/reponsive.css';
const Navbar = ({ props, status, table }) => {

    const [widthMenu, setWidthMenu] = useState('col-md-4 col-xl-3 col-xxl-3 col-lg-3 navbar p-2');

    useEffect(() => {
        if (status) {
            setWidthMenu('col-md-1 col-xl-1 col-xxl-1 col-lg-1 navbar p-2');
        } else {
            setWidthMenu('col-md-4 col-xl-3 col-xxl-3 col-lg-3 navbar p-2');
        }
    }, [status]);

    return (<div className={widthMenu} id='menu'>

        {props.map((item, index) => (<div style={index === table[0] ? { backgroundColor: 'rgba(000, 000, 000, 15%)' } : { backgroundColor: 'white' }} className="itemNavbar col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 text-muted p-2" onClick={() => table[1](index)}>
            <span className="text-muted material-symbols-outlined mx-3">
                {item.icon}
            </span>{status ? "" : item.name}</div>))}

    </div>
    );
}
export default Navbar;
