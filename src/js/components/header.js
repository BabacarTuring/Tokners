import figure from "./figure.js"
import nav from "./nav.js"

const header = function(data){
    return(
        `
            <header class="header">
                ${figure(data.figure)} 
                ${nav()}
            </header>
        
        `
    )
}

export default header