// Connect to a local MongoDB instance and create a new database
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log('Database created!');
	db.close();
});

// Create a new collection in the database
MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db('mydb');
	dbo.createCollection('customers', function(err, res) {
		if (err) throw err;
		console.log('Collection created!');
		db.close();
	});
});

// Insert a document into the collection
MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db('mydb');
	var myobj = { name: 'John', address: 'Highway 71' };
	dbo.collection('customers').insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log('1 document inserted');
		db.close();
	});
});

// Find all documents in the collection
MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db('mydb');
	dbo.collection('customers').find({}).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});
