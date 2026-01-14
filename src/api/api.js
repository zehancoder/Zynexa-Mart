import axios from "axios";

const api = async (...urls) => {
  try {
    const responses = await Promise.all(
      urls.map((url) => axios.get(url))
    );

    // শুধু data return করলে বেশি useful হয়
    return responses.map(res => res.data);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default api;


