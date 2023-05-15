import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DEFAULT_PROFILE_IMAGE } from "../../global/Constants";
import { API } from "../../global/Constants";

const initialState = {
  auth: false,
  age: 0,
  email: "",
  gender: 0,
  name: "",
  phoneNumber: "",
  profileImage: DEFAULT_PROFILE_IMAGE,
  role: "",
  isAdmin: false,
  userId: 0,
  location: "",
};

const __asyncLogin = createAsyncThunk(
  "userSlice/asyncLogin",
  async (payload) => {
    const result = await axios
      .post(API + "/user/login", payload)
      .then((response) => {
        localStorage.setItem("token", response.data.data);
        return true;
      })
      .catch(() => false);

    return result;
  }
);

const __asyncAuth = createAsyncThunk("userSlice/asyncAuth", async () => {
  const result = axios
    .get(API + "/user/auth", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      return { ...response.data.data, auth: response.data.success };
    })
    .catch(() => {
      return { auth: false };
    });

  return result;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      alert("로그아웃 완료!");
      localStorage.removeItem("token");
      state.auth = false;
      state.age = 0;
      state.email = "";
      state.gender = 0;
      state.name = "";
      state.phoneNumber = "";
      state.profileImage = DEFAULT_PROFILE_IMAGE;
      state.role = "";
      state.isAdmin = false;
      state.userId = 0;
    },
    deleteUser: (state) => {
      localStorage.removeItem("token");
      state.auth = false;
      state.age = 0;
      state.email = "";
      state.gender = 0;
      state.name = "";
      state.phoneNumber = "";
      state.profileImage = DEFAULT_PROFILE_IMAGE;
      state.role = "";
      state.isAdmin = false;
      state.userId = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__asyncAuth.fulfilled, (state, payload) => {
      state.auth = payload.payload.auth;
      state.age = payload.payload.age;
      state.email = payload.payload.email;
      state.gender = payload.payload.gender;
      state.name = payload.payload.name;
      state.phoneNumber = payload.payload.phoneNumber;
      state.profileImage = payload.payload.profileImage;
      state.role = payload.payload.role;
      state.isAdmin = payload.payload.role === 3 ? true : false;
      state.userId = payload.payload.userId;
      state.location = payload.payload.location;
    });
  },
});

export default userSlice;
export const { logout, deleteUser } = userSlice.actions;
export { __asyncLogin, __asyncAuth };
