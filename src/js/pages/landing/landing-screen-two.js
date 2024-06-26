import figure from "../../components/figure.js"
import paragraph from "../../components/paragraph.js"
import section  from "../../components/section.js"
const landingScreenTwo = function() {
    return(
        `
        <section id="landingTwo">
            <section id='rectangles'>
                <section class="rectangle ">
                    ${paragraph({content:'For <span id="creators">Creators</span>',class:'title'})}
                    ${paragraph({content:'Creators can gain independence through a decentralised digital currency system that <br> is dependent on growing and engaging with the community and also their star power. <br> They own 10-15% of the total value of the tokens minted.', id:'we'})}
                    ${figure({imageUrl:'../public/assets/nerd.png', id:'nerd', imageAlt:'image bonhomme au lunette'})}
                </section>
                <section class="rectangle ">
                    ${paragraph({content:'For <span id="holders">Holders</span>',class:'title'})}
                    ${paragraph({content:'Holding social tokens allows the individual to gain access to benefits including <br> unreleased content, private communities, direct access to celebrity, early-access to <br> tickets and more as well as the ability to trade with other communities in order to gain <br> access to more creator content with early token buyers being the biggest winners as <br> the value of the token increases with more buyers.', id:'we'})}
                    ${figure({imageUrl:'../public/assets/blue-boy.png', id:'blueboy',imageAlt:'image bonhomme en bleu'})}
                </section>
            </section>
            <section id='wave'>
                ${figure({imageUrl:'../public/assets/backwave.png',id:'backwave1',imageAlt:'decoration'})}
                ${figure({imageUrl:'../public/assets/backwave2.png',id:'backwave2',imageAlt:'decoration'})}
            </section>
            <section id="what">
                ${figure({imageUrl:'../public/assets/imgW.png'})}
                ${paragraph({content:'What makes us <br> different?', id:'question'})}
                ${paragraph({id:'reponse',content:"<span>We would only launch tokens with the express permission of the creators.</span> <span>There are several thousand celebrities and creators on twitter, tiktok, Instagram <br> and YouTube with followings in the millions who we would be <strong>actively engaging</strong> <br> before we go viral. </span> <span> We would get them on our platform and they would see the opportunity to <br> create a fan driven digital economy where their digital content can be traded as <br> NFTs and their most loyal fans can have the monetary value of their creator's <br> currency increase  <strong>significantly</strong> as they promote their digital currency across their <br> channels while our native token holders benefit from the Tokners popularity.</span>"})}
            </section>
        </section>
       `
    )
}

export default landingScreenTwo