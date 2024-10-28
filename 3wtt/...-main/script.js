
function createElement(arr) {
    const box = document.getElementById('user-box');

    for (let item of arr) {
        const elem = document.createElement('div');
        const title = document.createElement('h3');
        const emailP = document.createElement('p');
        const emailSpan = document.createElement('span');
        const companyP = document.createElement('p');
        const companySpan = document.createElement('span');
        const button = document.createElement('button');

        elem.classList.add('elem');
        emailP.classList.add('email');
        companyP.classList.add('company');

        title.innerHTML = item.name;
        emailSpan.innerHTML = item.email;
        companySpan.innerHTML = item.company.name;

        emailP.append('Email: ', emailSpan);
        companyP.append('Company: ', companySpan);
        button.innerText = 'Подробнее';

        elem.append(title, emailP, companyP, button);
        box.append(elem);

        button.onclick = () => {
            localStorage.setItem("userId", item.id)

            window.location.href = "./profile.html"
        }
    }
}




fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => createElement(data))