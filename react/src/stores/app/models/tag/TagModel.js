import { BaseModel } from 'sjs-base-model';

export default class TagModel extends BaseModel {
  id = 0;
  name = '';
  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties = null;

  constructor(data) {
    super();

    this.update(data);
  }
}
