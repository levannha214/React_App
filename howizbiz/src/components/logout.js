import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Logo from '../accsets/logo.png';
import { useNavigate } from 'react-router-dom';
import '../style/layout.css';
function Logout({ user }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const HandleLogout = () => {
        localStorage.setItem('token', '');
        navigate('/login');
    }
    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <>
            <div className='col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2' id='avatar' onClick={handleShow}>
                <img src={user ? `https://wlp.howizbiz.com${user.role.meta.image}` : Logo} alt='' />
                <div>{user && user.name}</div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center p-3'><img id='logoLogout' src={user ? `https://wlp.howizbiz.com${user.role.meta.image}` : Logo} alt='' /></div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center '><h5>{user && user.name}</h5></div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center py-2'>{user && user.roles.map(item => <span className='mx-2' style={{ backgroundColor: item.meta.color, color: item.meta['text-color'], borderRadius: '5px' }} className='p-2'>{item.name}</span>)}</div>
                </div>
                <Modal.Footer className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-between'>
                    <Button variant="info" onClick={handleClose}>
                        Hồ sơ
                    </Button>
                    <Button variant="danger" onClick={HandleLogout}>
                        Đăng xuất
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Logout;