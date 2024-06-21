import anchor from "./anchor.js"

const nav = function(){

    return(
        `
            <nav>
                ${anchor({ href: '#', content: "Our Team"})}
                ${anchor({ href: '#', content: "Token"})}
                ${anchor({ href: '#', content: "Connect Wallet"})}
                ${anchor({ href: '#', content: "Lightpaper"})}
                <section>
                    ${anchor({ href: '#', content: "Signin"})}
                    ${anchor({ href: '#', content: "Signup"})}
                </section>
            </nav>
        
        `
    )
}

export default nav;