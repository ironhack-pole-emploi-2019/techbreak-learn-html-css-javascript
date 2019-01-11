// Get the current page (default = "1")
var page = (new URL(location.href)).searchParams.get("page");
if (!page) {
  page = "1";
}

// ETAPE 3
// Check the time to know if you can contact the person or not.
var hours = 12;
if (hours >=9 && hours < 18) {
  $('.working-hours').text("Yes, it's " + hours + ":00, you can still contact you next employee!")
} else {
  $('.working-hours').text("No, it's " + hours + ":00, you can't contact anyone outside of working hours but you can go grab a beer!")
}

// Call the API "GET https://randomuser.me/api/"
jQuery.get(`https://randomuser.me/api/?seed=ironhack&format=prettyjson&page=${page}&results=10`, function( data ) {
  for (let i = 0; i < data.results.length; i++) {
    var name = data.results[i].name.first + " " + data.results[i].name.last;
    var buttonText;
    if (data.results[i].gender === 'male') {
      buttonText = "Hire him"
    }
    else {
      buttonText = "Hire her"
    }
    // Add a new <li> tag in ".list-employees"
    $('.list-employees').append(`
      <li class="list-group-item">
        <img class="rounded-circle float-left" src="${data.results[i].picture.large}">
        <a class="btn btn-danger float-right" href="https://www.linkedin.com/search/results/index/?keywords=${name}" target="_blank">
          ${buttonText}
        <a/>
        <strong class="name">${name}</strong><br>
        ${data.results[i].email}
      </li>
    `)
  }
});

// Updating the pagination
$('.pagination .page-link').each(function() {
  var currentPage = $(this).attr("page");
  console.log(currentPage, page)
  if (currentPage == page)
    $(this).parent().addClass('active');
})
$('.pagination .page-link[page=prev]').attr("href", "index.html?page=" + (Number(page)-1))
$('.pagination .page-link[page=next]').attr("href", "index.html?page=" + (Number(page)+1))
