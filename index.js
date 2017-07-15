/**
 * Ismael Rodriguez, 2017
 * Small and fast project to test Twitter API
*/
var Twitter = require('twitter');


var companyPrefixes = 
[
	'Tele', 'Eve','Accen','Hibe','Endal','Deloi'

];

var companySufixes = 
[

	'fónica', 'ris', 'ture', 'rus', 'ia', 'lalia', 'te',
];

var positionQuantifier = 
[

	'Sennior', 'Junnior', 'Becario', 'Esclavo', 'Whatever', 'Idiot'
]

var position = 
[

	'Programmer', 'Analyst', 'Consultor', 'Architect', 'Genius'
]

var languageFirst = 
[

	'Big', 'New', 'Artifical', 'Neural', 'Open', 'Closed', 'IBM', 'SAP'

]

var languageSecond = 
[

	'Data', 'Machine', 'Interactive', 'Expert'
]


var languageThird = 
[
	'Analytics', 'Javascript', 'SOAP', 'Java', 'Pascal', 'COBOL', 'Binary', 'Frontend', 'Backend', 'Middleend', 'API','Ruby','Calendar'
]

var companyQuantifier = 
[
	'importante empresa del sector', 'innovadora compañía', 'promising startup', 'excellent programmer family'
]

var generateCompany = function(){

	var sufixIndex = Math.floor(Math.random() * companySufixes.length);
	var prefixIndex = Math.floor(Math.random() * companyPrefixes.length);
	return companyPrefixes[prefixIndex] + companySufixes[sufixIndex];
}

var generatePosition = function(){
	var quantifierIndex = Math.floor(Math.random() * positionQuantifier.length);
	var positionIndex = Math.floor(Math.random() * position.length);
	return positionQuantifier[quantifierIndex] + ' ' + position[positionIndex];
}

var generateLanguage = function(){
	var result = '';
	var hasFirst = Math.floor(Math.random() * 100) > 30;
	var hasSecond = Math.floor(Math.random() * 100) > 30;

	if (hasFirst) {
		var firstIndex = Math.floor(Math.random() * languageFirst.length);
		result += languageFirst[firstIndex];
	}

	if (hasSecond) {
		var secondIndex = Math.floor(Math.random() * languageSecond.length);
		if (result.length > 0){
			result += ' ';
		}
		result+= languageSecond[secondIndex];
	}

	var thirdIndex = Math.floor(Math.random() * languageThird.length);
	if (result.length > 0){
		result += ' ';
	}
	result += languageThird[thirdIndex];

	return result;

}

var generateCompanyQuantifier = function(){
	var qIndex = Math.floor(Math.random() * companyQuantifier.length);
	return companyQuantifier[qIndex];

}


var generateTweet = function() {

	return (generateCompany() + ', ' + generateCompanyQuantifier() + ', busca ' + generatePosition() + ' en ' + generateLanguage());
}


var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});


var sendTweet = function() {

	var tweet_message = generateTweet();
client.post('statuses/update', {status: tweet_message},  function(error, tweet, response) {
 
   console.log(tweet_message);  // Tweet body. 
   t = setTimeout(function(){ sendTweet() }, 60000);
});
}


sendTweet();