let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 
'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine', 'Lern', 'Javascript'];

secretMessage.pop();
secretMessage.push('to', 'program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know,' ); //daysOfWeek.splice(5, 0, 'Saturday', 'Sunday');

console.log(secretMessage.join(' '));

