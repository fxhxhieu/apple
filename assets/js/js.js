


// CUON DAU TRANG
const cuondau = document.getElementById('cuondau');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        cuondau.style.display = 'block';
    } else {
        cuondau.style.display = 'none';
    }
});

cuondau.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// HIEU UNG CHAY CHU
const chaychu = document.querySelectorAll(".hieuung");

const ob1 = new IntersectionObserver((h) => {
    h.forEach((p) => {
        if (p.isIntersecting) {
            p.target.classList.add("show");
        }
        else {
            p.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.3
});

chaychu.forEach(el => ob1.observe(el));

// PHAN SAN PHAM
const dlanh = [
    {
        id: 'black',
        img1: 'https://shopdunk.com/images/thumbs/0018632_space-black_550.jpeg',
        img2: 'https://shopdunk.com/images/thumbs/0018633_space-black_550.jpeg',
        img3: 'https://shopdunk.com/images/thumbs/0018634_space-black_550.jpeg',
        img4: 'https://shopdunk.com/images/thumbs/0018635_space-black_550.jpeg',
        img5: 'https://shopdunk.com/images/thumbs/0018636_space-black_550.jpeg',
        img6: 'https://shopdunk.com/images/thumbs/0018637_space-black_550.jpeg',
        img7: 'https://shopdunk.com/images/thumbs/0018638_space-black_550.jpeg',
        img8: 'https://shopdunk.com/images/thumbs/0018639_space-black_550.jpeg',
    },
    {
        id: 'white',
        img1: 'https://shopdunk.com/images/thumbs/0018642_silver_550.jpeg',
        img2: 'https://shopdunk.com/images/thumbs/0018643_silver_550.jpeg',
        img3: 'https://shopdunk.com/images/thumbs/0018644_silver_550.jpeg',
        img4: 'https://shopdunk.com/images/thumbs/0018650_silver_550.jpeg',
        img5: 'https://shopdunk.com/images/thumbs/0018646_silver_550.jpeg',
        img6: 'https://shopdunk.com/images/thumbs/0018647_silver_550.jpeg',
        img7: 'https://shopdunk.com/images/thumbs/0018648_silver_550.jpeg',
        img8: 'https://shopdunk.com/images/thumbs/0018649_silver_550.jpeg',
    },
    {
        id: 'yellow',
        img1: 'https://shopdunk.com/images/thumbs/0018653_gold_550.jpeg',
        img2: 'https://shopdunk.com/images/thumbs/0018654_gold_550.jpeg',
        img3: 'https://shopdunk.com/images/thumbs/0018655_gold_550.jpeg',
        img4: 'https://shopdunk.com/images/thumbs/0018656_gold_550.jpeg',
        img5: 'https://shopdunk.com/images/thumbs/0018657_gold_550.jpeg',
        img6: 'https://shopdunk.com/images/thumbs/0018658_gold_550.jpeg',
        img7: 'https://shopdunk.com/images/thumbs/0018659_gold_550.jpeg',
        img8: 'https://shopdunk.com/images/thumbs/0018660_gold_550.jpeg'

    },

]
const duLieu = {
    tenGoc: "iPhone 15 Pro Max",
    giaca: {
        "128GB": { giam: "26.515.000₫", goc: "34.990.000₫" },
        "256GB": { giam: "29.000.000₫", goc: "37.990.000₫" },
        "512GB": { giam: "32.000.000₫", goc: "41.990.000₫" },
        "1T": { giam: "36.000.000₫", goc: "45.990.000₫" }
    },
};


const DL = document.querySelectorAll(".dungluong")
const MS = document.querySelectorAll(".mausac")
const tenmausac = document.querySelector(".sanpham_mau_title")
const cu = document.querySelector(".giacu")
const sale = document.querySelector(".giasale")
const ten = document.querySelector(".ten_sanpham")
const carousel = document.querySelector(".carousel-inner")

DL.forEach(dl => {
    dl.addEventListener("click", () => {
        document.querySelector(".dungluong.active1").classList.remove("active1")
        dl.classList.add("active1")


        const tendl = dl.innerText.trim()
        ten.innerText = `${duLieu.tenGoc} ${tendl}`

        // sale.innerText = duLieu.giaca[dungLuong].giam;
        // cu.innerText = duLieu.giaca[dungLuong].goc;
        const gia = duLieu.giaca[tendl];
        if (gia) {
            sale.innerText = gia.giam;
            cu.innerText = gia.goc;
        }
    })

})

MS.forEach(ms => {
    ms.addEventListener("click", () => {
        document.querySelector(".mausac.border-color").classList.remove("border", "border-color")
        ms.classList.add("border", "border-color")


        const tenms = ms.getAttribute("data-name");
        tenmausac.innerText = `Màu sắc: ${tenms}`;


        const layclass = Array.from(ms.classList);
        const idmau = layclass.find(c => ['black', 'white', 'yellow'].includes(c));

        // 4. Tìm dữ liệu ảnh trong mảng dlanh dựa trên ID màu
        const a = dlanh.find(tim => tim.id === idmau);

        if (a) {
            let htmml = "";

            // Duyệt qua các thuộc tính từ img1 đến img8 trong object ảnh
            // Chúng ta dùng vòng lặp từ 1-8 để đảm bảo thứ tự ảnh
            for (let i = 1; i <= 8; i++) {
                const linkAnh = a[`img${i}`];
                
                // Nếu có link ảnh thì mới tạo thẻ HTML (đề phòng trường hợp màu có ít hơn 8 ảnh)
                if (linkAnh) {
                    htmml += `
                        <div class="carousel-item ${i === 1 ? 'active' : ''}">
                            <img src="${linkAnh}" class="d-block w-100" alt="iPhone 15 Pro Max ${tenms}">
                        </div>
                    `;
                }
            }

            // 5. Cập nhật lại toàn bộ nội dung trong carousel-inner
            carousel.innerHTML = htmml;
        }

    })

})
