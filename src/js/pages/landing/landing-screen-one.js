import anchor from "../../components/anchor.js"
import boys from "../../components/landing/boys.js"
import paragraph from "../../components/paragraph.js"
import section from "../../components/section.js"
const landingScreenOne = function(){
    return(
        `
            <section class="landing-screen-one">
            
                <section>
                    <img src="./public/assets/v5.png" alt="" />
                    <img src="./public/assets/v2.png" alt="" />
                    <img src="./public/assets/v3.png" alt="" />
                    <img src="./public/assets/v1.png" alt="" />
                </section>
                 
                <section class="intro">
                    ${paragraph({content:'At Tokners are', id:'at'})}
                    ${paragraph({content:'<span>Reimagining social </span><span> media through the</span><span> power of the blockchain.</span>', id:"re"})}

                    ${section(paragraph({content:'We are creating social media 3.0 with influencers, celebrities and <br> creators being able to launch their own digital currency by simply <br> creating a profile with media content posted as Non fungible Tokens <br> that can be owned and traded on the Tokners network', id:'we'}))}
               
                    ${anchor({content:'LEARN MORE', href:'#'})}
                </section>

                <section>
                    ${boys()}
                </section>
            
            
            
            </section>
        
        `
    )
}

export default landingScreenOne