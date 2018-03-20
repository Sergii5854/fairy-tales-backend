const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3000',
   mongoUrl: process.env.MONGODB_URI || `mongodb://admin:123@ds215759.mlab.com:15759/fairy-tales`
}
