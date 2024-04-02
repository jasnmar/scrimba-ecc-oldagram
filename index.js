const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

renderPage()

function renderPage() {
    console.log("rendering")
    const rootDiv = document.getElementById("root")
    rootDiv.innerHTML=""
    for (let i = 0; i < posts.length; i++ ) {
        rootDiv.appendChild(renderCard(posts[i]))
    }
    
    

}

function renderCard(post) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add("card")
    renderCardHeader(post, cardDiv)

    const bodyImage = document.createElement('img')
    bodyImage.classList.add("post-body")
    bodyImage.src = post.post
    cardDiv.appendChild(bodyImage)

    renderCardFooter(post, cardDiv)

    return cardDiv
}

function renderCardHeader(post, parent) {
    const cardHeaderDiv = document.createElement('div')
    cardHeaderDiv.classList.add("card-header")
    parent.appendChild(cardHeaderDiv)
    const avatarImg = document.createElement('img')
    avatarImg.src = post.avatar
    avatarImg.classList.add("avatar")
    cardHeaderDiv.appendChild(avatarImg)
    const userInfo = document.createElement('div')
    userInfo.classList.add('userinfo')
    cardHeaderDiv.appendChild(userInfo)
    const userNameP = document.createElement('p')
    userNameP.classList.add('name')
    userNameP.textContent = post.name
    userInfo.appendChild(userNameP)
    const userLocation = document.createElement('p')
    userLocation.classList.add("location")
    userLocation.textContent = post.location
    userInfo.appendChild(userLocation)
}

function renderCardFooter(post, parent) {
    const controlDiv = document.createElement('div')
    controlDiv.classList.add('controls')
    parent.appendChild(controlDiv)
    controlDiv.appendChild(renderBtn("./images/icon-heart.png"))
    controlDiv.appendChild(renderBtn("./images/icon-comment.png"))
    controlDiv.appendChild(renderBtn("./images/icon-dm.png"))
    const likesCount = document.createElement('p')
    likesCount.classList.add('likes-count')
    likesCount.textContent = post.likes + " likes"
    parent.appendChild(likesCount)
    const comment = document.createElement('p')
    comment.classList.add('other-comment')
    const userName = document.createElement('span')
    userName.classList.add('username')
    userName.textContent = post.username
    comment.appendChild(userName)
    comment.append(" "+post.comment)
    parent.appendChild(comment)

}

function renderBtn(image) {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    const btnImg = document.createElement('img')
    btnImg.src = image
    btnImg.classList.add("btn-image")
    btn.appendChild(btnImg)
    return btn

}
