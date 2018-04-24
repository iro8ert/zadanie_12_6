var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
	url: url + countryName + url2,
	method: 'GET',
	success: showCountriesList
});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
		$('#capitalName').text(item.name).appendTo(capitalCity)
	})
}

var url2 = 'https://restcountries.eu/rest/v2/capital/'
var capitalCity = $('#capital');

