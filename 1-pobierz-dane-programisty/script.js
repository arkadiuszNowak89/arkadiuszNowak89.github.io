const btn = $('.btn-get-data');
const cont = $('#dane-programisty');

btn.on('click', function () {
  $.getJSON(
    'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'
  )
    .done((data) => {
      for (el in data) {
        cont.append($(`<p><strong>${el}: </strong>${data[`${el}`]}</p>`));
      }
    })
    .fail((err) => console.log(err));
});
