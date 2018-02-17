var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var PORT = process.env.port || 3000;

var app = express();

// parse application
app.use(bodyParser.json());
