// use ES modules throughout the action
import request from "request-promise";

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
};

export default async function getJoke() {
  const res = await request(options);
  return res.joke;
}