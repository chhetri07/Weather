const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db05650becmsh6c88ef291022076p1f72f5jsn1919f0549da7',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}