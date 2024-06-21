import boys from "../../components/landing/boys.js"

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

                <section>
                    ${boys()}
                </section>
            
            
            
            </section>
        
        `
    )
}

export default landingScreenOne