const host = 'localhost'

module.exports = {
  API_KEY: "AIzaSyAGb7z9IMTfFdZyt1HbBY6_NqWESfC91Tw", // kay for web
  port: process.env.port || process.env.PORT || '3005',
  mongoUrl: process.env.MONGODB_URI
}