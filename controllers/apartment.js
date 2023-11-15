//const apartment = require('../models/apartment');
var Apartment = require('../models/apartment');
// List of all Costumes
exports.apartment_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment list');
};
// for a specific Costume.
exports.apartment_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment detail: ' + req.params.id);
};
// Handle Costume create on POST
// Handle Costume delete form on DELETE.
exports.apartment_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.apartment_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Apartment update PUT' + req.params.id);
};

// List of all Costumes
exports.apartment_list = async function (req, res) {
    try {
        theApartments = await Apartment.find();
        console.log('theApartments', theApartments);
        res.send(theApartments);
    }
    catch (err) {
        res.status(500);
        console.log(`theApartments ${err}}`);
        res.send(`{"error": ${err}}`);
    }
};

//VIEWS
//Handle a show all view
exports.apartment_view_all_Page = async function (req, res) {
    try {
        theApartments = await Apartment.find();
        console.log('theApartments', theApartments);
        res.render('apartment', { title: 'apartment Search Results', results: theApartments });
    }
    catch (err) {
        res.status(500);
        console.log(`theApartments ${err}}`);
        res.send(`{"error": ${err}}`);
    }
};

exports.apartment_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Apartment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Apartment_name = req.body.Apartment_name;
    document.location = req.body.location;
    document.rent = req.body.rent;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific apartment.
exports.apartment_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Apartment.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Costume update form on PUT.
exports.apartment_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Apartment.findById(req.params.id)
        // Do updates of properties
        if (req.body.Apartment_name) toUpdate.Apartment_name = req.body.Apartment_name;
        if (req.body.location) toUpdate.location = req.body.location;
        if (req.body.rent) toUpdate.rent = req.body.rent;
        // Handle checkbox value
        if (req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.sale = false;

        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle Costume delete on DELETE.
exports.apartment_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Apartment.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.apartment_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Apartment.findById(req.query.id)
        res.render('apartmentdetail',
            { title: 'Apartment Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a apartment.
// No body, no in path parameter, no query.
// Does not need to be async
exports.apartment_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('apartmentcreate', { title: 'Apartment Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a apartment.
// query provides the id
exports.apartment_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Apartment.findById(req.query.id)
        res.render('apartmentupdate', { title: 'Apartment Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.apartment_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Apartment.findById(req.query.id)
        res.render('apartmentdelete', { title: 'Apartment Delete', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};