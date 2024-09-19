let a = prompt('a?','')
// bieu thuc cua prompt: khi nguoi dung gan gia tri cho a thi se cho 1 chuoi su kien
switch (a) {
    case 'a == 0':
        alert(0);
        break;
    case 'a == 1':
        alert(1);
        break;
    case 'a == 2':
    case 'a == 3':
        alert(2,3);
        break;
    default:
        alert('error')
    // cau hoi: tai sao khong phai dung defaul trong truong hop nay ma lai la case ? ( co phai so thi moi dung case k?)
    // default: 'a == 2 ' || 'a == 3';
    //    alert('2,3'

}