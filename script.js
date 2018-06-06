var input_name = document.getElementById("input-name");
var subject = document.getElementById("select-subject");
var output_text = "hihi";
var output_mark;
var link = document.createElement("a");
var rand = Math.floor(Math.random() * 26) + 11;

var waiting = document.createElement("div");
waiting.id = "waiting";
waiting.innerHTML = "<h3>Đang nhìn thấu 14.000.605 tương lai</h3>" +
"<div class='bouncing-loader'><div></div><div></div><div></div></div>";

function Mark() {
    this.text = [],
    this.initText = function(toan, van, anh, ly, hoa, sinh, su, dia, theduc) {
        this.text["toan"] = toan;
        this.text["van"] = van;
        this.text["anh"] = anh;
        this.text["ly"] = ly;
        this.text["hoa"] = hoa;
        this.text["sinh"] = sinh;
        this.text["su"] = su;
        this.text["dia"] = dia;
        this.text["theduc"] = theduc;
    }
}

var low = new Mark();
var med = new Mark();
var high = new Mark();
low.initText(   "Nguyên nhân điểm thấp: \nQuên mang CASIO vào phòng thi", 
                "Đề thi môn văn: \"Phân tích mối quan hệ giữa 2 nhà thơ Xuân Quỳnh và Huy Cận\"",
                "Choose same meaning word with \"potang ina mo bo bo\"",
                "Câu cho điểm: Áp dụng công thức De Broglie và hệ thức Heisenberg để tính tuổi thọ của bạn",
                "Câu gỡ điểm - Cân bằng phương trình:\n\n H2 + O2 → PENIS",
                "Gặp câu này nộp bài luôn vì quá đau lòng: Xác định mối quan hệ huyết thống của em với bác hàng xóm tên Minh",
                "Câu ăn điểm: Tổng ngày sinh của Marx và Lenin quy đổi sang hệ Hexa là bao nhiêu?",
                "Câu hỏi ngôi sao hy vọng: Quan điểm của em về vấn đề Đặc Khu Kinh Tế (j4f, not triggered)",
                "Không vượt qua bài kiểm tra tâm sinh lý tuổi dậy thì");

med.initText(   "Làm tất cả các câu điểm 8 9 10. Tuy nhiên buồn ỉa quá xin nộp bài sớm, quên chưa khoanh vào bài", 
                "Phân tích rất sâu sắc nhân vật Thúy Kiều, tuy nhiên viết nhầm tên tác phẩm là \"Làm đĩ\" của Vũ Trọng Phụng nên bị trừ điểm đạo đức.",
                "Bài luận chứa những nội dung nhạy cảm như BDSM, BJ, Doggy nên điểm không có được cao",
                "Quên mất công thức ƛ = v.t nên bỏ mất một số câu đáng tiếc",
                "Đề chứa quá nhiều kiến thức thực tiễn, như là hỏi thành phần hóa học của gàu chẳng hạn, gây khó khăn cho người thi",
                "Chỉ làm được các câu liên quan đến quan hệ nam nữ và sinh đẻ nên điểm thấp",
                "Nhầm sinh nhật Bác Hồ với ngày giải phóng miền Nam",
                "Chọn nhầm đảo Hải Nam là một trong số địa điểm du lịch đắt khách của nước ta",
                "Điểm tương ứng bằng độ dài của ciu theo centimet (nếu là nam giới)");

high.initText(  "Làm xong bài còn dư 60 phút, ngồi đánh caro với bạn bàn bên, xin ra ngoài đái ỉa. Khi hết giờ còn giúp giám thị thu bài cho các bạn.", 
                "Trúng tủ đề \"Phân tích nhân vật Chí Phèo\" nhờ kỹ năng mặt dày ăn hôi đồ ăn canteen của bạn bè đã ăn sâu vào máu",
                "Khoanh lụi trúng 8 điểm vì trước khi thi đã càu thần Thìa và thần Xoài phù hộ",
                "Vận dụng tối đa kinh nghiệm đổ đèo leo núi khi đi phượt để làm các bài tập tính chuyển động trên mặt phẳng nghiêng có ma sát",
                "Phải giấu tài là giỏi hóa vì sợ bị bạn bé xa lánh, đến khi thi mới dám bộc lộ",
                "Nhắm mắt cũng đoán được bạn thi Y Hà Nội, nhưng Toán 10 Hóa 10 nữa hẵng mong đỗ, nhá!",
                "Có họ hàng với cụ Lê Văn Lan, thấm nhuần truyền thống yêu nước của dân tộc",
                "Làm được nhiều câu hỏi hóc búa về các vấn đề chủ quyền biển đảo (hiểu biết thông qua các bài share trên các page facebook)",
                "Được miễn học thể khi lên đại học");                

function generate() {
    if (input_name.value == "") {
        swal({
            icon: "error",
            title: "Kimi no na wa?",
            text: "Nhập tên để tôi tiên đoán điểm cho bạn nhé!",
            button: true,
        })
        return;
    }
    else if (input_name.value.length < 8) {
        swal({
            icon: "warning",
            title: "Too short!",
            text: "Nhập tên đầy đủ để tiên đoán chính xác hơn nhé!",
            button: true,
        })
        return;
    }
    var num = toNumber(subject.value) % rand + toNumber((input_name.value).toUpperCase());
    output_mark = num % 11;
    if (output_mark > 8) {
        output_text = high.text[subject.value];
    }
    else if (output_mark > 5) {
        output_text = med.text[subject.value];
    } 
    else {
        output_text = low.text[subject.value];
    }

    setTimeout(function() {
        var swal_div = document.querySelector(".swal-modal");
        var swal_text = document.querySelector(".swal-text");
        swal_div.appendChild(waiting);
        swal_text.innerHTML = "Đang sử dụng Time stone <br> nhìn thấu <span id='count'></span> tương lai";
        var count = 13999999;
        var count_div = document.querySelector("#count");
        var timer = setInterval(function() {
            count++;
            count_div.innerHTML = count.toLocaleString('de-DE');
            if (count == 14000605) {
                clearInterval(timer);
            }
        }, 1);
        
    }, 100);

    swal({
        title: "Đang tiên đoán",
        text: " ",
        buttons: false,
        closeOnClickOutside: false,
        timer: 3000,
    }).then(function() {
        setTimeout(function() {
            html2canvas(document.querySelector(".swal-modal")).then(canvas => {
                var base64 = canvas.toDataURL("image/png");
                link.setAttribute("href", base64);
                link.setAttribute("download", "Tien-doan-diem-thi-" + subject.value);
            });
        }, 500);
    
        swal({
            title: output_mark + " ĐIỂM",
            text: "Môn " + subject.options[subject.selectedIndex].innerHTML + "\n\n" + output_text,
            buttons: [true, "Lưu ảnh"],
            closeOnClickOutside: false,
        })
        .then((capture) => {
            if (capture) {
                link.click();
                swal({
                    title: "Đã lưu ảnh!",
                    text: "Kết quả tiên đoán đã được lưu. \nShare lên khoe bạn bè ngay nhé!\n\nKèm link:\n https://",  
                    icon: "success",
                });
                
            } else {
                swal("Thử tiên đoán những môn khác nữa nhé!");
            }
        });
    });
    
    
}

function toNumber(str) {
    var result = 2611;
    for (var i = 0; i < str.length; i++) {
        result += str[i].charCodeAt(0);
    }
    return result;
}
