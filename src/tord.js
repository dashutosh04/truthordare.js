const Fetch = require("node-fetch");
const base_url = "https://api.truthordarebot.xyz/api/";

/**
 * --Truth--
 * @param {object} params -> Nhie({rating:"`rating-here`"}) || Valid ratings -> `PG` , `PG13` , `R`
 * @returns {Data} Raw Data From the API
 */

async function truth(params = {}) {
  var data;
  var rating_tag;
  if (params & params.rating & (params.rating == "R" || "PG13" || "PG")) {
    rating_tag = `?rating=${params.rating}`;
  } else {
    rating_tag = "";
  }

  const res = await Fetch(`${base_url}truth${rating_tag}`);

  json = await res.json();
  data = json;

  if (json.error)
    throw new Error(
      `There was an error while getting the request from the api, please try again later..`
    );
  return data;
}

/**
 * --Dare--
 * @param {object} params -> Nhie({rating:"`rating-here`"}) || Valid ratings -> `PG` , `PG13` , `R`
 * @returns {Data} Raw Data From the API
 */

async function dare(params = {}) {
  var data;
  var rating_tag;

  if (params & params.rating & (params.rating == "R" || "PG13" || "PG")) {
    rating_tag = `?rating=${params.rating}`;
  } else {
    rating_tag = "";
  }

  const res = await Fetch(`${base_url}dare${rating_tag}`);

  json = await res.json();

  data = json;
  if (json.error)
    throw new Error(
      `There was an error while getting the request from the api, please try again later..`
    );
  return data;
}
module.exports = { truth, dare };
