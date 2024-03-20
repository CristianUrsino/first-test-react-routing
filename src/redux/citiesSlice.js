import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: [
        {
            name: 'Roma',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/300',
            visited: false
        },
        {
            name: 'Milan',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/300',
            visited: true
        },
        {
            name: 'Napoli',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/300',
            visited: false
        },
        {
            name: 'Palermo',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/300',
            visited: true
        }
    ],
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addCity } = citiesSlice.actions
export default citiesSlice.reducer