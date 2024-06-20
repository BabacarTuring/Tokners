const figure = function(data) {
    return(
        `
        <figure class="figure">
            <img src="${data.imgUrl}" alt="${data.imgAlt}>
        </figure>
        `
    )
}

export default figure