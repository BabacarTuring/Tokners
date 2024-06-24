const paragraph = function (data) {
    return (
        `
        <p id="${data.id}">${data.content}</p>
        `

    )
}

export default paragraph