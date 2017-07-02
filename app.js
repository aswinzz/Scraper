
var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



var url = "http://www.officialcharts.com/charts/singles-chart/";
request(url,function(err,res,body){
	var $ = cheerio.load(body);
	var table = $('.chart-positions');
	var title = $('.title');
	var titletext = title.text();
	var artist = $('.artist');
	var artisttext = artist.text();
	console.log(titletext);
	console.log(artisttext);
    
})




module.exports = app;
