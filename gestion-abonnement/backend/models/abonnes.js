const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let abonneSchema = new Schema(
 {  
AbonneName: {type: String},
AbonneFirstName: {type: String},
AbonneCin: {type: String},
AbonnePhoneNumber: {type: String},
AbonneEtudiant: {type: Boolean},
AbonnePhoto: {type: String}
}, {
collection: 'abonnes'
}

);

module.exports = mongoose.model('Abonne', abonneSchema);


