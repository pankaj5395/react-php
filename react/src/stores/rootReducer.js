import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RequestingReducer from './requesting/RequestingReducer';
import ErrorReducer from './error/ErrorReducer';
import TagsReducer from './app/TagsReducer';
import NotesReducer from './app/note/NoteReducer';
import ToastsReducer from './toasts/ToastsReducer';

export default (history) => {
  const reducerMap = {
    error: ErrorReducer.reducer,
    requesting: RequestingReducer.reducer,
    router: connectRouter(history),
    tags: new TagsReducer().reducer,
    notes: new NotesReducer().reducer,
    toasts: new ToastsReducer().reducer,
  };

  return combineReducers(reducerMap);
};
