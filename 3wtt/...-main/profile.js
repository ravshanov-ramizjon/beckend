
function createElement(obj) {
    const box = document.getElementById('user');

    const elem = document.createElement('div');
    const elemLR = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const aboutMe = document.createElement('div');
    const img = document.createElement('img')
    const title = document.createElement('h3');
    const emailP = document.createElement('p');
    const emailSpan = document.createElement('span');
    const companyP = document.createElement('p');
    const companySpan = document.createElement('span');
    const aboutMeP = document.createElement('p');

    elem.classList.add('elem');
    elemLR.classList.add('elemLR');
    emailP.classList.add('email');
    companyP.classList.add('company');
    left.classList.add('left')
    right.classList.add('right')
    img.classList.add('userPhoto')
    aboutMe.classList.add('aboutMe')
    aboutMeP.classList.add('aboutMeP')


    title.innerHTML = obj.name;
    emailSpan.innerHTML = obj.email;
    companySpan.innerHTML = obj.company.name;
    aboutMe.innerHTML = 'About me'
    aboutMeP.innerHTML = '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt deleniti neque fugit sint dolorum velit suscipit cum. Dolorem iste deserunt accusantium esse soluta aperiam assumenda, tenetur voluptatem veritatis architecto minus animi laboriosam eveniet earum itaque! Alias dolor inventore maiores praesentium dignissimos quia saepe quidem ratione debitis ut cum ipsam suscipit, vitae unde voluptate. Nam accusamus eligendi architecto praesentium blanditiis dolor odit perferendis ipsam! Deserunt minus optio sequi accusantium. Reprehenderit ratione nesciunt animi neque ut, labore natus commodi voluptatibus eius obcaecati eveniet dolore quos officia ea dignissimos itaque expedita, dolorum ipsa quam ad impedit vel voluptatum asperiores quisquam? Explicabo quaerat perspiciatis enim doloribus! Eaque, quaerat pariatur et id ullam voluptas, adipisci similique doloribus esse nostrum vitae asperiores officia inventore deserunt quas delectus fugiat reprehenderit distinctio illo magnam fuga provident nam. Totam dignissimos sit quo, harum eum veritatis vitae facere non labore omnis neque? Non consequuntur cumque tempora ad repudiandae ex impedit unde veritatis odio temporibus. Totam quo soluta iste error, officiis asperiores reprehenderit eaque sequi, saepe ducimus, alias dolor! Ipsum quidem deleniti assumenda minima fugiat ab esse eos nihil numquam, aut quis possimus ipsa, nobis perferendis dicta excepturi recusandae quaerat, ducimus ex commodi atque optio beatae? Quo laudantium ab consectetur cumque pariatur ut impedit esse aspernatur quaerat corrupti aut praesentium, neque nemo iure omnis porro distinctio consequuntur minima ipsa nisi, quisquam dolore. Nulla impedit, rem, ipsa est earum veniam at iure quasi exercitationem commodi officiis, illo adipisci mollitia dignissimos. Dolorem fugit earum itaque odio tempore quisquam porro error non pariatur distinctio. Tempore earum quibusdam hic autem, error assumenda, aliquid repellendus veritatis totam saepe suscipit temporibus consectetur perspiciatis ab maiores vitae, magnam voluptas? Quasi ipsum recusandae eos tenetur doloremque voluptatibus expedita optio odio ipsam repudiandae incidunt voluptas, libero quia dicta neque error obcaecati ad quas? At, autem sed nisi modi id inventore cum suscipit ipsam quidem eos quos animi ullam? Ipsum, iusto pariatur? Qui iste at soluta debitis sequi alias unde, exercitationem nemo dolore quis nisi quos, nostrum impedit deserunt nesciunt tenetur id? Odit aut maiores esse, aliquam iure accusamus eum perferendis nesciunt quos velit laborum magnam ipsam cumque? Perspiciatis vero nemo veniam aut ullam excepturi quasi nesciunt? Vero incidunt veniam maiores mollitia esse! Architecto laboriosam aspernatur soluta! Consequuntur, minus corporis quos ex officia, ad, hic voluptate harum ut doloribus excepturi tempora eum doloremque porro fugiat numquam! Aut, quo numquam perspiciatis voluptatem iusto velit soluta nisi maxime illum repudiandae quibusdam! Reprehenderit atque aliquam, eius a repellendus nobis vel voluptatem unde culpa delectus debitis error. Non placeat culpa eveniet distinctio quis minima enim aspernatur, sit cumque iste voluptatibus quas sapiente blanditiis soluta dolorem! Dolorem ut distinctio voluptatibus iste accusantium adipisci saepe molestiae beatae velit rem consequatur voluptate explicabo nulla, cumque necessitatibus placeat temporibus dignissimos sequi eum corporis autem, voluptates fugiat id. Debitis ut dicta dolorem perferendis quisquam tempore maxime, dolorum commodi? Facere, corporis quidem iusto fugit recusandae eveniet repellat quo quia dignissimos deleniti aspernatur. Vitae velit earum voluptate beatae nisi? Itaque iste, laborum magni totam, expedita explicabo, repudiandae consequuntur exercitationem eum molestias delectus?';
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg'

    emailP.append('Email: ', emailSpan);
    companyP.append('Company: ', companySpan);
    elem.append(elemLR, aboutMe)
    elemLR.append(left, right);
    left.append(img)
    right.append(title, emailP, companyP)
    aboutMe.append(aboutMeP);
    box.append(elem);


}

let userId = localStorage.getItem(userId)

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => createElement(data))
.catch((error) => console.error(error))

