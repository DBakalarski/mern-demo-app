// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';
export const TOGGLE_THUMB_UP = 'TOGGLE_THUMB_UP';
export const TOGGLE_THUMB_DOWN = 'TOGGLE_THUMB_DOWN';
// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleEditPost() {
  return {
    type: TOGGLE_EDIT_POST,
  };
}

export function toggleThumbUp() {
  return {
    type: TOGGLE_THUMB_UP,
  };
}

 export function toggleThumbDown() {
  return {
    type: TOGGLE_THUMB_DOWN,
  };
 }