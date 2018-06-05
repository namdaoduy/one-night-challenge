var input_name = document.getElementById("input-name");
var subject = document.getElementById("select-subject");
var output_text = "hihi";
var output_mark;
var rand = Math.floor(Math.random() * 26) + 11;

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
low.initText(   "Nguyên nhân điểm thấp: quên mang CASIO vào phòng thi", 
                "Đề thi môn văn: \"Phân tích mối quan hệ giữa 2 nhà thơ Xuân Quỳnh và Huy Cận\"",
                "Choose same meaning word with \"potang ina mo bo bo\"",
                "Câu cho điểm: Áp dụng công thức De Broglie và hệ thức Heisenberg để tính tuổi thọ của bạn",
                "Câu gỡ điểm: cân bằng phương trình: H2 + O2 = PENIS",
                "Câu điểm 6: Xác định mối quan hệ huyết thống của em với hàng xóm xung quanh",
                "Câu ăn điểm: Tổng ngày sinh của Marx và Lenin quy đổi sang hệ Hexa là bao nhiêu?",
                "Câu hỏi ngôi sao hy vọng: Quan điểm của em về vấn đề Đặc Khu Kinh Tế (j4f, not triggered)",
                "Không vượt qua bài kiểm tra tâm sinh lý tuổi dậy thì");

med.initText(   "Làm tất cả các câu điểm 8 9 10. Tuy nhiên buồn ỉa quá xin nộp bài sớm, quên chưa khoanh vào bài", 
                "Phân tích rất sâu sắc nhân vật Thúy Kiều, tuy nhiên viết nhầm tên tác phẩm là \"Làm đĩ\" của Vũ Trọng Phụng nên bị trừ điểm đạo đức.",
                "Choose same meaning word with \"potang ina mo bo bo\"",
                "Câu cho điểm: Áp dụng công thức De Broglie và hệ thức Heisenberg để tính tuổi thọ của bạn",
                "Câu gỡ điểm: cân bằng phương trình: H2 + O2 = PENIS",
                "Câu điểm 6: Xác định mối quan hệ huyết thống của em với hàng xóm xung quanh",
                "Câu ăn điểm: Tổng ngày sinh của Marx và Lenin quy đổi sang hệ Hexa là bao nhiêu?",
                "Câu hỏi ngôi sao hy vọng: Quan điểm của em về vấn đề Đặc Khu Kinh Tế (j4f, not triggered)",
                "Không vượt qua bài kiểm tra tâm sinh lý tuổi dậy thì");

high.initText(   "Nguyên nhân điểm thấp: quên mang CASIO vào phòng thi", 
                "Đề thi môn văn: \"Phân tích mối quan hệ giữa 2 nhà thơ Xuân Quỳnh và Huy Cận\"",
                "Choose same meaning word with \"potang ina mo bo bo\"",
                "Câu cho điểm: Áp dụng công thức De Broglie và hệ thức Heisenberg để tính tuổi thọ của bạn",
                "Câu gỡ điểm: cân bằng phương trình: H2 + O2 = PENIS",
                "Câu điểm 6: Xác định mối quan hệ huyết thống của em với hàng xóm xung quanh",
                "Câu ăn điểm: Tổng ngày sinh của Marx và Lenin quy đổi sang hệ Hexa là bao nhiêu?",
                "Câu hỏi ngôi sao hy vọng: Quan điểm của em về vấn đề Đặc Khu Kinh Tế (j4f, not triggered)",
                "Không vượt qua bài kiểm tra tâm sinh lý tuổi dậy thì");                

function generate() {
    var num = toNumber(subject.value) + toNumber(input_name.value);
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
    alert(output_mark);
    alert(output_text);
}

function toNumber(str) {
    var result = 2611;
    for (var i = 0; i < str.length; i++) {
        result += str[i].charCodeAt(0);
    }
    return result;
}