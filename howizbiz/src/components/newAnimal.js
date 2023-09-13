import { useState, useEffect } from "react";
import React from 'react';
import '../style/addAnimal.css';
import codeQR from '../accsets/codeQR.png';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import GoogleMapReact from 'google-map-react';
import { PostCreateUser, GetRanks, PostImage } from "../api/service";
import { SelectRanks, FilterList } from "../validate/selectRanks";

const NewAnimal = ({ status, statusTable }) => {
    //  Add new animal
    const [kingdomValue, setKinhdomValue] = useState(null);
    const [phylumValue, setPhylumValue] = useState(null);
    const [attachments, setAttachments] = useState([]);
    const [classValue, setClassValue] = useState(null);
    const [familyValue, setFamilyValue] = useState(null);
    const [orderValue, setOrderValue] = useState(null);
    const [genusValue, setGenusValue] = useState(null);
    const [che_do_quan_lys, setChe_do_quan_lys] = useState([]);
    const [cite_id, setCite_id] = useState(null);
    const [classs, setClasss] = useState(null);
    const [class_id, setClass_id] = useState(null);
    const [cong_bo, setCong_bo] = useState(true);
    const created_at = new Date();
    const [dac_diem_nhan_dang, setDac_diem_nhan_dang] = useState(null);
    const [dac_diem_loai, setDac_diem_loai] = useState(null);
    const [dac_diem_sinh_thai, setDac_diem_sinh_thai] = useState(null);
    const [danh_gia_so_luong_ca_the, setDanh_gia_so_luong_ca_the] = useState(null);
    const [dia_diem_bat_gap, setDia_diem_bat_gap] = useState(null);
    const [family, setFamily] = useState(null);
    const [family_id, setFamily_id] = useState(null);
    const [genus, setGenus] = useState(null);
    const [genus_id, setGenus_id] = useState(null);
    const [gia_tri_loai, setGia_tri_loai] = useState([]);
    const [gia_tri_loais, setGia_tri_loais] = useState([]);
    const [he_sinh_thais, setHe_sinh_thais] = useState([]);
    const [id, setId] = useState(Math.floor(Math.random() * 100) + '');
    const [is_loai_dac_huu, setIs_loai_dac_huu] = useState(null);
    const [iucn_id, setIucn_id] = useState(null);
    const [iucns, setIucns] = useState([]);
    const [khu_vuc_ngoai_vqg_kbt, setKhu_vuc_ngoai_vqg_kbt] = useState(null);
    const [khu_vuc_vqg_kbt, setKhu_vuc_vqg_kbt] = useState(null);
    const [kingdom, setKingdom] = useState(null);
    const [kingdom_id, setKingdom_id] = useState(null);
    const [la_loai_dac_huu, setLa_loai_dac_huu] = useState(false);
    const [loai_hien_trang, setLoai_hien_trang] = useState(null);
    const [loai_hien_trang_id, setLoai_hien_trang_id] = useState(null);
    const [loai_noi_bat, setLoai_noi_bat] = useState(false);
    const [mo_ta_dac_huu, setMo_ta_dac_huu] = useState(null);
    const [minh_hoa_attachments, setMinh_hoa_attachments] = useState(null);
    const [mo_ta_chi_tiet, setmo_ta_chi_tiet] = useState('');
    const [nd64_id, setNd64_id] = useState(null);
    const [nd84_id, setNd84_id] = useState(null);
    const [noi_cu_tru_hoac_phan_bo, setNoi_cu_tru_hoac_phan_bo] = useState('Không xác định');
    const [su_suy_giam_lien_tuc_khu_vuc_phan_bo, setSu_suy_giam_lien_tuc_khu_vuc_phan_bo] = useState('Không xác định');
    const [nghi_dinhs, setNghi_dinhs] = useState([]);
    const [suy_giam_quan_the_theo_quan_sat, setSuy_giam_quan_the_theo_quan_sat] = useState('Không xác định');
    const [suy_giam_quan_the_theo_thoi_diem_danh_gia, setSuy_giam_quan_the_theo_thoi_diem_danh_gia] = useState('Không xác định');
    const [nguon_du_lieu, setNguon_du_lieu] = useState(null);
    const [order, setOrder] = useState(null);
    const [order_id, setOrder_id] = useState(null);
    const [phylumn, setPhylumn] = useState(null);
    const [phat_hien_loai, setPhat_hien_loai] = useState(null);
    const [phylum_id, setPhylum_id] = useState(null);
    const [provinces, setProvinces] = useState([]);
    const [qrcode_color, setQrcode_color] = useState("#fff");
    const [sach_do_id, setSach_do_id] = useState(null);
    const [sach_dos, setSach_dos] = useState([]);
    const [show_qrcode, setshow_qrcode] = useState(true);
    const [sinh_canh_bi_chia_cat_suy_giam_id, setSinh_canh_bi_chia_cat_suy_giam_id] = useState(Math.floor(Math.random() * 10));
    const [su_suy_giam_quan_the_id, setSu_suy_giam_quan_the_id] = useState(Math.floor(Math.random() * 10));
    const [ten, setTen] = useState(null);
    const [ten_dia_phuong, setTen_dia_phuong] = useState(null);
    const [ten_khoa_hoc, setTen_khoa_hoc] = useState(null);
    const [ten_tac_gia, setTen_tac_gia] = useState(null);
    const [thoi_gian_bat_gap, setThoi_gian_bat_gap] = useState(null);
    const [thoi_gian_gan_nhat_xuat_hien, setThoi_gian_gan_nhat_xuat_hien] = useState(null);
    const [thong_tin_khac, setThong_tin_khac] = useState('');
    const [tinh_thanh_id, setTinh_thanh_id] = useState(null);
    const [tinh_trang_buon_ban_su_dung, setTinh_trang_buon_ban_su_dung] = useState(null);
    const [tinh_trang_khai_thac_san_ban, setTinh_trang_khai_thac_san_ban] = useState(null);
    const [tinh_trang_noi_cu_tru, setTinh_trang_noi_cu_tru] = useState(null);
    const [toa_dos, setToa_dos] = useState([]);
    const [tong_so_ca_the, setTong_so_ca_the] = useState(null);
    const [tong_so_ca_the_trong_quan_the, setTong_so_ca_the_trong_quan_the] = useState(null);
    const [tong_so_quan_the, setTong_so_quan_the] = useState(null);
    const [trang_thai_id, setTrang_thai_id] = useState(null);
    const updated_at = new Date();
    const [vung_dem_kbt, setVung_dem_kbt] = useState(false);
    const [vung_loi_kbt, setVung_loi_kbt] = useState(false);
    const [path, setPath] = useState(null);
    const [listRanks, setListRanks] = useState(null);
    const [arrRanks, setArrRanks] = useState(null);
    const [listKingdom, setListKinhdom] = useState([]);
    const [listClass, setListClass] = useState([]);
    const [listPhylum, setListPhylum] = useState([]);
    const [listOrder, setListOrder] = useState([]);
    const [listGenus, setListGenus] = useState([]);
    const [listFamily, setListFamily] = useState([]);
    const [widthTable, setWidthTable] = useState('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
    //species classification


    // set attachmenst
    const PostImageFromData = async (fromData) => {
        try {
            let res = await PostImage(headers, fromData).then(response => {
                if (response.status === 200) {
                    setAttachments([response.data.data[0]]);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    const UpdateAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPath(file);
        const fromdata = new FormData();
        fromdata.append('attachments[0]', file);
        PostImageFromData(fromdata);
    }

    const KinhdomAnimal = () => {

        const [ten_khoa_hoc, ten] = kingdomValue.value.split('-');
        for (let i = 0; i < listKingdom.length; i++) {
            if (listKingdom[i].label === kingdomValue.label) {
                setKingdom_id(listKingdom[i].uuid);
                break;
            }
        }

        setListPhylum(FilterList(arrRanks[1], kingdom_id));
        setKingdom({
            created_at,
            kingdom_id,
            mo_ta: null,
            ten_khoa_hoc,
            ten,
            type: "Kingdom",
            updated_at: null
        });
    }

    const PhylumAnimal = () => {

        const [ten_khoa_hoc, ten] = phylumValue.value.split('-');
        for (let i = 0; i < listPhylum.length; i++) {
            if (listPhylum[i].label === phylumValue.label) {
                setPhylum_id(listPhylum[i].uuid);
                break;
            }
        }
        setListClass(FilterList(arrRanks[2], phylum_id));
        setPhylumn({
            created_at,
            id: phylum_id,
            ten,
            ten_khoa_hoc,
            mo_ta: null,
            parent_id: kingdom_id,
            type: "Phylum"
        });
    }
    const ClassAnimal = () => {
        for (let i = 0; i < listClass.length; i++) {
            if (listClass[i].label === classValue.label) {
                setClass_id(listClass[i].uuid);
                break;
            }
        }
        setListOrder(FilterList(arrRanks[3], class_id));
        const [ten_khoa_hoc, ten] = classValue.value.split('-');
        setClasss({
            created_at,
            id: class_id,
            mo_ta: null,
            parent_id: phylum_id,
            ten,
            ten_khoa_hoc,
            type: "Class",
            updated_at: null
        });
    }
    const OrderAnimal = () => {
        for (let i = 0; i < listOrder.length; i++) {
            if (listOrder[i].label === orderValue.label) {
                setOrder_id(listOrder[i].uuid);
                break;
            }
        }
        setListFamily(FilterList(arrRanks[4], order_id));
        const [ten_khoa_hoc, ten] = orderValue.value.split('-');
        setOrder({
            created_at,
            id: order_id,
            mo_ta: null,
            parent_id: class_id,
            ten,
            ten_khoa_hoc,
            type: "Order",
            updated_at
        });
    }
    const FamilyAnimal = () => {
        for (let i = 0; i < listFamily.length; i++) {
            if (listFamily[i].label === familyValue.label) {
                setFamily_id(listFamily[i].uuid);
                break;
            }
        }
        setListGenus(FilterList(arrRanks[5], family_id));
        const [ten_khoa_hoc, ten] = familyValue.value.split('-');
        setFamily({
            created_at,
            id: family_id,
            mo_ta: null,
            parent_id: order_id,
            ten,
            ten_khoa_hoc,
            type: "Family",
            updated_at
        });
    }
    const GenusAnimal = () => {
        for (let i = 0; i < listGenus.length; i++) {
            if (listGenus[i].label === genusValue.label) {
                setGenus_id(listGenus[i].uuid);
                break;
            }
        }
        const ten_khoa_hoc = genusValue.value;

        setGenus({
            created_at,
            id: genus_id,
            mo_ta: null,
            parent_id: family_id,
            ten: null,
            ten_khoa_hoc,
            type: "Genus",
            updated_at
        });
    }
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 20.9756602,
            lng: 105.7869468
        },
        zoom: 11
    };

    const toastify = (validate) => toast.error(validate, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const headers = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    const CheckAddAnimal = async (animal) => {
        try {
            const res = await PostCreateUser(headers, animal).then(response => {
                if (response.status === 200) {
                    statusTable[1]('list');
                }
            });
        } catch (e) {
            toastify(e.response.data.errors.ten_khoa_hoc[0]);
        }
    }
    const AddNewAnimal = () => {
        if (ten && ten_khoa_hoc && kingdom && classs && family && order && genus && phylumn) {
            if (path) { }
            let animal = {
                attachments,
                order_id,
                class_id,
                cong_bo,
                dac_diem_loai,
                dac_diem_sinh_thai,
                family_id,
                genus_id,
                gia_tri_loai,
                is_loai_dac_huu,
                iucns,
                kingdom_id,
                loai_noi_bat,
                minh_hoa_attachments,
                nguon_du_lieu,
                phylum_id,
                qrcode_color,
                sach_dos,
                show_qrcode,
                sinh_canh_bi_chia_cat_suy_giam: {
                    mo_ta_chi_tiet,
                    noi_cu_tru_hoac_phan_bo,
                    su_suy_giam_lien_tuc_khu_vuc_phan_bo,
                    thong_tin_khac,
                },
                su_suy_giam_quan_the: {
                    mo_ta_chi_tiet,
                    suy_giam_quan_the_theo_quan_sat,
                    suy_giam_quan_the_theo_thoi_diem_danh_gia
                },
                ten,
                ten_khoa_hoc,
                ten_tac_gia,
                toa_dos
            }
            CheckAddAnimal(animal);
        } else {
            toastify('Dữ liệu không thoả mãn !');
        }
    }
    const GetListRanks = async () => {
        try {
            const res = await GetRanks(headers).then(response => {
                if (response.status === 200) {
                    setListRanks(response.data);
                }
            });

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        if (listRanks === null) {
            GetListRanks();
        }
        if (listRanks) {
            setArrRanks(SelectRanks(listRanks));
            setListClass(SelectRanks(listRanks)[2]);
            setListKinhdom(SelectRanks(listRanks)[0]);
            setListPhylum(SelectRanks(listRanks)[1]);
            setListOrder(SelectRanks(listRanks)[3]);
            setListFamily(SelectRanks(listRanks)[4]);
            setListGenus(SelectRanks(listRanks)[5]);
        }
        if (status) {
            setWidthTable('col-12 col-sm-12 col-md-11 col-xl-11 col-xxl-11 col-lg-11 py-3');
        } else {
            setWidthTable('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
        }
        if (kingdomValue) {
            KinhdomAnimal();
        }
        if (phylumValue) {
            PhylumAnimal();
        }
        if (classValue) {
            ClassAnimal();
        }
        if (orderValue) {
            OrderAnimal();
        }
        if (familyValue) {
            FamilyAnimal();
        }
        if (genusValue) {
            GenusAnimal();
        }


    }, [listClass, listFamily, listKingdom, listGenus, listOrder, listPhylum, listRanks, status, kingdomValue, phylumValue, classValue, familyValue, genusValue, orderValue, path, attachments, ten, ten_khoa_hoc,
        cong_bo,
        dac_diem_loai,
        dac_diem_nhan_dang,
        dac_diem_sinh_thai,
        danh_gia_so_luong_ca_the,
        dia_diem_bat_gap,
        gia_tri_loais,
        he_sinh_thais,
        is_loai_dac_huu,
        iucns,
        khu_vuc_ngoai_vqg_kbt,
        khu_vuc_vqg_kbt,
        la_loai_dac_huu,
        loai_hien_trang,
        loai_hien_trang_id,
        loai_noi_bat,
        mo_ta_dac_huu,
        nghi_dinhs,
        nguon_du_lieu,
        phat_hien_loai,
        sach_do_id,
        show_qrcode,
        qrcode_color,
        sach_dos,
        sinh_canh_bi_chia_cat_suy_giam_id,
        su_suy_giam_quan_the_id,
        ten_dia_phuong,
        thoi_gian_bat_gap,
        thoi_gian_gan_nhat_xuat_hien,
        thong_tin_khac,
        tinh_thanh_id,
        tinh_trang_buon_ban_su_dung,
        tinh_trang_khai_thac_san_ban,
        tinh_trang_noi_cu_tru,
        toa_dos,
        tong_so_ca_the,
        tong_so_ca_the_trong_quan_the,
        tong_so_quan_the,
        trang_thai_id,
        vung_dem_kbt,
        vung_loi_kbt]);
    return (<div className={widthTable} id='AddAnimal'>
        <ToastContainer />
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 mx-3 d-flex" id='bannerAdd'>
            <button onClick={() => statusTable[1]('list')}> <span class="material-symbols-outlined">
                arrow_back
            </span></button>
            <div className="">THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 mx-3 d-flex">

            <div className="col-8 col-sm-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8 fromAdd " >
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>I.Thông tin chung về loài</strong></h5>
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên <i className="text-danger">*</i></label>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                    <input type="text" placeholder="Tên" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" onChange={e => setTen(e.target.value)} />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 my-1">
                    <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên khoa học <i className="text-danger">*</i></label>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                        <input type="text" placeholder="Tên khoa học" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" onChange={e => setTen_khoa_hoc(e.target.value)} />
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-xl-1 col-xxl-1 col-lg-1 my-1"></div>
                <div className="col-5 col-sm-5 col-md-5 col-xl-5 col-xxl-5 col-lg-5 my-1">
                    <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên tác giả</label>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2 ">
                        <input type="text" placeholder="Tên tác giả" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" onChange={e => setTen_tac_gia(e.target.value)} />
                    </div>
                </div>
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên địa phương</label>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                    <input type="text" placeholder="Tên địa phương" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" onChange={e => setTen_dia_phuong(e.target.value)} />
                </div>
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Nguồn dữ liệu </label>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                    <input type="text" placeholder="Nguồn dữ liệu" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" onChange={e => setNguon_du_lieu(e.target.value)} />
                </div>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-3 d-flex flex-wrap codeQR">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Trạng thái</h5>
                <div className=" col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Check
                        onChange={e => setTrang_thai_id(e.target.checked)}
                        type="switch"
                        id="custom-switch"
                        label="Công bố"
                    />
                </div>
                <h5 className=" col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Mã truy cập (QR)</h5>
                <div className=" col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex">
                    <div className="col-8 col-sm-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8">
                        <img src={codeQR} alt="codeQR.png" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4">
                        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex flex-wrap p-2" >
                            <Form.Label htmlFor="exampleColorInput">Sử dụng mã QR</Form.Label>
                            <Form.Check
                                onChange={e => setshow_qrcode(e.target.checked)}
                                type="switch"
                                id="custom-switch"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex flex-wrap p-2" >
                            <Form.Label htmlFor="exampleColorInput">Màu hiển thị</Form.Label>
                            <Form.Control
                                onChange={e => setQrcode_color(e.target.value)}
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>II.Phân loại học</strong></h5>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Giới <i className="text-danger">*</i></label>
                <Select

                    placeholder='Giới'
                    defaultValue={kingdomValue}
                    onChange={setKinhdomValue}
                    options={listKingdom}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"

                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Ngành <i className="text-danger">*</i></label>
                <Select
                    placeholder='Ngành'
                    defaultValue={phylumValue}
                    onChange={setPhylumValue}
                    options={listPhylum}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Lớp<i className="text-danger">*</i></label>
                <Select
                    placeholder='Lớp'
                    defaultValue={classValue}
                    onChange={setClassValue}
                    options={listClass}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Bộ <i className="text-danger">*</i></label>
                <Select
                    placeholder='Bộ'
                    defaultValue={orderValue}
                    onChange={setOrderValue}
                    options={listOrder}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Họ <i className="text-danger">*</i></label>
                <Select
                    placeholder='Họ'
                    defaultValue={familyValue}
                    onChange={setFamilyValue}
                    options={listFamily}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Chi <i className="text-danger">*</i></label>
                <Select
                    placeholder='Chi'
                    defaultValue={genusValue}
                    onChange={setGenusValue}
                    options={listGenus}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>III.Tình trạng bảo tồn</strong></h5>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 d-flex flex-wrap p-1">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Sách đỏ</h5>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 border-bottom">Năm</div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 border-bottom">Hiện trạng</div>
                <button className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 btn btn-light my-2">+</button>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 d-flex flex-wrap p-1">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">IUCN</h5>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 border-bottom">Năm</div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 border-bottom">Hiện trạng</div>
                <button className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 btn btn-light my-2">+</button>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><b>IV. Các mối đe dạo</b></h5>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2 border border-1 d-flex flex-wrap dangerAnimal">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>Sự suy giảm quần thể</strong></h5>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Suy Giảm Quần Thể Ít Nhất 50% Theo Quan Sát Hoặc Ước Tính Trong Mười (10) Năm Gần Nhất Hoặc Ba (03) Thế Hệ Cuối Tính Đến Thời Điểm Đánh Giá</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline - ${type}`} className="mb-3">
                            <Form.Check

                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline - ${type} - 3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Suy Giảm Ít Nhất 50% Trong 10 Năm Hoặc Ba (03) Thế Hệ Tiếp Theo Tính Từ Thời Điểm Đánh Giá</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline - ${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline - ${type} - 3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Mô Tả Chi Tiết Sự Suy Giảm Quần Thể</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả chi tiết" />
                    </Form.Group>
                </Form>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Thông Tin Khác Về Sự Suy Giảm Quần Thể</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Thông tin khác" />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2 border border-1 d-flex flex-wrap dangerAnimal">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>Sinh Cảnh Bị Chia Cắt/Suy Giảm</strong></h5>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 ">- Nơi Cư Trú Hoặc Phân Bố Dưới 500 Km2 Và Quần Thể Bị Chia Cắt Nghiêm  Trọng</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 my-2"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline - ${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline - ${type} - 3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Suy Giảm Liên Tục Về Khu Vực Phân Bố, Nơi Cư Trú</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 my-2"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline - ${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline - ${type} - 2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline - ${type} - 3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 ">- Mô Tả Chi Tiết Sinh Cảnh Bị Chia Cắt/Suy Giảm</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả chi tiết" />
                    </Form.Group>
                </Form>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Thông Tin Khác Về Sinh Cảnh Bị Chia Cắt/Suy Giảm</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Thông tin khác" />
                    </Form.Group>
                </Form>
            </div>
            <hr className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"></hr>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex">
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2">

                    <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="textMin">Tình Trạng Buôn Bán Sử Dụng</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tình Trạng Buôn Bán Sử Dụng" onChange={e => setTinh_trang_buon_ban_su_dung(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2">
                    <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="textMin">Tình Trạng Khai Thác Săn Bắn</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tình Trạng Khai Thác Săn Bắn" onChange={e => setTinh_trang_khai_thac_san_ban(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-2">
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Các Mối Đe Dọa Khác</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Các Mối Đe Dọa Khác" />
                    </Form.Group>
                </Form>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>V. Đặc điểm nhận dạng</strong></h5>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-2">
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Đặc điểm nhận dạng</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Đặc điểm nhận dạng" onChange={e => setDac_diem_nhan_dang(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-2">
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Bộ sưu tập - Hình ảnh minh họa</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex">
                    <label className="avatarAnimal" htmlFor="imgAvatar">+</label>
                    {path && <img src={path.preview} alt='logo.png' className="imgAvatar mx-2" />}
                </div>
                <input type="file" id='imgAvatar' name="imgAvatar" hidden onChange={UpdateAvatar} />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>VI. Hiện trạng phân bố</strong></h5>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4">
                <Form.Label htmlFor="KBT" className="textMin">Khu Vực VQG, KBT</Form.Label>
                <Form.Control
                    onChange={e => setKhu_vuc_vqg_kbt(e.target.value)}
                    placeholder="Khu Vực VQG, KBT"
                    type="text"
                    id="KBT"
                />
                <Form.Label htmlFor="nKBT" className="textMin">Khu Vực Ngoài VQG/KBT</Form.Label>
                <Form.Control
                    onChange={e => setKhu_vuc_ngoai_vqg_kbt(e.target.value)}
                    placeholder="Khu Vực Ngoài VQG/KBT"
                    type="text"
                    id="nKBT"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 px-2 d-flex">
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline - ${type}`} className="p-3">
                            <Form.Check
                                className="my-4"
                                inline
                                label="Vùng lõi khu bảo tồn"
                                name="null"
                                type={type}
                                id={`inline - ${type} - 1`}
                            />
                            <Form.Check
                                className="my-3"
                                inline
                                label="Vùng đệm khu bảo tồn"
                                name="null"
                                type={type}
                                id={`inline - ${type} - 2`}
                            />

                        </div>
                    ))}
                </Form>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4">
                <Form.Label htmlFor="KBTs" className="textMin">Tỉnh Thành Phân Bố</Form.Label>
                <Form.Control
                    onClick={e => setTinh_thanh_id(e.target.value)}
                    placeholder="Tỉnh Thành Phân Bố"
                    type="text"
                    id="KBTs"
                />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                <Form.Label htmlFor="KBTs" className="textMin">Hệ sinh thái</Form.Label>
                <Form.Control
                    onChange={e => setHe_sinh_thais(e.target.value)}
                    placeholder="Hệ sinh thái"
                    type="text"
                    id="KBTs"
                />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12  d-flex"><span className="material-symbols-outlined textMax">
                arrow_right
            </span>
                <p className="my-2">Hiển thị tri tiết</p>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>VII. Hiện trạng quần thể</strong></h5>

            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2">
                <Form.Label className="textMin">Tổng Số Quần Thể</Form.Label>
                <Form.Control
                    onChange={e => setTong_so_quan_the(e.target.value)}
                    placeholder="Tổng Số Quần Thể"
                    type="text"
                />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Dánh Giá Số Lượng Cá Thể</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Dánh Giá Số Lượng Cá Thể" onChange={e => setTong_so_ca_the(e.target.value)} />
                    </Form.Group>
                </Form>
                <Form.Label className="textMin">Hiện trạng</Form.Label>
                <Form.Control
                    onChange={e => setLoai_hien_trang(e.target.value)}
                    placeholder="Hiện trạng"
                    type="text"

                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2">
                <Form.Label className="textMin">Tổng Số Cá Thể Trong Quần Thể</Form.Label>
                <Form.Control
                    onChange={e => setTong_so_ca_the_trong_quan_the(e.target.value)}
                    placeholder="Tổng Số Cá Thể Trong Quần Thể"
                    type="text"

                />
                <Form.Label className="textMin">Thời Gian Gần Nhất Xuất Hiện Trên Địa Bàn</Form.Label>
                <Form.Control
                    onChange={e => setThoi_gian_gan_nhat_xuat_hien(e.target.value)}
                    placeholder="Thời Gian Gần Nhất Xuất Hiện Trên Địa Bàn"
                    type="text"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2">
                <Form.Label className="textMin">Tổng Số Lượng Cá Thể</Form.Label>
                <Form.Control
                    onChange={e => setTong_so_ca_the(e.target.value)}
                    placeholder="Tổng Số Lượng Cá Thể"
                    type="text"

                />
                <Form.Label className="textMin">Thông Tin Khác</Form.Label>
                <Form.Control
                    onChange={e => setThong_tin_khac(e.target.value)}
                    placeholder="Thông Tin Khác"
                    type="text"
                />

            </div>

        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>VIII. Đặc điểm và giá trị của loài</strong></h5>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6">
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline - ${type}`}>
                            <Form.Check
                                className="m-4 "
                                inline
                                label="Loài đặc hữu"
                                type={type}
                            />
                            <Form.Check
                                className="m-4"
                                inline
                                label="Loài nổi bật"
                                type={type}
                            />
                        </div>
                    ))}
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Mô Tả Loài Đặc Hữu</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Mô Tả Loài Đặc Hữu" onChange={e => setMo_ta_dac_huu(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 px-3">

                <Form.Label className="textMin">Giá trị loài</Form.Label>
                <Form.Control
                    onChange={e => setGia_tri_loais(e.target.value)}
                    placeholder="Thông Tin Khác"
                    type="text"
                />
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12  d-flex"><span className="material-symbols-outlined textMax">
                    arrow_right
                </span>
                    <p className="my-2">Hiển thị tri tiết</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>IX. Tình trạng quản lý, bảo vệ</strong></h5>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                <button className="btn btn-light col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3 col-lg-3">Thêm mới nghị định +</button>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">

                <Form.Label className="textMin">Chế Độ Quản Lý Bảo Vệ</Form.Label>
                <Form.Control
                    onChange={e => setChe_do_quan_lys(e.target.value)}
                    placeholder="Chế Độ Quản Lý Bảo Vệ"
                    type="text"
                />
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12  d-flex"><span class="material-symbols-outlined textMax">
                    arrow_right
                </span>
                    <p className="my-2">Hiển thị tri tiết</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>X. Phát hiện loài</strong></h5>
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 my-3 d-flex flex-wrap">
                <div className="textMin col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3 text-muted border-bottom">
                    Kinh độ
                </div>
                <div className="textMin col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3 text-muted border-bottom">
                    Vĩ độ
                </div>
                <div className="textMin col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3 text-muted border-bottom">
                    Thời gian bắt gặp
                </div>
                <div className="textMin col-3 col-sm-3 col-md-3 col-xl-3 col-xxl-3 text-muted border-bottom">
                    Địa điểm bắt gặp
                </div>
                <button className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 btn btn-light my-2">+</button>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 my-2 d-flex justify-content-end">
                    <button className="col-2 col-sm-2 col-md-2 col-xl-2 col-xxl-2 p-1" id="btnAdd" onClick={AddNewAnimal}>Thêm mới</button>
                </div>
            </div>
        </div>

    </div >);
}
export default NewAnimal;