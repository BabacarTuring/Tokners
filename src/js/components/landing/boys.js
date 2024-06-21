import figure from "../figure.js"

const boys = function(){

    return(
        `
            <section class="boys">

            ${figure({ imageUrl: "./public/assets/grey-man.png", imageAlt: ""})}
            ${figure({ imageUrl: "./public/assets/blue-man.png", imageAlt: ""})}
            
            </section>
        
        
        `
    )

}

export default boys