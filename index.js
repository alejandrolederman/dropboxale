
const https = require("https");
const data = "{\"limit\": 1000}";

const req = https.request('https://api.dropboxapi.com/2/file_requests/count', {
	method: 'POST',
	headers: { 
		'Authorization': `Bearer {sl.BCj_RA9qbsQdYaib-PlhCnoPnpHEhfmNgxFs15XOM4nJp6OiXBsuQzupblhP3vN6C9XDAmmpsmM4mX5bwGgkTRrtJbEgsesWm0EUTLyZfKaiQ99onIdT23B_9ceMMwyPdyxylZI}`  ,
	},
    
	
}, (res) => {
	console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
        process.stdout.write(d);
    });
})

req.end();