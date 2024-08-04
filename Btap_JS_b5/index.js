//ex1
function Ex1(){
    var diemChuan = parseFloat(document.getElementById("diem-chuan").value);
    console.log(diemChuan);
    var khuVuc = parseFloat(document.getElementById("khu-vuc").value);
    console.log(khuVuc);
    var doiTuong = parseFloat(document.getElementById("doi-tuong").value);
    console.log(doiTuong);
    var Toan = parseFloat(document.getElementById("toan").value);
    console.log(Toan);
    var Ly = parseFloat(document.getElementById("ly").value);
    var Hoa = parseFloat(document.getElementById("hoa").value);
    
    if (isNaN(diemChuan) || isNaN(Toan) || isNaN(Ly) || isNaN(Hoa)) {
        alert("Ex1: Vui lòng nhập đủ nội dung và đảm bảo các giá trị là số.");
        document.getElementById("ket-qua").innerHTML = "";
        return;
    }

    var tongDiem = Toan + Ly + Hoa + khuVuc + doiTuong;
    var Truot = Toan ===0 || Ly ===0 || Hoa === 0;
    var Dau = tongDiem >= diemChuan;
        
    if(Truot){
        document.getElementById("ket-qua").innerHTML = "Trượt vì điểm liệt";
    }
    else if(Dau){
        document.getElementById("ket-qua").innerHTML = `Đậu với tổng điểm: ${tongDiem}`;
    }
    else{
        document.getElementById("ket-qua").innerHTML = `Trượt với tổng điểm: ${tongDiem}`;
    }
    document.getElementById("diem-chuan").value = "";
    document.getElementById("toan").value = "";
    document.getElementById("ly").value = "";
    document.getElementById("hoa").value = "";

}

//ex2
function Ex2() {
    var Name = document.getElementById("name").value;
    var soKw = parseInt(document.getElementById("so-kw").value);
    var donGia = 0;

    var so50Kw = 50 * 500;
    var so100Kw = 50 * 650;
    var so200Kw = 100 * 850;
    var so350Kw = 150 * 1100;

    if (Name === "" || isNaN(soKw)) {
        alert("Ex2 : Vui lòng nhập đầy đủ thông tin.");
        return;
    }
    switch (true) {
        case (soKw <= 50):
            donGia = soKw * 500;
            console.log(donGia);
            break;
        case (soKw <= 100):
            donGia = so50Kw + (soKw - 50) * 650;
            console.log(donGia);
            break;
        case (soKw <= 200):
            donGia = so50Kw + so100Kw + (soKw - 100) * 850;
            console.log(donGia);
            break;
        case (soKw <= 350):
            donGia = so50Kw + so100Kw + so200Kw + (soKw - 200) * 1100;
            console.log(donGia);
            break;
        default:
            donGia = so50Kw + so100Kw + so200Kw + so350Kw + (soKw - 350) * 1300;
            console.log(donGia);
            break;
    }

    document.getElementById("ten-kh").innerHTML=`Tên khách hàng: ${Name}`;
    document.getElementById("xuat-tien").innerHTML=(`Tổng số tiền phải trả: ${donGia.toLocaleString()} VND`);
}



//ex3




function Ex3(){
    var Hoten = document.getElementById("ho-ten").value;
    var thuNhap = parseFloat(document.getElementById("thu-nhap").value);
    var soNguoi = document.getElementById("so-nguoi").value;
    var thueSuat = 0;
    var mienGiam = soNguoi * 4.4e6;
    var thuNhapTinhThue = thuNhap - mienGiam;
    
    if(Hoten === ""|| isNaN(thuNhap) || isNaN(soNguoi)){
        alert("vui lòng nhập đúng và đầy đủ nội dung");
        return;
    }
    switch(true){
        case(thuNhap<=60e6):
            thueSuat = 0.05;
            break;
        case(thuNhap<=120e6):
            thueSuat = 0.1;
            break;
        case(thuNhap<=210e6):
            thueSuat = 0.15;
            break;
        case(thuNhap<=384e6):
            thueSuat = 0.2;
            break;
        case(thuNhap<=624e6):
            thueSuat = 0.25;
            break;
        default:
            thueSuat = 0.1;
            break;
    }

    var thueThuNhap = thuNhapTinhThue * thueSuat;

    document.getElementById("hienthi-hoten").innerHTML = `Tên : ${Hoten}`;
    document.getElementById("hienthi-thue").innerHTML = `Thuế thu nhập cá nhân : ${thueThuNhap.toLocaleString()}`;
}




//ex4

function showConnect(){
    var loaiCap = document.querySelector('input[name="selector"]:checked').value;
    var connectNumber = document.getElementById("so-ket-noi")
    if(loaiCap =="nhaDan"){
        connectNumber.style.display = "none";
    }
    else{
        connectNumber.style.display = "block";
    }
}

document.getElementById('nha-dan').addEventListener('change', showConnect);
document.getElementById('doanh-nghiep').addEventListener('change', showConnect);

function capNhaDan(kenhCaoCap){ 
    var hoaDon = 4.5;
    var dichVu = 20.5;
    var thueKenhCaoCap = 7.5 *kenhCaoCap;
    return hoaDon + dichVu +  thueKenhCaoCap;
}

function capDoanhNghiep(soKetNoi,kenhCaoCap){
    var hoaDon = 15;
    var dichVu = 75;
    var thueKenhCaoCap = 50 *kenhCaoCap;

    if(soKetNoi>10){
        dichVu = 75 + (soKetNoi-10) * 5;
    }
    return hoaDon + dichVu + thueKenhCaoCap ;
}

function TienCap(){
    var loaiCap = document.querySelector('input[name="selector"]:checked');
    var tenKhachHang = document.getElementById("ten-khach-hang").value;
    var maKhachHang = document.getElementById("ma-khach-hang").value;
    var kenhCaoCap = document.getElementById("so-kenh-cao-cap").value;
    var soKetNoi = document.getElementById("so-kn").value;
    var donGia = 0;

    if (!loaiCap || !tenKhachHang || !maKhachHang || !kenhCaoCap || (loaiCap.value == "doanhNghiep" && !soKetNoi)) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    loaiCap = loaiCap.value;
    maKhachHang = parseFloat(maKhachHang);
    kenhCaoCap = parseInt(kenhCaoCap);
    soKetNoi = parseInt(soKetNoi);

    if (loaiCap == "nhaDan"){
        donGia = capNhaDan(kenhCaoCap);
        console.log(capNhaDan(kenhCaoCap));
    }else{
        donGia = capDoanhNghiep(soKetNoi,kenhCaoCap);
        console.log(capDoanhNghiep(kenhCaoCap));
    }
    document.getElementById("thanh-hien-thi").style.display = "block";
    document.getElementById("hienthi-khachang").innerHTML = `${tenKhachHang} - ${maKhachHang}`;
    document.getElementById("tienCap").innerHTML = `Cái giá phải trả : ${donGia.toLocaleString()}$`;
}

