const nav = document.getElementById('menu')
const logo = document.createElement('img')
logo.src='./images/logo_colored_sign_black_text.svg'
logo.id='logo'
nav.append(logo)

function img(src) {
    const img = document.createElement('img')
    img.src=src
    img.className='wave'
    return img
}

let list=['Our team','Tokens','Connect wallet','Lightpaper','sign in', 'sign up']
const ul = document.createElement('ul')
for (let element of list)  {
    const a = document.createElement('a')
    a.innerText = element
    ul.append(a)

}

ul.append(img('./images/Vectorvague1.png'))
ul.append(img('./images/Vectorvague2.png'))
ul.append(img('./images/Vectorvague3.png'))
ul.append(img('./images/Vectorvague5.png'))
nav.append(ul)
