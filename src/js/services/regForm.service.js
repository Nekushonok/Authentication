import axios from '../plugins/axios';


export async function signUp(userData) {
  try {
    const response = await axios.post(
      `/auth/signup`,
      JSON.stringify(userData),
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
