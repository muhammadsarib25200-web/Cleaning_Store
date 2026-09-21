import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'house',
    servicesData: {
        house: [
            {
                id: 1,
                title: 'Garden Cleaning',
                description: 'mattress sanitizing, linen changing, and complete floor vacuuming.',
                icon: '🪴',
                category: 'house',
            },
            {
                id: 'h2',
                title: 'Bedroom Cleaning',
                description: 'Deep dusting, mattress sanitizing, linen changing, and complete floor vacuuming.',
                icon: '🪟',
                category: 'house'
            }, 
            {
               id : 3,
               title : 'Kitchen Cleaning',
               description : 'Deep dusting, mattress sanitizing, linen changing and complete floor vacumming',
               icon: '🧽',
               category : 'house',
            },
            {
                id : 4,
                title : 'Plumbing Services',
                description : 'Pipe leak repairs, bathroom fixture unclogging, and full sanitation maintenance.',
                icon: '🚽',
                category : 'house',
            }
        ],
        business : [
            {
        id: 'b1',
        title: 'Office Space Washing',
        description: 'Desk sanitization, carpet vacuuming, glass partition wiping, and trash removal.',
        icon: '🏢',
        category: 'business'
      },
      {
        id: 'b2',
        title: 'Maintenance Cleaning',
        description: 'Routine scheduled facility cleaning, floor polishing, and restock amenities.',
        icon: '🧹',
        category: 'business'
      },
      {
        id: 'b3',
        title: 'Commercial Cleaning',
        description: 'Heavy-duty industrial floor scrubbing, high-ceiling dusting, and deep cleaning.',
        icon: '🧺',
        category: 'business'
      },
      {
        id: 'b4',
        title: 'Corporate Sanitize',
        description: 'Full medical-grade aerosol disinfection for conference rooms and shared spaces.',
        icon: '✨',
        category: 'business'
      }
        ]
    }
};

const serviceSlice = createSlice({
    name : 'services',
    initialState,
    reducers : {
        setSelectedCategory : (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
});
export const {setSelectedCategory} = serviceSlice.actions;
export default serviceSlice.reducer;
