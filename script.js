var name = document.getElementById("input-name");
var subject = document.getElementById("select-subject");
var subj;

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
var medium = new Mark();
var high = new Mark();
low.initText(   "Nguyên nhân điểm thấp: quên mang CASIO vào phòng thi", 
                "Đề thi môn văn: \"Phân tích mối quan hệ giữa 2 nhà thơ Xuân Quỳnh và Huy Cận\"",
                "Choose same meaning word with \"potang ina mo bo bo\"",
                "Câu cho điểm: Áp dụng công thức De Broglie và hệ thức Heisenberg để tính tuổi thọ của bạn",
                "Cân bằng phương trình: H2 + O2 = PENIS",
                "Câu điểm 6: Xác định mối quan hệ huyết thống của em với hàng xóm xung quanh",
                "Câu ăn điểm: Tổng ngày sinh của Marx và Lenin quy đổi sang hệ Hexa là bao nhiêu?",
                "Câu hỏi ngôi sao hy vọng: Quan điểm của em về vấn đề Đặc Khu Kinh Tế (j4f, not triggered)",
                "Không vượt qua bài kiểm tra tâm sinh lý tuổi dậy thì");


function generate() {
    subj = subject.value;
    

}
alert(name.value.hash());