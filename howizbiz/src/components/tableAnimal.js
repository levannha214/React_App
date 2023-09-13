import { useEffect, useState } from "react";
import '../style/table.css';
import SpeciesTable from "./speciesTable";
import TableUser from "./TableUser";
const TableAnimal = ({ status, table }) => {
    const [widthTable, setWidthTable] = useState('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
    useEffect(() => {
        if (status) {
            setWidthTable('col-12 col-sm-12 col-md-11 col-xl-11 col-xxl-11 col-lg-11 py-3');
        } else {
            setWidthTable('col-12 col-sm-12 col-md-8 col-xl-9 col-xxl-9 col-lg-9 py-3');
        }
    }, [status]);
    return (<div className={widthTable}>
        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex p-1">
            <span className="material-symbols-outlined mx-3 iconTable text-danger" >
                {table.icon}
            </span>
            <div className="d-flex p-2"><h4><strong>{table.name}</strong></h4></div>
        </div>
        {table.name === 'Loài nguy cấp quý hiếm' ? <SpeciesTable /> : <></>}
        {table.name === 'Quản lý người dùng' ? <TableUser /> : <></>}
    </div>)

}
export default TableAnimal;







