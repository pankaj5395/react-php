import NoteEffect from './NoteEffect';
import ActionUtility from '../../../utilities/ActionUtility';

export default class NoteAction {
  static REQUEST_NOTE = 'NoteAction.REQUEST_NOTE';
  static REQUEST_NOTE_FINISHED = 'NoteAction.REQUEST_NOTE_FINISHED';

  static REQUEST_ADD_NOTE = 'NoteAction.REQUEST_ADD_NOTE';
  static REQUEST_ADD_NOTE_FINISHED = 'NoteAction.REQUEST_ADD_NOTE_FINISHED';


  static requestNote() {
    return async (dispatch, getState) => {
    
      await ActionUtility.createThunkEffect(dispatch, NoteAction.REQUEST_NOTE, NoteEffect.requestEffect);
    };
  }

  static requestAddNote(data) {
    return async (dispatch, getState) => {
      console.log('data', data)
      await ActionUtility.createThunkEffect(dispatch, NoteAction.REQUEST_ADD_NOTE, NoteEffect.requestAddEffect, data);
    };
  }

  static requestError() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, NoteAction.REQUEST_ERROR, NoteEffect.requestError);
    };
  }
}
