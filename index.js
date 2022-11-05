let calculatebtn = document.querySelector('.calculate');

calculatebtn.addEventListener('click', () => {
    var n1 , n2 ,gamotvla, res , jami;
    n1=Number(document.querySelector('.input1').value);
    n2=Number(document.querySelector('.input2').value);
    procent = n2 / 100;
    res=n1 * procent;
    jami = res + n1;
    document.querySelector('.input3').value=res;
    document.querySelector('.input4').value=jami;
})