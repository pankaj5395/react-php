import NoteAction from './NoteAction';
import BaseReducer from '../../../utilities/BaseReducer';

export default class NoteReducer extends BaseReducer {
  initialState = {
    notes: [],
  };

  [NoteAction.REQUEST_NOTE_FINISHED](state, action) {
    console.log(action);
    return {
      ...state,
      notes: action.payload,
    };
  }
  [NoteAction.REQUEST_ADD_NOTE_FINISHED](state, action) {
    console.log(action, state);
    let notes = [...state.notes, action.payload];
    console.log('tags', notes)
    return {
      ...state,
      notes: action.payload,
    };
  }
}
