import { createSlice} from '@reduxjs/toolkit';

const movieListSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            movieLists : null,
            nowPlayingmovies: null,
        },
        reducers: {
            addNowPlayingMovie: (state , action) => {
               state.movieLists = action.payload;
            },
            addTrailerId : (state, action) => {
                state.nowPlayingmovies = action.payload;
            }
        }
    }
)

export const {addNowPlayingMovie , addTrailerId} = movieListSlice.actions;
export default movieListSlice.reducer;