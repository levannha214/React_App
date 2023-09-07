import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteUser } from '../api/service';
function Example({ idDelete }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const headers = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }



    const CheckDelete = async () => {
        try {
            let res = await DeleteUser(headers, { data: idDelete, message: "Thành công" }).then(response => {
                console.log(response);
                if (response.status === 200) {
                    handleClose();
                }

            });
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    return (
        <>
            <span className="material-symbols-outlined text-danger Delete" data-bs-toggle="tooltip" title='Xoá' onClick={handleShow}>
                delete
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ backgroundColor: 'red' }}>
                    <Modal.Title className='text-white'>Bạn có chác chắn không !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-muted'> Bạn có chắc muốn xóa <b className='text-danger'>{idDelete.ten}</b>? Điều này hoàn toàn không thế hoàn tác</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Không
                    </Button>
                    <Button variant="danger" onClick={CheckDelete}>Áp dụng</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Example;