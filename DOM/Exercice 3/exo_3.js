// 3. Galerie d'images interactive
// ● Énoncé : Crée une série de petites images côte à côte (par exemple, trois ou quatre
// <img> avec la classe thumbnail). Ajoute une grande zone d'affichage d'image en
// haut de la page, avec un <img id="mainImage" src=""> qui est vide au début.
// Lorsque l'utilisateur clique sur une des miniatures, la source de mainImage est mise
// à jour pour afficher l'image cliquée en grand dans la zone d'affichage.


    const img = document.getElementsByClassName('thumbnail')
    const mainImg = document.getElementById('mainImage')

    img[0].addEventListener('click', function() {
        const link = img[0].getAttribute('src')
        mainImg.setAttribute('src', link)
    })

    img[1].addEventListener('click', function() {
        const link = img[1].getAttribute('src')
        mainImg.setAttribute('src', link)
    })

    img[2].addEventListener('click', function() {
        const link = img[2].getAttribute('src')
        mainImg.setAttribute('src', link)
    })

    img[3].addEventListener('click', function() {
        const link = img[3].getAttribute('src')
        mainImg.setAttribute('src', link)
    })
