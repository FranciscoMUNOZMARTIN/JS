jQuery(document).ready(() => {
    alert('Notre code utilise jQuery')
})

$(function() {
$('h1, h2, .content').css('color', 'green')
});

/* $(document).ready(function () {
    $('h1').text('Introduction à jQuery');
    $('div.introduction').html('<p>Il s\'agit de <strong>l\'introduction</strong> </p>');
    $('p.content').css('color', 'blue');
  });
*/

   $(function() {
    $('h1').text('Introduction à jQuery');
    $('div.introduction').html('<p>Il s\'agit de <strong>l\'introduction</strong> </p>');
    $('p.content').css('color', 'blue');
    console.log('Introduction à jQuery')
})
