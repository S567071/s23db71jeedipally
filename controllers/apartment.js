const apartment = require('../models/apartment');
var Apartment = require('../models/apartment');
// List of all Costumes
exports.apartment_list = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment list');
};
// for a specific Costume.
exports.apartment_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.apartment_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Apartment create POST');
};
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
theApartments = await apartment.find();
res.send(theApartments);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
