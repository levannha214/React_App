
import { useState, useEffect } from "react";
import React from 'react';
import '../style/addAnimal.css';
import codeQR from '../accsets/codeQR.png';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import GoogleMapReact from 'google-map-react';
import { UpdateUser } from "../api/service";

const UpdateAnimalId = ({ status, statusTable, animal }) => {

    const [kingdomValue, setKinhdomValue] = useState(null);
    const [phylumValue, setPhylumValue] = useState(null);
    const [attachments, setAttachments] = useState(animal.attachments);
    const [classValue, setClassValue] = useState(null);
    const [familyValue, setFamilyValue] = useState(null);
    const [orderValue, setOrderValue] = useState(null);
    const [genusValue, setGenusValue] = useState(null);
    const [che_do_quan_lys, setChe_do_quan_lys] = useState(animal.che_do_quan_lys);
    const [cite_id, setCite_id] = useState(animal.cite_id);
    const [classs, setClasss] = useState(animal.class);
    const [class_id, setClass_id] = useState(animal.class_id);
    const [cong_bo, setCong_bo] = useState(animal.cong_bo);
    const [created_at, setCreated_at] = useState(animal.created_at);
    const [dac_diem_nhan_dang, setDac_diem_nhan_dang] = useState(animal.dac_diem_nhan_dang);
    const [dac_diem_loai, setDac_diem_loai] = useState(animal.dac_diem_loai);
    const [dac_diem_sinh_thai, setDac_diem_sinh_thai] = useState(animal.dac_diem_sinh_thai);
    const [danh_gia_so_luong_ca_the, setDanh_gia_so_luong_ca_the] = useState(animal.danh_gia_so_luong_ca_the);
    const [dia_diem_bat_gap, setDia_diem_bat_gap] = useState(animal.dia_diem_bat_gap);
    const [family, setFamily] = useState(animal.family);
    const [family_id, setFamily_id] = useState(animal.family_id);
    const [genus, setGenus] = useState(animal.genus);
    const [genus_id, setGenus_id] = useState(animal.genus_id);
    const [gia_tri_loai, setGia_tri_loai] = useState(animal.gia_tri_loai);
    const isTrusted = true;
    const [gia_tri_loais, setGia_tri_loais] = useState(animal.gia_tri_loais);
    const [he_sinh_thais, setHe_sinh_thais] = useState(animal.he_sinh_thais);
    const [id, setId] = useState(animal.id);
    const [is_loai_dac_huu, setIs_loai_dac_huu] = useState(animal.is_loai_dac_huu);
    const [iucn_id, setIucn_id] = useState(animal.iucn_id);
    const [iucns, setIucns] = useState(animal.iucns);
    const [khu_vuc_ngoai_vqg_kbt, setKhu_vuc_ngoai_vqg_kbt] = useState(animal.khu_vuc_ngoai_vqg_kbt);
    const [khu_vuc_vqg_kbt, setKhu_vuc_vqg_kbt] = useState(animal.khu_vuc_ngoai_vqg_kbt);
    const [kingdom, setKingdom] = useState(animal.kingdom);
    const [kingdom_id, setKingdom_id] = useState(animal.kingdom_id);
    const [la_loai_dac_huu, setLa_loai_dac_huu] = useState(animal.la_loai_dac_huu);
    const [loai_hien_trang, setLoai_hien_trang] = useState(animal.loai_hien_trang);
    const [loai_hien_trang_id, setLoai_hien_trang_id] = useState(animal.loai_hien_trang_id);
    const [loai_noi_bat, setLoai_noi_bat] = useState(animal.loai_noi_bat);
    const [mo_ta_dac_huu, setMo_ta_dac_huu] = useState(animal.mo_ta_dac_huu);
    const [minh_hoa_attachments, setMinh_hoa_attachments] = useState(animal.minh_hoa_attachments);
    const [mo_ta_chi_tiet, setmo_ta_chi_tiet] = useState('');

    const [nd64_id, setNd64_id] = useState(animal.nd64_id);
    const [nd84_id, setNd84_id] = useState(animal.nd84_id);
    const [noi_cu_tru_hoac_phan_bo, setNoi_cu_tru_hoac_phan_bo] = useState('Không xác định');
    const [su_suy_giam_lien_tuc_khu_vuc_phan_bo, setSu_suy_giam_lien_tuc_khu_vuc_phan_bo] = useState('Không xác định');
    const [nghi_dinhs, setNghi_dinhs] = useState(animal.nghi_dinhs);
    const [suy_giam_quan_the_theo_quan_sat, setSuy_giam_quan_the_theo_quan_sat] = useState('Không xác định');
    const [suy_giam_quan_the_theo_thoi_diem_danh_gia, setSuy_giam_quan_the_theo_thoi_diem_danh_gia] = useState('Không xác định');
    const [nguon_du_lieu, setNguon_du_lieu] = useState(animal.nguon_du_lieu);
    const [order, setOrder] = useState(animal.order);
    const [order_id, setOrder_id] = useState(animal.order_id);
    const [phylumn, setPhylumn] = useState(animal.phylumn);
    const [phat_hien_loai, setPhat_hien_loai] = useState(animal.phat_hien_loai);
    const [phylum_id, setPhylum_id] = useState(animal.phylum_id);
    const [provinces, setProvinces] = useState(animal.provinces);
    const [qrcode_color, setQrcode_color] = useState(animal.qrcode_color);
    const [sach_do_id, setSach_do_id] = useState(animal.sach_do_id);
    const [sach_dos, setSach_dos] = useState(animal.sach_dos);
    const [show_qrcode, setshow_qrcode] = useState(animal.show_qrcode);
    const [sinh_canh_bi_chia_cat_suy_giam, setSinh_canh_bi_chia_cat_suy_giam] = useState(null);
    const [sinh_canh_bi_chia_cat_suy_giam_id, setSinh_canh_bi_chia_cat_suy_giam_id] = useState(animal.sinh_canh_bi_chia_cat_suy_giam_id);
    const [suy_giam_quan_the, setSuy_giam_quan_the] = useState(null);
    const [su_suy_giam_quan_the_id, setSu_suy_giam_quan_the_id] = useState(animal.su_suy_giam_quan_the_id);
    const [ten, setTen] = useState(animal.ten);
    const [ten_dia_phuong, setTen_dia_phuong] = useState(animal.ten_dia_phuong);
    const [ten_khoa_hoc, setTen_khoa_hoc] = useState(animal.ten_khoa_hoc);
    const [ten_tac_gia, setTen_tac_gia] = useState(animal.ten_tac_gia);
    const [thoi_gian_bat_gap, setThoi_gian_bat_gap] = useState(animal.thoi_gian_bat_gap);
    const [thoi_gian_gan_nhat_xuat_hien, setThoi_gian_gan_nhat_xuat_hien] = useState(animal.thoi_gian_gan_nhat_xuat_hien);
    const [thong_tin_khac, setThong_tin_khac] = useState(animal.thong_tin_khac);
    const [tinh_thanh_id, setTinh_thanh_id] = useState(animal.tinh_thanh_id);
    const [tinh_trang_buon_ban_su_dung, setTinh_trang_buon_ban_su_dung] = useState(animal.tinh_trang_buon_ban_su_dung);
    const [tinh_trang_khai_thac_san_ban, setTinh_trang_khai_thac_san_ban] = useState(animal.tinh_trang_khai_thac_san_ban);
    const [tinh_trang_noi_cu_tru, setTinh_trang_noi_cu_tru] = useState(animal.tinh_trang_noi_cu_tru);
    const [toa_dos, setToa_dos] = useState(animal.toa_dos);
    const [tong_so_ca_the, setTong_so_ca_the] = useState(animal.tong_so_ca_the);
    const [tong_so_ca_the_trong_quan_the, setTong_so_ca_the_trong_quan_the] = useState(animal.tong_so_ca_the_trong_quan_the);
    const [tong_so_quan_the, setTong_so_quan_the] = useState(animal.tong_so_quan_the);
    const [trang_thai_id, setTrang_thai_id] = useState(animal.trang_thai_id);
    const updated_at = new Date();
    const [vung_dem_kbt, setVung_dem_kbt] = useState(animal.vung_dem_kbt);
    const [vung_loi_kbt, setVung_loi_kbt] = useState(animal.vung_loi_kbt);
    const [path, setPath] = useState(null);
    const options = [[
        { value: 'Animalia - Động vật', label: 'Animalia - Động vật' },
        { value: 'Plantae - Thực vật', label: 'Plantae - Thực vật' }],
    [{ value: 'Anthocerotophyta - Ngành rêu sừng', label: 'Anthocerotophyta - Ngành rêu sừng' },
    { value: 'Bryophyta - Ngành rêu', label: 'Bryophyta - Ngành rêu' },
    { value: ' Charophyta - Ngành luân tảo', label: ' Charophyta - Ngành luân tảo' }],
    [{ value: 'class tree - Lớp cây', label: 'class tree -Lớp cây' }],
    [{ value: 'Myrtales - Bộ Đào Kim nương (Bộ Hương đào)', label: 'Myrtales - Bộ Đào Kim nương (Bộ Hương đào)' },
    { value: ' Vitales - Bộ Nho', label: ' Vitales - Bộ Nho' },
    { value: 'Apiales - Bộ Hoa tán', label: 'Apiales - Bộ Hoa tán' }
    ],
    [{ value: 'Araliaceae - Họ Cuồng', label: 'Araliaceae - Họ Cuồng' },
    { value: 'Apiaceae - Họ Hoa tán', label: 'Apiaceae - Họ Hoa tán' },
    { value: ' Pittosporaceae - Họ Hải đồng Họ Khuy áo/ Họ Hắc châu)', label: 'Pittosporaceae - Họ Hải đồng Họ Khuy áo/ Họ Hắc châu)' }],
    [{ value: 'Epipterygium', label: 'Epipterygium' },
    { value: 'Leptobryum', label: 'Leptobryum' },
    { value: ' Acidodontium', label: ' Acidodontium' }]
    ];

    const [widthTable, setWidthTable] = useState('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
    // set attachmenst
    const UpdateAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPath(file.preview);
    }

    const KinhdomAnimal = () => {
        if (kingdomValue) {
            const [ten_khoa_hoc, ten] = kingdomValue.value.split('-');
            setKingdom({
                created_at,
                id: "1",
                mo_ta: null,
                ten,
                ten_khoa_hoc,
                type: "Kingdom",
                updated_at,
                kingdom_id,
                la_loai_dac_huu,
                loai_hien_trang,
                loai_hien_trang_id,
                loai_noi_bat,
                minh_hoa_attachments,
                mo_ta_dac_huu,
                nd64_id,
                nd84_id,
                nghi_dinhs,
                nguon_du_lieu
            });
        } else {
            setKingdom({
                created_at,
                id: "1",
                mo_ta: null,
                ten: kingdom.ten,
                ten_khoa_hoc: kingdom.ten_khoa_hoc,
                type: "Kingdom",
                updated_at,
                kingdom_id,
                la_loai_dac_huu,
                loai_hien_trang,
                loai_hien_trang_id,
                loai_noi_bat,
                minh_hoa_attachments,
                mo_ta_dac_huu,
                nd64_id,
                nd84_id,
                nghi_dinhs,
                nguon_du_lieu
            });
        }
    }
    const PhylumAnimal = () => {
        if (phylumValue) {
            const [ten_khoa_hoc, ten] = phylumValue.value.split('-');
            setPhylumn({
                created_at,
                id: "11",
                kingdom_id,
                mo_ta: null,
                ten,
                ten_khoa_hoc,
                type: "Phylum",
                updated_at
            });
        } else {
            setPhylumn({
                created_at,
                id: "11",
                kingdom_id,
                mo_ta: null,
                ten: phylumn.ten,
                ten_khoa_hoc: phylumn.ten_khoa_hoc,
                type: "Phylum",
                updated_at
            });
        }
    }
    const ClassAnimal = () => {
        if (classValue) {
            const [ten_khoa_hoc, ten] = classValue.value.split('-');
            setClasss({
                created_at,
                id: "33",
                mo_ta: null,
                phylum_id,
                ten,
                ten_khoa_hoc,
                type: "Class",
                updated_at,
                class_id,
                cong_bo,
                created_at,
                dac_diem_loai,
                dac_diem_nhan_dang,
                dac_diem_sinh_thai,
                danh_gia_so_luong_ca_the,
                dia_diem_bat_gap,
            });
        } else {
            setClasss({
                created_at,
                id: "33",
                mo_ta: null,
                phylum_id,
                ten: classs.ten,
                ten_khoa_hoc: classs.ten_khoa_hoc,
                type: "Class",
                updated_at,
                class_id,
                cong_bo,
                created_at,
                dac_diem_loai,
                dac_diem_nhan_dang,
                dac_diem_sinh_thai,
                danh_gia_so_luong_ca_the,
                dia_diem_bat_gap,
            });
        }
    }
    const OrderAnimal = () => {
        if (orderValue) {
            const [ten_khoa_hoc, ten] = orderValue.value.split('-');
            setOrder({
                class_id,
                created_at,
                id: "274",
                mo_ta: null,
                ten,
                ten_khoa_hoc,
                type: "Order",
                updated_at
            });
        } else {
            setOrder({
                class_id,
                created_at,
                id: "274",
                mo_ta: null,
                ten: order.ten,
                ten_khoa_hoc: order.ten_khoa_hoc,
                type: "Order",
                updated_at
            });
        }
    }
    const FamilyAnimal = () => {
        if (familyValue) {
            const [ten_khoa_hoc, ten] = familyValue.value.split('-');
            setFamily({
                created_at,
                id: "1662",
                mo_ta: null,
                order_id,
                ten,
                ten_khoa_hoc,
                type: "Family",
                updated_at,
                family_id
            });
        } else {
            setFamily({
                created_at,
                id: "1662",
                mo_ta: null,
                order_id,
                ten: family.ten,
                ten_khoa_hoc: family.ten_khoa_hoc,
                type: "Family",
                updated_at,
                family_id
            });
        }
    }
    const GenusAnimal = () => {
        if (genusValue) {
            const ten_khoa_hoc = genusValue.value;
            setGenus({
                created_at,
                family_id,
                id: "24546",
                mo_ta: null,
                ten_khoa_hoc,
                type: "Genus",
                updated_at,
            });
        } else {
            setGenus({
                created_at,
                family_id,
                id: "24546",
                mo_ta: null,
                ten_khoa_hoc: genus.ten_khoa_hoc,
                type: "Genus",
                updated_at,
            });
        }
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
    const CheckUpdateAnimal = async (animalNew) => {
        try {
            const res = await UpdateUser(headers, { animalNew, 'id': animal.id }).then(response => {
                if (response.status === 200) {
                    statusTable[1]('list');
                }
            });
        } catch (e) {
            console.log(e);

        }
    }
    const HandleUpdate = () => {
        KinhdomAnimal();
        PhylumAnimal();
        ClassAnimal();
        OrderAnimal();
        FamilyAnimal();
        GenusAnimal();
        if (ten !== '' && ten_khoa_hoc !== '' && kingdom && classs && family && order && genus && phylumn) {
            let animal = {
                attachments,
                che_do_quan_lys,
                cite_id,
                class: classs,
                class_id,
                cong_bo,
                created_at,
                dac_diem_loai,
                dac_diem_nhan_dang,
                dac_diem_sinh_thai,
                danh_gia_so_luong_ca_the,
                dia_diem_bat_gap,
                family,
                family_id,
                genus,
                genus_id,
                gia_tri_loai,
                gia_tri_loais,
                he_sinh_thais,
                id,
                isTrusted,
                is_loai_dac_huu,
                iucn_id,
                iucns,
                khu_vuc_ngoai_vqg_kbt,
                khu_vuc_vqg_kbt,
                kingdom,
                kingdom_id,
                la_loai_dac_huu,
                loai_hien_trang,
                loai_hien_trang_id,
                loai_noi_bat,
                minh_hoa_attachments,
                mo_ta_dac_huu,
                nd64_id,
                nd84_id,
                nghi_dinhs,
                nguon_du_lieu,
                order,
                order_id,
                phylum_id,
                phylumn,
                provinces,
                sach_do_id,
                sach_dos,
                show_qrcode,
                sinh_canh_bi_chia_cat_suy_giam,
                sinh_canh_bi_chia_cat_suy_giam_id,
                su_suy_giam_quan_the_id,
                ten,
                ten_dia_phuong,
                ten_khoa_hoc,
                ten_tac_gia,
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
                updated_at,
                vung_dem_kbt,
                vung_loi_kbt
            }

            CheckUpdateAnimal(animal);

        } else {
            toastify('Dữ liệu không thoả mãn !');

        }
    }

    useEffect(() => {
        if (status) {
            setWidthTable('col-12 col-sm-12 col-md-11 col-xl-11 col-xxl-11 col-lg-11 py-3');
        } else {
            setWidthTable('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
        }

    }, [status, kingdomValue, phylumValue, classValue, familyValue, genusValue, orderValue, path,
        attachments,
        che_do_quan_lys,
        cite_id,
        classs,
        class_id,
        cong_bo,
        created_at,
        dac_diem_loai,
        dac_diem_nhan_dang,
        dac_diem_sinh_thai,
        danh_gia_so_luong_ca_the,
        dia_diem_bat_gap,
        family,
        family_id,
        genus,
        genus_id,
        gia_tri_loai,
        gia_tri_loais,
        he_sinh_thais,
        id,
        isTrusted,
        is_loai_dac_huu,
        iucn_id,
        iucns,
        khu_vuc_ngoai_vqg_kbt,
        khu_vuc_vqg_kbt,
        kingdom,
        kingdom_id,
        la_loai_dac_huu,
        loai_hien_trang,
        loai_hien_trang_id,
        loai_noi_bat,
        minh_hoa_attachments,
        mo_ta_dac_huu,
        nd64_id,
        nd84_id,
        nghi_dinhs,
        nguon_du_lieu,
        order,
        order_id,
        phylum_id,
        phylumn,
        provinces,
        sach_do_id,
        sach_dos,
        show_qrcode,
        sinh_canh_bi_chia_cat_suy_giam,
        sinh_canh_bi_chia_cat_suy_giam_id,
        su_suy_giam_quan_the_id,
        ten,
        ten_dia_phuong,
        ten_khoa_hoc,
        ten_tac_gia,
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
        updated_at,
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
                    <input type="text" placeholder="Tên" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" value={ten} onChange={e => setTen(e.target.value)} />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 my-1">
                    <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên khoa học <i className="text-danger">*</i></label>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                        <input type="text" placeholder="Tên khoa học" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" value={ten_khoa_hoc} onChange={e => setTen_khoa_hoc(e.target.value)} />
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-xl-1 col-xxl-1 col-lg-1 my-1"></div>
                <div className="col-5 col-sm-5 col-md-5 col-xl-5 col-xxl-5 col-lg-5 my-1">
                    <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên tác giả</label>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2 ">
                        <input type="text" placeholder="Tên tác giả" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" value={ten_tac_gia} onChange={e => setTen_tac_gia(e.target.value)} />
                    </div>
                </div>
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Tên địa phương</label>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                    <input type="text" placeholder="Tên địa phương" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" value={ten_dia_phuong} onChange={e => setTen_dia_phuong(e.target.value)} />
                </div>
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Nguồn dữ liệu </label>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 fonmInputAdd p-2">
                    <input type="text" placeholder="Nguồn dữ liệu" className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12" value={nguon_du_lieu} onChange={e => setNguon_du_lieu(e.target.value)} />
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
                                value={qrcode_color}
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
                    defaultInputValue={`${animal.kingdom.ten_khoa_hoc}-${animal.kingdom.ten}`}
                    placeholder='Giới'
                    defaultValue={kingdomValue}
                    onChange={setKinhdomValue}
                    options={options[0]}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"

                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Ngành <i className="text-danger">*</i></label>
                <Select
                    defaultInputValue={animal.phylumn.ten ? `${animal.phylumn.ten_khoa_hoc}-${animal.phylumn.ten}` : animal.phylumn.ten_khoa_hoc}
                    placeholder='Ngành'
                    defaultValue={phylumValue}
                    onChange={setPhylumValue}
                    options={options[1]}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Lớp<i className="text-danger">*</i></label>
                <Select
                    defaultInputValue={animal.class.ten ? `${animal.class.ten_khoa_hoc}-${animal.class.ten && animal.class.ten}` : animal.class.ten_khoa_hoc}
                    placeholder='Lớp'
                    defaultValue={classValue}
                    onChange={setClassValue}
                    options={options[2]}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Bộ <i className="text-danger">*</i></label>
                <Select
                    defaultInputValue={animal.order.ten ? `${animal.order.ten_khoa_hoc}-${animal.order.ten}` : animal.order.ten_khoa_hoc}
                    placeholder='Bộ'
                    defaultValue={orderValue}
                    onChange={setOrderValue}
                    options={options[3]}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Họ <i className="text-danger">*</i></label>
                <Select
                    defaultInputValue={animal.family.ten ? `${animal.family.ten_khoa_hoc}-${animal.family.ten && animal.family.ten}` : animal.family.ten}
                    placeholder='Họ'
                    defaultValue={familyValue}
                    onChange={setFamilyValue}
                    options={options[4]}
                    className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 p-2 fromAdd ">
                <label className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Chi <i className="text-danger">*</i></label>
                <Select
                    defaultInputValue={animal.genus.ten ? `${animal.genus.ten_khoa_hoc}-${animal.genus.ten && animal.genus.ten}` : animal.genus.ten}
                    placeholder='Chi'
                    defaultValue={genusValue}
                    onChange={setGenusValue}
                    options={options[5]}
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
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check

                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Suy Giảm Ít Nhất 50% Trong 10 Năm Hoặc Ba (03) Thế Hệ Tiếp Theo Tính Từ Thời Điểm Đánh Giá</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Mô Tả Chi Tiết Sự Suy Giảm Quần Thể</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả chi tiết" value={mo_ta_chi_tiet} />
                    </Form.Group>
                </Form>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Thông Tin Khác Về Sự Suy Giảm Quần Thể</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Thông tin khác" value={suy_giam_quan_the} />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2 border border-1 d-flex flex-wrap dangerAnimal">
                <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>Sinh Cảnh Bị Chia Cắt/Suy Giảm</strong></h5>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 ">- Nơi Cư Trú Hoặc Phân Bố Dưới 500 Km2 Và Quần Thể Bị Chia Cắt Nghiêm  Trọng</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 my-2"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Suy Giảm Liên Tục Về Khu Vực Phân Bố, Nơi Cư Trú</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 my-2"> <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Có"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Không"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                name='group1'
                                label="Không xác định"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form></div>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 ">- Mô Tả Chi Tiết Sinh Cảnh Bị Chia Cắt/Suy Giảm</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Mô tả chi tiết" value={mo_ta_chi_tiet} />
                    </Form.Group>
                </Form>
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">- Thông Tin Khác Về Sinh Cảnh Bị Chia Cắt/Suy Giảm</p>
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Thông tin khác" value={sinh_canh_bi_chia_cat_suy_giam} />
                    </Form.Group>
                </Form>
            </div>
            <hr className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"></hr>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex">
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2">

                    <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="textMin">Tình Trạng Buôn Bán Sử Dụng</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tình Trạng Buôn Bán Sử Dụng" onChange={e => setTinh_trang_buon_ban_su_dung(e.target.value)} value={tinh_trang_buon_ban_su_dung} />
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 p-2">
                    <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="textMin">Tình Trạng Khai Thác Săn Bắn</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tình Trạng Khai Thác Săn Bắn" value={tinh_trang_khai_thac_san_ban} onChange={e => setTinh_trang_khai_thac_san_ban(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-2">
                <Form className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Các Mối Đe Dọa Khác</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Các Mối Đe Dọa Khác" value={thong_tin_khac} />
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
                        <Form.Control as="textarea" rows={3} placeholder="Đặc điểm nhận dạng" onChange={e => setDac_diem_nhan_dang(e.target.value)} value={dac_diem_nhan_dang} />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 p-2">
                <p className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">Bộ sưu tập - Hình ảnh minh họa</p>
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex">
                    <label className="avatarAnimal" htmlFor="imgAvatar">+</label>
                    {path && <img src={path} alt='logo.png' className="imgAvatar mx-2" />}
                </div>
                <input type="file" id='imgAvatar' name="imgAvatar" hidden onChange={UpdateAvatar} />
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 px-3 d-flex flex-wrap">
            <h5 className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12"><strong>VI. Hiện trạng phân bố</strong></h5>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4">
                <Form.Label htmlFor="KBT" className="textMin">Khu Vực VQG, KBT</Form.Label>
                <Form.Control
                    value={khu_vuc_vqg_kbt}
                    onChange={e => setKhu_vuc_vqg_kbt(e.target.value)}
                    placeholder="Khu Vực VQG, KBT"
                    type="text"
                    id="KBT"
                />
                <Form.Label htmlFor="nKBT" className="textMin">Khu Vực Ngoài VQG/KBT</Form.Label>
                <Form.Control
                    value={khu_vuc_ngoai_vqg_kbt}
                    onChange={e => setKhu_vuc_ngoai_vqg_kbt(e.target.value)}
                    placeholder="Khu Vực Ngoài VQG/KBT"
                    type="text"
                    id="nKBT"
                />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4 px-2 d-flex">
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="p-3">
                            <Form.Check
                                className="my-4"
                                inline
                                label="Vùng lõi khu bảo tồn"
                                name="null"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                className="my-3"
                                inline
                                label="Vùng đệm khu bảo tồn"
                                name="null"
                                type={type}
                                id={`inline-${type}-2`}
                            />

                        </div>
                    ))}
                </Form>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 col-xxl-4 col-lg-4">
                <Form.Label htmlFor="KBTs" className="textMin">Tỉnh Thành Phân Bố</Form.Label>
                <Form.Control
                    value={tinh_thanh_id}
                    onClick={e => setTinh_thanh_id(e.target.value)}
                    placeholder="Tỉnh Thành Phân Bố"
                    type="text"
                    id="KBTs"
                />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                <Form.Label htmlFor="KBTs" className="textMin">Hệ sinh thái</Form.Label>
                <Form.Control
                    value={he_sinh_thais}
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
                    value={tong_so_quan_the}
                    onChange={e => setTong_so_quan_the(e.target.value)}
                    placeholder="Tổng Số Quần Thể"
                    type="text"
                />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textMin">Đánh Giá Số Lượng Cá Thể</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Dánh Giá Số Lượng Cá Thể" value={tong_so_ca_the} onChange={e => setTong_so_ca_the(e.target.value)} />
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
                    value={tong_so_ca_the_trong_quan_the}
                    onChange={e => setTong_so_ca_the_trong_quan_the(e.target.value)}
                    placeholder="Tổng Số Cá Thể Trong Quần Thể"
                    type="text"

                />
                <Form.Label className="textMin">Thời Gian Gần Nhất Xuất Hiện Trên Địa Bàn</Form.Label>
                <Form.Control
                    value={thoi_gian_gan_nhat_xuat_hien}
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
                    value={thong_tin_khac}
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
                        <div key={`inline-${type}`}>
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
                        <Form.Control as="textarea" rows={3} placeholder="Mô Tả Loài Đặc Hữu" value={mo_ta_dac_huu} onChange={e => setMo_ta_dac_huu(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 col-lg-6 px-3">

                <Form.Label className="textMin">Giá trị loài</Form.Label>
                <Form.Control
                    value={gia_tri_loai}
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
                    value={che_do_quan_lys}
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
                    <button className="col-2 col-sm-2 col-md-2 col-xl-2 col-xxl-2 p-1" id="btnAdd" onClick={HandleUpdate}>Cập nhật</button>
                </div>
            </div>
        </div>

    </div >);



}
export default UpdateAnimalId;
