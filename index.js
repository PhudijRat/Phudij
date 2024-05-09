function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'g') {
        result2.textContent = "ถะ ถะ ถูกต้องนะคร้าบบบ";
        result2.style.color = 'green';
    } else {
        result2.textContent = "ผิดนะครับ ลองใหม่อีกครั้ง";
        result2.style.color = 'red';
    }
}

function sum(result, result2) {
    var result3 = result + result2;
    return result3;
}