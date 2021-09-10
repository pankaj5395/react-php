import { BaseModel } from 'sjs-base-model';
import TagModel from '../tag/TagModel'
export default class NoteModel extends BaseModel {
  id = 0;
  title = '';
  tags = [TagModel];
  description = '';
  created_at = '';  
  /*
   * Client-Side properties (Not from API)
   */
  // noneApiProperties = null;

  constructor(data) {
    super();

    this.update(data);
  }
}
