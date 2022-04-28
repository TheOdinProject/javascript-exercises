const getTheTitles = function (dicts) {
	let title = [];
	dicts.forEach((dict) => {
	  for (const ttl in dict) {
		if (ttl === "title") title += dict[ttl];
	  }
	});
	console.log(title);
  };
  
  getTheTitles([
	{
	  title: "Book",
	  author: "Name",
	},
	{
	  title: "Book2",
	  author: "Name2",
	},
  ]);  


