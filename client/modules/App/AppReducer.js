// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST, TOGGLE_THUMB_UP, TOGGLE_THUMB_DOWN } from './AppActions';
// Initial State
const initialState = {
  showAddPost: false,
  showEditPost: false,
  showThumbUp: false,
  showThumbDown: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_EDIT_POST:
  		return {
    		...state,
    	showEditPost: !state.showEditPost,
	};
    case TOGGLE_THUMB_UP:
       return {
         ...state,
         showThumbUp: !state.showThumbUp,
       };
          
    case TOGGLE_THUMB_DOWN:
       return {
         ...state,
         showThumbDown: !state.showThumbDown,
       };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowEditPost = state => state.app.showEditPost;
export const getShowThumbUp = state => state.app.showThumbUp;
export const getShowThumbDown = state => state.app.showThumbDownS;

// Export Reducer
export default AppReducer;
