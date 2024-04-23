// @ts-nocheck
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PoC_annoteren-met-react',
  password: 'postgres',
  port: 5432,   //poortnummer van de database
});

//get all gebiedsaanwijzingen
const getGebiedsaanwijzingen = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM geb_aanw", (error, results) => {
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

//get gebiedsaanwijzingen van tekstdelen
const getGebiedsaanwijzingenTekstdeel = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM tekstdeel_gebiedsaanwijzing_aanduiding", (error, results) => {
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
    getGebiedsaanwijzingen,
    getGebiedsaanwijzingenTekstdeel
  };
