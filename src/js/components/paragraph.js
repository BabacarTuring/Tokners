const paragraph = function (data) {
    return (
        `
        <p class="paragraph ${data.class}" id="${data.id}">${data.content}</p>
        `

    )
}

export default paragraph