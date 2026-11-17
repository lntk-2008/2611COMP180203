const siteData = [
    {
        id: "dd-1",
        section: "destination",
        title: "Hồ Xuân Hương",
        category: "Thiên nhiên",
        location: "Trung tâm TP. Đà Lạt",
        shortDesc: "Trái tim xanh thơ mộng giữa lòng thành phố ngàn hoa với hàng thông và vườn hoa bao quanh.",
        fullDesc: "Hồ Xuân Hương là hồ nhân tạo rộng khoảng 32 ha nằm ngay trung tâm thành phố Đà Lạt. Đây là địa điểm lý tưởng để tản bộ, đạp vịt, ngắm hoàng hôn và tận hưởng không khí trong lành đặc trưng của cao nguyên Lâm Viên.",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Giờ mở cửa: Tự do cả ngày",
            "Chi phí: Miễn phí tham quan",
            "Thời điểm đẹp nhất: Sáng sớm (5h30 - 7h30) hoặc hoàng hôn",
            "Nguồn cập nhật: Cổng TTĐT Đà Lạt (11/2026)"
        ]
    },
    {
        id: "dd-2",
        section: "destination",
        title: "Ga Đà Lạt Cổ",
        category: "Kiến trúc",
        location: "Phường 10, TP. Đà Lạt",
        shortDesc: "Nhà ga xe lửa cổ kính nhất Đông Dương với kiến trúc ba mái chóp mô phỏng đỉnh Langbiang.",
        fullDesc: "Được xây dựng từ năm 1932 bởi kiến trúc sư người Pháp, Ga Đà Lạt mang đậm dấu ấn kiến trúc Art Deco kết hợp nhà rông Tây Nguyên. Du khách có thể trải nghiệm tuyến tàu hỏa cổ chạy đến Trại Mát.",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Giờ mở cửa: 07:30 - 17:00 hàng ngày",
            "Giá vé vào cổng: Khoảng 5.000đ - 50.000đ",
            "Lưu ý: Nên đặt vé tàu đi Trại Mát trước vào cuối tuần",
            "Nguồn cập nhật: Di tích Kiến trúc Quốc gia (11/2026)"
        ]
    },
    {
        id: "dd-3",
        section: "destination",
        title: "Thác Dambri Bảo Lộc",
        category: "Sinh thái",
        location: "TP. Bảo Lộc, Lâm Đồng",
        shortDesc: "Ngọn thác hùng vĩ cao hơn 60m ẩn mình giữa khu rừng nguyên sinh xanh mát.",
        fullDesc: "Khu du lịch sinh thái Thác Dambri nổi bật với dòng thác trắng xóa đổ từ độ cao 60m. Ngoài chiêm ngưỡng thác nước, du khách còn được trải nghiệm xe trượt ống xuyên rừng và khám phá văn hóa bản địa Châu Mạ.",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Giờ mở cửa: 07:00 - 17:00",
            "Khoảng cách: Cách trung tâm Bảo Lộc 18km",
            "Trang phục: Mang giày thể thao chống trơn trượt",
            "Nguồn cập nhật: KDL Sinh thái Dambri (11/2026)"
        ]
    },
    {
        id: "dd-4",
        section: "destination",
        title: "Đỉnh Núi Langbiang",
        category: "Trải nghiệm",
        location: "Huyện Lạc Dương, Lâm Đồng",
        shortDesc: "Nóc nhà của Đà Lạt với trải nghiệm đi xe jeep, săn mây và ngắm toàn cảnh Suối Vàng.",
        fullDesc: "Nằm cách trung tâm Đà Lạt 12km về phía Bắc, Langbiang gắn liền với truyền thuyết tình yêu lãng mạn của chàng K'lang và nàng H'biang. Đây là điểm trekking và ngắm toàn cảnh cao nguyên tuyệt đẹp.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Độ cao: 2.167m so với mực nước biển",
            "Hoạt động: Trekking, đi xe jeep, giao lưu cồng chiêng",
            "Lưu ý: Mang theo áo ấm vì gió trên đỉnh khá lạnh",
            "Nguồn cập nhật: Khu DTSQ Thế giới Langbiang (11/2026)"
        ]
    },
    {
        id: "lh-1",
        section: "festival",
        title: "Festival Hoa Đà Lạt",
        category: "Lễ hội văn hóa",
        location: "TP. Đà Lạt & TP. Bảo Lộc",
        shortDesc: "Sự kiện văn hóa - du lịch lớn nhất tỉnh tôn vinh nghề trồng hoa và trà truyền thống.",
        fullDesc: "Festival Hoa Đà Lạt được tổ chức định kỳ 2 năm một lần với nhiều không gian hoa nghệ thuật quanh Hồ Xuân Hương, diễu hành xe hoa, triển lãm sinh vật cảnh và tuần lễ văn hóa trà Bảo Lộc.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Thời gian: Tháng 12 (định kỳ 2 năm/lần)",
            "Địa điểm chính: Quảng trường Lâm Viên & Hồ Xuân Hương",
            "Lưu ý khi tham gia: Đặt phòng lưu trú sớm từ 1-2 tháng",
            "Nguồn cập nhật: UBND Tỉnh Lâm Đồng (11/2026)"
        ]
    },
    {
        id: "lh-2",
        section: "festival",
        title: "Không Gian Văn Hóa Cồng Chiêng Tây Nguyên",
        category: "Di sản văn hóa",
        location: "Xã Lát, Huyện Lạc Dương",
        shortDesc: "Di sản văn hóa phi vật thể đại diện của nhân loại với tiếng chiêng, điệu múa xoang bên bếp lửa.",
        fullDesc: "Du khách tham gia đêm giao lưu cồng chiêng sẽ được hòa mình vào âm hưởng núi rừng Tây Nguyên, thưởng thức rượu cần và nghe già làng kể sử thi của người K'Ho bản địa.",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Thời gian: Các buổi tối từ 18:30 - 21:00",
            "Địa điểm: Dưới chân núi Langbiang",
            "Lưu ý: Tôn trọng phong tục tập quán và trang phục truyền thống địa phương",
            "Nguồn cập nhật: Phòng Văn hóa Lạc Dương (11/2026)"
        ]
    },
    {
        id: "at-1",
        section: "food",
        title: "Lẩu Gà Lá É",
        category: "Món chính",
        location: "Phổ biến khắp TP. Đà Lạt",
        shortDesc: "Nước dùng ngọt thanh hòa quyện vị thơm nồng nhẹ của lá é, măng tươi và thịt gà đồi săn chắc.",
        fullDesc: "Lẩu gà lá é là món ăn làm ấm lòng mọi du khách trong những buổi tối se lạnh tại Lâm Đồng. Lá é nhúng chín tới có vị bùi bùi, hơi cay nhẹ rất kích thích vị giác.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Phân loại: Món chính",
            "Mức giá tham khảo: 250.000đ - 350.000đ/nồi",
            "Gợi ý thưởng thức: Dùng kèm bún tươi và muối tiêu chanh ớt xiêm xanh"
        ]
    },
    {
        id: "at-2",
        section: "food",
        title: "Bánh Căn Đà Lạt",
        category: "Món nhẹ",
        location: "Đường Tăng Bạt Hổ, Nhà Chung",
        shortDesc: "Những chiếc bánh bột gạo nướng giòn trong khuôn đất nung ăn kèm nước mắm xíu mại nóng hổi.",
        fullDesc: "Bánh căn có nhân trứng cút, trứng gà hoặc hải sản, nướng trên bếp than hồng. Điểm nhấn là chén nước chấm hành phi cùng viên xíu mại mềm thơm béo ngậy.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Phân loại: Món nhẹ / Ăn sáng",
            "Mức giá tham khảo: 30.000đ - 50.000đ/phần",
            "Thời điểm ngon nhất: Buổi sáng sớm hoặc chiều tối"
        ]
    },
    {
        id: "at-3",
        section: "food",
        title: "Trà Oolong & Trà Bảo Lộc",
        category: "Đồ uống",
        location: "TP. Bảo Lộc & Cầu Đất",
        shortDesc: "Thức uống tinh túy từ vùng cao nguyên trà nổi tiếng với hương thơm thanh khiết, hậu vị ngọt.",
        fullDesc: "Nhờ thổ nhưỡng và khí hậu mát mẻ quanh năm, trà Bảo Lộc và trà Cầu Đất có chất lượng hảo hạng, giúp thư giãn tinh thần và tốt cho sức khỏe.",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Phân loại: Đồ uống",
            "Nhiệt độ pha chuẩn: 85°C - 90°C",
            "Gợi ý: Thưởng thức trà nóng vào buổi sáng tại các đồi chè"
        ]
    },
    {
        id: "at-4",
        section: "food",
        title: "Hồng Treo Gió & Mứt Đặc Sản",
        category: "Đặc sản làm quà",
        location: "Chợ Đà Lạt & Các cơ sở vườn hồng",
        shortDesc: "Hồng giòn được sấy khô tự nhiên bằng gió cao nguyên, dẻo mềm và tươm mật ngọt lịm.",
        fullDesc: "Áp dụng công nghệ sấy treo gió Nhật Bản, những quả hồng Đà Lạt giữ nguyên hương vị tự nhiên, không chất bảo quản, là món quà biếu ý nghĩa sau mỗi chuyến đi.",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80",
        usefulInfo: [
            "Phân loại: Đặc sản làm quà",
            "Bảo quản: Ngăn mát hoặc ngăn đông tủ lạnh để giữ độ dẻo",
            "Mùa hồng chín: Tháng 9 đến tháng 12 hàng năm"
        ]
    }
];

function normalizeVietnamese(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/đ/g, "d")
        .trim();
}

let currentSearchKeyword = "";
let currentDestFilter = "all";
let currentFoodFilter = "all";

function renderAllSections() {
    const normalizedQuery = normalizeVietnamese(currentSearchKeyword);

    const filterBySearch = (item) => {
        if (!normalizedQuery) return true;
        const combinedText = normalizeVietnamese(
            `${item.title} ${item.shortDesc} ${item.location} ${item.category}`
        );
        return combinedText.includes(normalizedQuery);
    };

    const destItems = siteData.filter(item =>
        item.section === "destination" &&
        (currentDestFilter === "all" || item.category === currentDestFilter) &&
        filterBySearch(item)
    );
    renderCards("destinationsContainer", destItems, "col-md-6 col-lg-3");

    const festItems = siteData.filter(item =>
        item.section === "festival" &&
        filterBySearch(item)
    );
    renderCards("festivalsContainer", festItems, "col-md-6");

    const foodItems = siteData.filter(item =>
        item.section === "food" &&
        (currentFoodFilter === "all" || item.category === currentFoodFilter) &&
        filterBySearch(item)
    );
    renderCards("foodContainer", foodItems, "col-md-6 col-lg-3");

    const totalFound = destItems.length + festItems.length + foodItems.length;
    const statusEl = document.getElementById("searchStatusText");
    if (normalizedQuery) {
        statusEl.innerHTML = `Tìm thấy <strong>${totalFound}</strong> kết quả phù hợp với từ khóa "<em>${currentSearchKeyword}</em>".`;
    } else {
        statusEl.textContent = "Nhập từ khóa để lọc trực tiếp nội dung bên dưới.";
    }
}

function renderCards(containerId, items, colClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-light border text-center py-4 text-muted">
                    <i class="bi bi-emoji-neutral fs-4 d-block mb-1"></i>
                    Không tìm thấy nội dung phù hợp với điều kiện lọc hiện tại.
                </div>
            </div>`;
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="${colClass}">
            <div class="card h-100 border-0 shadow-sm rounded-3 hover-card" tabindex="0" role="button" onclick="openDetailModal('${item.id}')" onkeypress="if(event.key==='Enter') openDetailModal('${item.id}')">
                <img src="${item.image}" class="card-img-top card-img-top-fixed rounded-top-3" alt="${item.title}">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-leaf">${item.category}</span>
                        <small class="text-muted"><i class="bi bi-geo-alt"></i> ${item.location}</small>
                    </div>
                    <h5 class="card-title fw-bold text-pine">${item.title}</h5>
                    <p class="card-text text-secondary small flex-grow-1">${item.shortDesc}</p>
                    <div class="mt-2 text-end">
                        <span class="text-pine fw-semibold small">Xem chi tiết <i class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

function openDetailModal(itemId) {
    const item = siteData.find(d => d.id === itemId);
    if (!item) return;

    document.getElementById("detailModalLabel").textContent = item.title;
    document.getElementById("detailImg").src = item.image;
    document.getElementById("detailImg").alt = item.title;
    document.getElementById("detailBadge").textContent = `${item.category} • ${item.location}`;
    document.getElementById("detailTitle").textContent = item.title;
    document.getElementById("detailDesc").textContent = item.fullDesc;

    const infoList = document.getElementById("detailUsefulInfo");
    infoList.innerHTML = item.usefulInfo.map(info => `<li class="mb-2"><i class="bi bi-check2-circle text-leaf me-1"></i> ${info}</li>`).join("");

    const relatedItems = siteData.filter(d => d.section === item.section && d.id !== item.id).slice(0, 3);
    const relatedContainer = document.getElementById("detailRelatedList");
    relatedContainer.innerHTML = relatedItems.map(rel => `
        <button type="button" class="btn btn-outline-secondary text-start p-2 d-flex align-items-center gap-2" onclick="openDetailModal('${rel.id}')">
            <img src="${rel.image}" alt="${rel.title}" class="rounded" style="width: 50px; height: 50px; object-fit: cover;">
            <div>
                <div class="fw-bold text-pine small">${rel.title}</div>
                <small class="text-muted">${rel.category}</small>
            </div>
        </button>
    `).join("");

    const modalEl = document.getElementById("detailModal");
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstance.show();
}

document.addEventListener("DOMContentLoaded", () => {
    renderAllSections();

    const searchInput = document.getElementById("globalSearchInput");
    searchInput.addEventListener("input", (e) => {
        currentSearchKeyword = e.target.value;
        renderAllSections();
    });

    document.getElementById("clearSearchBtn").addEventListener("click", () => {
        searchInput.value = "";
        currentSearchKeyword = "";
        renderAllSections();
        searchInput.focus();
    });

    document.querySelectorAll("#destinationFilters button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#destinationFilters button").forEach(b => {
                b.classList.remove("btn-pine", "active");
                b.classList.add("btn-outline-pine");
            });
            btn.classList.remove("btn-outline-pine");
            btn.classList.add("btn-pine", "active");
            currentDestFilter = btn.getAttribute("data-filter");
            renderAllSections();
        });
    });

    document.querySelectorAll("#foodFilters button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#foodFilters button").forEach(b => {
                b.classList.remove("btn-pine", "active");
                b.classList.add("btn-outline-pine");
            });
            btn.classList.remove("btn-outline-pine");
            btn.classList.add("btn-pine", "active");
            currentFoodFilter = btn.getAttribute("data-filter");
            renderAllSections();
        });
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add("was-validated");
            return;
        }
        const name = document.getElementById("contactName").value;
        const alertBox = document.getElementById("contactAlert");
        alertBox.textContent = `Cảm ơn ${name}! Góp ý của bạn đã được ghi nhận thành công (mức mô phỏng phía trình duyệt).`;
        alertBox.classList.remove("d-none");
        contactForm.reset();
        contactForm.classList.remove("was-validated");
    });

    function showAuthMessage(message, type = "success") {
        const authAlert = document.getElementById("authAlert");
        authAlert.className = `alert alert-${type} small`;
        authAlert.textContent = message;
        authAlert.classList.remove("d-none");
    }

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!loginForm.checkValidity()) {
            loginForm.classList.add("was-validated");
            return;
        }
        const email = document.getElementById("loginEmail").value;
        showAuthMessage(`Đăng nhập mô phỏng thành công với tài khoản ${email}!`, "success");
        loginForm.reset();
        loginForm.classList.remove("was-validated");
    });

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const pw = document.getElementById("regPassword");
        const confirmPw = document.getElementById("regConfirmPassword");

        if (pw.value !== confirmPw.value) {
            confirmPw.setCustomValidity("Mật khẩu không khớp");
        } else {
            confirmPw.setCustomValidity("");
        }

        if (!registerForm.checkValidity()) {
            registerForm.classList.add("was-validated");
            return;
        }

        showAuthMessage("Đăng ký tài khoản mô phỏng thành công! Bạn có thể chuyển sang tab Đăng nhập.", "success");
        registerForm.reset();
        registerForm.classList.remove("was-validated");
    });

    const changePwForm = document.getElementById("changePwForm");
    changePwForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newPw = document.getElementById("newPassword");
        const confirmNewPw = document.getElementById("confirmNewPassword");

        if (newPw.value !== confirmNewPw.value) {
            confirmNewPw.setCustomValidity("Mật khẩu mới không khớp");
        } else {
            confirmNewPw.setCustomValidity("");
        }

        if (!changePwForm.checkValidity()) {
            changePwForm.classList.add("was-validated");
            return;
        }

        showAuthMessage("Đổi mật khẩu mô phỏng thành công!", "success");
        changePwForm.reset();
        changePwForm.classList.remove("was-validated");
    });
});