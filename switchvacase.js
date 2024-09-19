let browser = prompt(' enter browser name!')
// browser: trinh duyet, enter browser name: nhap ten vao trinh duyet
// bieu thuc trong switch
// switch voi kieu giu lieu string
switch (browser) {
    case "edge": // gia tri cua case
        alert("you've got the Edge");
        // you've got the Edge: ban da co Edge
        break;
        // luon luon dung break sau case
    case "chrome":
    case "firefox":
    case "safari":
    case "opera":
        alert('okay we support these browsers too');
        // okay we support these browsers too: duoc roi, chung toi cung ho tro cac trinh duyet nay
        break;
    default:
        alert('we hope that this page looks ok!');
        // we hope that this page looks ok: chung toi hy vong trang nay trong on hon


}

