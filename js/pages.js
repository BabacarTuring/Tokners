const div = document.getElementById('container')
const logo = document.createElement('img')
logo.src='./images/logo_colored_sign_black_text.svg'
logo.id='logo'
nav.append(logo)

function img(src,id) {
    const img = document.createElement('img')
    img.src=src
    img.id=id
    return img
}

let list=['Our team','Tokens','Connect wallet','Lightpaper','sign in', 'sign up']
const ul = document.createElement('ul')
for (let element of list)  {
    const a = document.createElement('a')
    a.innerText = element
    ul.append(a)

}

ul.append(img('./images/Vectorvague5.png','vague5'))
/*
ul.append(img('./images/Vectorvague3.png','vague3'))
ul.append(img('./images/Vectorvague2.png','vague2'))
ul.append(img('./images/Vectorvague1.png','vague1'))
*/
div.append(ul)
