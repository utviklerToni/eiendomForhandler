const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

let Dummy_property = [
  {
    id: 'p1',
    title: 'Summer house',
    description: '3 bed room summer house for sale in Kragerø',
    location: {
      lat: 40.4542332,
      lng: -73.943021,
    },
    address: '#9, Linneaveien',
    creator: 'u3',
  },
  {
    id: 'p2',
    title: 'Beach house',
    description: '3 bed room summer house for sale in Kragerø',
    location: {
      lat: 40.4542332,
      lng: -73.943021,
    },
    address: '#9, alpha ',
    creator: 'u6',
  },
  {
    id: 'p3',
    title: 'Winter Cabin',
    description: 'in Kragerø',
    location: {
      lat: 40.4542332,
      lng: -73.943021,
    },
    address: '#9, beta',
    creator: 'u9',
  },
];

// ============================ // ============================

// get all the properties
exports.getProperties = (req, res, next) => {
  res.json({ property: Dummy_property });
};

// ============================ // ============================

// the path '/' is defined later when we actually need to call it hence in app.js with app.use()
exports.getPropertyById = (req, res, next) => {
  const propertyId = req.params.pid;
  const property = Dummy_property.find((p) => {
    return p.id === propertyId;
  });

  if (!property) {
    return next(new HttpError('could not find users for the provided Id', 404));
  }
  res.json({ property });
};

// ============================ // ============================
// order of the route is very important when using dynamic url for example here we are using /:pid so any route defined after this will not be accessed cuz it will interpret all the routes as valid

// but this route is not static so no need to arrange the order, but if you have a dynamic route arrange carefully to avoid response of empty object
exports.getPropertiesByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const properties = Dummy_property.filter((u) => {
    return u.creator === userId;
  });
  if (!properties || properties.length === 0) {
    return next(
      new HttpError('could not find places for the provided user ID', 404)
    );
  }

  res.json({ properties });
};

// ============================ // ============================

exports.createProperty = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('invalid inputs', 422);
  }

  const { title, description, coordinates, address, creator } = req.body;

  const createdProperty = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  // so when user enters all the specified field the new property is created and stored in the dummy property object
  Dummy_property.push(createdProperty);

  // sending response after creating new property
  res.status(201).json({ property: createdProperty });
};

// ============================ // ============================
// updating property
exports.updateProperty = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('invalid inputs', 422);
  }

  // extracting only title and description for updating the property
  const { title, description } = req.body;
  const propertyId = req.params.pid;

  // createing a copy of dummy property by using a spread operator,
  const updatedProperty = {
    ...Dummy_property.find((p) => p.id === propertyId),
  };
  const propertyIndex = Dummy_property.find((p) => p.id === propertyId);

  updatedProperty.title = title;
  updatedProperty.description = description;

  Dummy_property[propertyIndex] = updatedProperty;

  res.status(200).json({ property: updatedProperty });
};

// ============================ // ============================
// deleting property
exports.deleteProperty = (req, res, next) => {
  const propertyId = req.params.pid;
  if (!Dummy_property.find((p) => p.id === propertyId)) {
    throw new HttpError('could not find a place for given ID', 404);
  }

  Dummy_property = Dummy_property.filter((p) => p.id !== propertyId);
  res.status(200).json({ message: 'Deletion completed' });
};
