const figure = function(data){
    return(
        `
            <figure class="figure">
                <img src="${data.imageUrl}" id='${data.id}' alt="${data.imageAlt}" />
            </figure>
        
        `
    )
}

export default figure