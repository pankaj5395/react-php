import environment from 'environment';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import HttpUtility from '../../utilities/HttpUtility';
import TagModel from './models/tag/TagModel';
import EffectUtility from '../../utilities/EffectUtility';

export default class TagsEffect {
  static async requestTags() {
    const endpoint = environment.api.tag;
    return EffectUtility.getToModel(TagModel, endpoint);
  }

  static async requestAddTag(data) {
    const endpoint = environment.api.tag;
    console.log(data);
    return EffectUtility.postToModel(TagModel, endpoint, data);
  }
  
  static async requestDeleteTag(id) {
    const endpoint = environment.api.tag + '/' + id;
    return EffectUtility.deleteToModel(TagModel, endpoint);
  }
  

  /**
   * This is only to trigger an error api response so we can use it for an example in the AboutPage
   */
  static async requestError() {
    const endpoint = environment.api.errorExample;
    const response = await HttpUtility.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return response.data;
  }
}
