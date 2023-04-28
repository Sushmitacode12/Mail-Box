import { configureStore } from "@reduxjs/toolkit";
import authslice from "./AuthSlice";
import sentboxslice from "./Sentboxslice";
import inboxslice from "./InboxSlice";

const store = configureStore({
    reducer:{auth:authslice.reducer, sent:sentboxslice.reducer, in: inboxslice.reducer}
})

export default store;