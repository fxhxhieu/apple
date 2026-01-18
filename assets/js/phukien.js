function chuyen_tab(e, loai) {
    // Ẩn tất cả nội dung tab
    const tat_ca_nd = document.querySelectorAll('.nd_tab');
    tat_ca_nd.forEach(nd => nd.classList.remove('hien_thi'));

    // Bỏ trạng thái active của các nút
    const tat_ca_btn = document.querySelectorAll('.tab_btn');
    tat_ca_btn.forEach(btn => btn.classList.remove('active'));

    // Hiện tab được chọn
    document.getElementById('tab_' + loai).classList.add('hien_thi');

    // Thêm active cho nút vừa bấm
    e.currentTarget.classList.add('active');
}

// tab
function chuyen_tab(event, tabID) {
    const tatCaLists = document.querySelectorAll('.ul_tab');
    const tatCaBtns = document.querySelectorAll('.tab_btn');

    // 1. Ẩn tất cả danh sách bằng cách dùng style trực tiếp hoặc class
    tatCaLists.forEach(list => {
        list.style.display = 'none'; 
    });

    // 2. Hiển thị danh sách được chọn (ghép class: .tab_sp hoặc .tab_tl)
    const listChon = document.querySelector('.' + tabID);
    if (listChon) {
        listChon.style.display = 'flex';
    }

    // 3. Cập nhật nút bấm
    tatCaBtns.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}