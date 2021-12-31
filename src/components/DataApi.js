import axios from "axios";

export const sendDataApi = async (adress, geoAdress, description, data) => {
  return await axios.post(
    "https://immense-reef-45036.herokuapp.com/auth/signup",
    {
      adress,
      geoAdress,
      description,
      data,
    }
  );
};
export const retrievalDataApi = async () => {
  return axios.get(
    "https://immense-reef-45036.herokuapp.com/auth/getApartment"
  );
};
