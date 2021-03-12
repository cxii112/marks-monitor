import axios from "axios";
import { IBalance } from "../interfaces/Balance";

const HOST = 'https://marks-mon.herokuapp.com'
const PREFIX = 'api/weeks/v1'

export default {
  get: function () {
    return axios.get(
      `${HOST}/${PREFIX}/get/`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  },
  create: function (weekData: IBalance) {
    return axios.post(
      `${HOST}/${PREFIX}/create/`,
      weekData,
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
}