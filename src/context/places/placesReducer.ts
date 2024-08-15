import { PlacesState } from "./PlacesProvider";

type PLacesAction = { type: 'setUserLocation', payload: [number, number] };

export const placesReducer = ( state: PlacesState, action: PLacesAction ): PlacesState => {

    switch ( action.type ) {
      case 'setUserLocation':
        
        return {
          ...state, 
          isLoading: false,
          userLocation: action.payload
        }
    
      default:
        return state;
    }
}