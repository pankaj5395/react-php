import TagsAction from './TagsAction';
import BaseReducer from '../../utilities/BaseReducer';

export default class TagsReducer extends BaseReducer {
  initialState = {
    tags: [],
  };

  [TagsAction.REQUEST_TAG_FINISHED](state, action) {
    return {
      ...state,
      tags: action.payload,
    };
  }

  [TagsAction.REQUEST_ADD_TAG_FINISHED](state, action) {
    let tags = [...state.tags, action.payload];
    return {
      ...state,
      tags: tags,
    };
  }

  [TagsAction.REQUEST_DELETE_FINISHED](state, action) {
    return {
      ...state,
      tags: action.payload,
    };
  }
}
