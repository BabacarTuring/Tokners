const figure = function(data){
    return(
        `
            <figure class="figure">
                <img src="${data.imageUrl}" alt="${data.imageAlt}" />
            </figure>
        
        `
    )
}

export default figure