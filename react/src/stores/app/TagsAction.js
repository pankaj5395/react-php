import TagsEffect from './TagsEffect';
import ActionUtility from '../../utilities/ActionUtility';

export default class TagAction {
  static REQUEST_TAG = 'TagAction.REQUEST_TAG';
  static REQUEST_TAG_FINISHED = 'TagAction.REQUEST_TAG_FINISHED';

  static REQUEST_ADD_TAG = 'TagAction.REQUEST_ADD_TAG';
  static REQUEST_ADD_TAG_FINISHED = 'TagAction.REQUEST_ADD_TAG_FINISHED';

  static REQUEST_DELETE = 'TagAction.REQUEST_DELETE';
  static REQUEST_DELETE_FINISHED = 'TagAction.REQUEST_DELETE_FINISHED';

  static requestTag() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, TagAction.REQUEST_TAG, TagsEffect.requestTags);
    };
  }

  static requestAddTag(data) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, TagAction.REQUEST_ADD_TAG, TagsEffect.requestAddTag, data);
    };
  }

  static requestDeleteTag(id) {
    return async (dispatch, getState) => {
    
      await ActionUtility.createThunkEffect(dispatch, TagAction.REQUEST_DELETE, TagsEffect.requestDeleteTag, id);
    };
  }

  static requestError() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, TagAction.REQUEST_ERROR, TagsEffect.requestError);
    };
  }
}
