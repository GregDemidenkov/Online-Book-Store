import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Book } from "./types"

export const getBestsellers = createAsyncThunk<Book[]>("bestsellers/getBestsellers", async () => {
    return fetch("http://localhost:3001/books?_sort=raiting.countBuy&_order=desc&_limit=10")
    .then((res) => 
        res.json()
    )
})

type bestsellersState = {
    list: Book[],
    loading: boolean
}

const initialState: bestsellersState = {
    list: [],
    loading: false
}

const bestsellersSlice = createSlice({
    name: "bestsellers",
    initialState,
    reducers: {
        getBestsellersList(state, action: PayloadAction<Book[]>) {
            state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBestsellers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBestsellers.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        });
        builder.addCase(getBestsellers.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { getBestsellersList } = bestsellersSlice.actions;

export default bestsellersSlice.reducer