let isChecked = null;
function validate(){
    let checkBox1= document.getElementById('checkBox1');
    let checkBox2= document.getElementById('checkBox2');
    let checkBox3= document.getElementById('checkBox3');
    if (checkBox1.checked || checkBox2.checked || checkBox3.checked){
        checkBox1.removeAttribute('Required');
        checkBox2.removeAttribute('Required');
        checkBox3.removeAttribute('Required');
        alert('Submition was sucessfull')
        isChecked = true;
    }
    else {
        alert('Please fill requierd fieleds')
        isChecked = false;

    }
}
