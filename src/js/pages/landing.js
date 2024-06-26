import header from "../components/header.js"
import landingScreenOne from "./landing/landing-screen-one.js"
import landingScreenTwo from "./landing/landing-screen-two.js"
const landing = function(){

    const headerData = {
        // un objet qui contient une propriété qui est elle-même un objet
        figure: {
            // qui elle-même contient deux propriétés qui sont des chaînes de caractères
            imageUrl: "./public/assets/logo.svg",
            imageAlt: "Photo du logo de l'application"
        }
    }


    return(
        `
            ${header(headerData)}
            <main class="main landing__main">

                ${landingScreenOne()}
                ${landingScreenTwo()}
            
            
            </main>
        
        
        `
    )
}

export default landing