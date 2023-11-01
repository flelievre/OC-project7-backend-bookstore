const uniqueValidator = require('mongoose-unique-validator');
const {
  mongoose,
} = require('../../../mongodb/mongodbClient');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('User', userSchema);

exports.default = UserModel;
