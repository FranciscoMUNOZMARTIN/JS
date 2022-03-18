$(document).ready(() => {
    let form = $('#form')

    $('input').on('focus', function() {
        alert(`focalisation sur le champ ${$(this).attr('name')}`)
    })

    form.prepend('<input type="text" id="lastname" name="lastname" value="" />')
    form.prepend('<label for="lastname">Lastname :</label>')
});


/*$(document).ready(() => {
    let form = $('#form')

    form.on('focus', 'input', function() {
        alert(`focalisation sur le champ ${$(this).attr('name')}`)
    })

    form.prepend('<input type="text" id="lastname" name="lastname" value="" />')
    form.prepend('<label for="lastname">Lastname :</label>')
});
*/