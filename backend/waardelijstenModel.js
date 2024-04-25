
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'bzk',
  host: 'localhost',
  database: 'Word4OD_eigen software',
  password: 'bzk',
  port: 5433,   //poortnummer van de database
});

//get all hoofdlijnen
const getHoofdlijnen = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT id, identificatie, soort_hoofdlijn_id, naam, regeling_id, datum_begin FROM hoofdlijn", (error, results) => {
        if (error) {
          console.log(error)
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};


  module.exports = {
    getHoofdlijnen
  };
