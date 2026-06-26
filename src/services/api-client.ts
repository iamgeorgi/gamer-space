import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc2dbd0a238a4da28c6af5d31bd27806",
  },
});