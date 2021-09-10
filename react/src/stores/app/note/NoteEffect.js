import environment from 'environment';
import HttpErrorResponseModel from '../../../models/HttpErrorResponseModel';
import HttpUtility from '../../../utilities/HttpUtility';
import NoteModel from '../models/note/NoteModel';

import EffectUtility from '../../../utilities/EffectUtility';

export default class NoteEffect {
  static async requestEffect() {
    const endpoint = environment.api.notes;
    return EffectUtility.getToModel(NoteModel, endpoint);
  }

  static async requestAddEffect(data) {
    const endpoint = environment.api.notes;
    return EffectUtility.postToModel(NoteModel, endpoint, data);
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
