const anchor = function(data){
    return(
        `
            <a href="${data.href}">${data.content}</a>

        `
    )
}

export default anchor