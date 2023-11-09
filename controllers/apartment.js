//const apartment = require('../models/apartment');
var Apartment = require('../models/apartment');
// List of all Costumes
exports.apartment_list = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment list');
};
// for a specific Costume.
exports.apartment_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment detail: ' + req.params.id);
};
// Handle Costume create on POST
// Handle Costume delete form on DELETE.
exports.apartment_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.apartment_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment update PUT' + req.params.id);
};

// List of all Costumes
exports.apartment_list = async function(req, res) {
try{
theApartments = await Apartment.find();
console.log('theApartments',theApartments);
res.send(theApartments);
}
catch(err){
res.status(500);
console.log(`theApartments ${err}}`);
res.send(`{"error": ${err}}`);
}
};

//VIEWS
//Handle a show all view
exports.apartment_view_all_Page = async function(req, res) {
try{
theApartments = await Apartment.find();
console.log('theApartments',theApartments);
res.render('apartment', { title: 'apartment Search Results', results: theApartments });
}
catch(err){
res.status(500);
console.log(`theApartments ${err}}`);
res.send(`{"error": ${err}}`);
}
};

exports.apartment_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Apartment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Apartment_name = req.body.Apartment_name;
    document.location = req.body.location;
    document.rent = req.body.rent;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    