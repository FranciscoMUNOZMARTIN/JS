
jQuery(document).ready(() => {
    alert('Notre code utilise jQuery')
})

$(document).ready(() => {
    console.log('Notre code utilise jQuery2')
})

$(function() {
    console.log('Notre code utilise jQuery3')
})

$(function($) {
    console.log('Notre code utilise jQuery4')
})

if (jQuery) {
    alert('jQuery est inclus à la page')
} else {
    alert('jQuery n\'est  pas inclus à la page')
}

/* $ est l'élément central. Celui-ci sera systématiquement utilisé lorsque du code sera écrit avec jQuery.
Puis, comme en JavaScript, il est nécessaire de sélectionner l'élément du DOM sur lequel agir.
Enfin, il faut indiquer quelle méthode utiliser afin de réaliser le traitement souhaité.
                       $('monSelecteur').methode()
*/

document.querySelector('#content') //en javascript
$('#content')  //en jquery

$('div') // Sélection de la div par son nom de balise.
$('#content') // Sélection de la div par son attribut id #content
$('.content-div') // Sélection des div par la classe .content-div


//$('#content p').html('<p>Ajoutons un élément avec du HTML</p>')
//$('#content p').css('color', 'red') // Donnons une couleur à notre paragraphe

$('#content p').text('Bonjour tout le monde !').css('color', 'blue')
$('#content p').click(function() {alert('clique sur le paragraphe')})

/* 
Un sélecteur s'écrit avec l'alias $ suivi du nom du sélecteur entre parenthèses : $('#mon-selecteur')

Un sélecteur par identifiant commence par "#" et un sélecteur par classe commence par "."

Une méthode est invoquée après le sélecteur et est séparée de celui-ci par un point "." : $('#selecteur').html('<b>texte en gras</b>')

Les méthodes peuvent être invoquées à la chaîne : $('#selecteur').html('<b>texte en gras</b>').css('font-size', '2em')

*/
