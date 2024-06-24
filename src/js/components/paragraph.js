const paragraph = function (data) {
    return (
        `
        <p class="paragraph" id="${data.id}">${data.content}</p>
        `

    )
}

export default paragraph