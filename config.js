const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3000',
   mongoUrl: process.env.MONGODB_URI || `mongodb://tales:1111@ds215739.mlab.com:15739/fairytales`
}
