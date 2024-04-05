import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [{
            name: 'Roma',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/210',
            visited: false
        },
        {
            name: 'Milan',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/205',
            visited: true
        },
        {
            name: 'Napoli',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/201',
            visited: false
        },
        {
            name: 'Palermo',
            country: 'Italia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/190',
            visited: true
        },
        {
            name: 'Parigi',
            country: 'Francia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod.',
            image: 'https://picsum.photos/200/204',
            visited: false
        }]
    },
    reducers: {
        addCity: (state, action) => {
            state.value.push(action.payload)
        },
        updateCity: (state, action) => {
            state.value[action.payload.id] = action.payload.formDate;
        },
        deleteCity: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addCity, updateCity, deleteCity } = citiesSlice.actions
export default citiesSlice.reducer