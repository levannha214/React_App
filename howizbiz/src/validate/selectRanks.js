const SelectRanks = (arr) => {
    const filterRanks = [[], [], [], [], [], []];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].rank) {
            case 'Kingdom':
                filterRanks[0].push({
                    value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                    label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                    uuid: arr[i].uuid,
                    type: arr[i].type
                });

                break;
            case 'Phylum':
                if (arr[i].ten) {
                    filterRanks[1].push({
                        value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                } else {
                    filterRanks[1].push({
                        value: arr[i].ten_khoa_hoc,
                        label: arr[i].ten_khoa_hoc,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                }
                break;
            case 'Class':
                if (arr[i].ten) {
                    filterRanks[2].push({
                        value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                } else {
                    filterRanks[2].push({
                        value: arr[i].ten_khoa_hoc,
                        label: arr[i].ten_khoa_hoc,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                }
                break;
            case 'Order':
                if (arr[i].ten) {
                    filterRanks[3].push({
                        value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                } else {
                    filterRanks[3].push({
                        value: arr[i].ten_khoa_hoc,
                        label: arr[i].ten_khoa_hoc,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                }
                break;
            case 'Family':
                if (arr[i].ten) {
                    filterRanks[4].push({
                        value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                } else {
                    filterRanks[4].push({
                        value: arr[i].ten_khoa_hoc,
                        label: arr[i].ten_khoa_hoc,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                }
                break;
            case 'Genus':
                if (arr[i].ten) {
                    filterRanks[5].push({
                        value: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                } else {
                    filterRanks[5].push({
                        value: arr[i].ten_khoa_hoc,
                        label: arr[i].ten_khoa_hoc,
                        parent_id: arr[i].parent_id,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });
                }
                break;
        }

    }
    return filterRanks;

}
const FilterList = (arr, id) => {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent_id === id) {
            list.push(arr[i]);
        }
    }
    return list;
}
export { SelectRanks, FilterList };