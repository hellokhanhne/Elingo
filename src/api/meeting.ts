import axios from 'axios';

export const METTING_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjZThjMjA2Zi0xZjk0LTRkZWItODU2NC0yZmZhMDQ2MTk3YjAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NTkzNjgxOCwiZXhwIjoxNzAxNDg4ODE4fQ.qHoFSDghQl9q0aSK91EUU27uAecSryt7soY6TpRTVJw';
// API call to create meeting
export const createMeeting = async () => {
  try {
    const res = await axios.post(
      `https://api.videosdk.live/v2/rooms`,
      {
        region: 'sg001',
      },
      {
        headers: {
          Authorization: METTING_TOKEN,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = res.data;

    return data.roomId;
  } catch (error) {
    console.log('error', error);
  }
};
