

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();

    let username = document.getElementById('floatingUsername').value;
    let password = document.getElementById('floatingPassword').value;
    let email = document.getElementById('floatingEmail').value;
    

    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(username == '') {
        document.getElementById('floatingUsername').classList.add('is-invalid');
    } else if(email == '') {
        document.getElementById('floatingEmail').classList.add('is-invalid');
    }  else if(!email.match(request_emailregex)){
        document.getElementById('floatingEmail').classList.add('is-invalid');
    } else if(password == '') {
        document.getElementById('floatingPassword').classList.add('is-invalid');
    } else {
        alert('Submitted');
        document.getElementById('floatingUsername').classList.remove('is-invalid');
        document.getElementById('floatingPassword').classList.remove('is-invalid');
        document.getElementById('floatingEmail').classList.remove('is-invalid');
    }
});

