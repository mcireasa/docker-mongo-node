const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    require: true
  },
  user_msg: {
    type: String,
    require: false
  }

});

module.exports = Form = mongoose.model('item', FormSchema);
