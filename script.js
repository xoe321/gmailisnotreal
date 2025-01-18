let responseCount = 0;

function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Lnwza007_12Hz' && password === '12HzgMb') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('gmailContainer').style.display = 'block';
        
        setTimeout(function() {
            document.getElementById('emailBody').innerHTML = `
                ไงเพื่อนกูลืมบอกไปเลยว่าในตู้เย็นมีตู้เซฟอยู่แล้วรหัสคือ .---- ..--- ...-- ...-- .---- ..--- ..... ..--- นะเพื่อน
            `;
            document.getElementById('messageBox').style.display = 'block';
        }, 10000);
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}

function showResponseBox() {
    document.getElementById('responseBox').style.display = 'block';
}

function sendResponse() {
    const responseText = document.getElementById('responseText').value;
    if (responseText.trim()) {
        responseCount++;

        if (responseCount >= 10) {
            document.getElementById('emailBody').innerHTML = 'มึงพอเหอะกูจะทำงาน';
            document.getElementById('messageBox').style.display = 'none';
            alert('มึงพอเหอะกูจะทำงาน');
        } else {
            document.getElementById('emailBody').innerHTML = 'เราไม่มีอะไรจะพูดแล้วเพื่อน';
            document.getElementById('responseBox').style.display = 'none';
            document.getElementById('messageBox').style.display = 'none';
        }
    }
}
