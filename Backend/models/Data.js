
// const mongoose = require('mongoose');

// const registrationSchema = new mongoose.Schema({
//   parentName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   childAge: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/\S+@\S+\.\S+/, 'is invalid'],
//     trim: true
//   },
//   yourAge: {
//     type: Number,
//     required: true,
//     min: 0
//   },
//   city: {  // Update here
//     type: String,
//     required: true,
//     trim: true
//   },
//   reference: {  // Update here
//     type: String,
//     trim: true
//   }
// }, {
//   timestamps: true // Adds createdAt and updatedAt timestamps
// });

// const Registration = mongoose.model('PostiveHindiRegistration', registrationSchema);

// module.exports = Registration;


const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
    trim: true
  },
  childAge: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    trim: true
  },
  phoneNumber: { // Added phone number field
    type: String,
    trim: true
  },
  yourAge: {
    type: Number,
    required: true,
    min: 0
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  reference: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Registration = mongoose.model('postiveEnglishRegistration', registrationSchema);

module.exports = Registration;
