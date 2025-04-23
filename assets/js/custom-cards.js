$(document).ready(function()
{
	let cards = $('.my-custom-class');
	cards.each(function(index, card)
	{
		let content = $(card).text();
		content = '<p>' + content + '</p>';
		content += '<p>When iterating over all cards with class <code>my-custom-class</code>, this card is at index ' + index + '.</p>';
		$(card).html(content);
	});
});
