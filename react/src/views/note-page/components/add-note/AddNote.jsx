import React from 'react';
import { connect } from 'react-redux';

import TagAction from '../../../../stores/app/TagsAction';
import NoteAction from '../../../../stores/app/note/NoteAction';
import { Button, Modal , Input, Grid, TextArea} from 'semantic-ui-react'
const mapStateToProps = (state, ownProps) => ({
  tags: state.tags.tags,
});

class AddNote extends React.Component {
  state={
    title: '',
    description: '',
    tags: []
  }
  componentDidMount() {
    this.props.dispatch(TagAction.requestTag());
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleOnChange = (e) => {
    let isExist = this.state.tags.filter(tag => tag === e.target.value);
    if(isExist.length > 0){
      let index = this.state.tags.indexOf(e.target.value)
      this.state.tags.splice(index,1);

      this.setState({tags: this.state.tags})
    } 
    else{
      this.setState({tags: [...this.state.tags, e.target.value]})
    }
  };

  saveNote = () =>{
    const {title, description, tags} = this.state
    this.props.dispatch(NoteAction.requestAddNote({title, description, tags: tags.join()}));
    this.props.closeModal(true);
  }

  render() {
    
    console.log(this.state)
    const {title, description, tags} = this.state
    console.log(title, description, tags);

    return (
      <Modal open={true}>
      <Modal.Header>Add Note</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Column width="4">
          <label className= "col-md-3">Title</label>
          </Grid.Column>
          <Grid.Column width="10">
            <Input type="text" name="title" value={title} onChange={this.onChange}></Input>
        </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width="4">
          <label className= "col-md-3">Description</label>
          </Grid.Column>
          <Grid.Column width="10">
            <TextArea name="description" value={description} onChange={this.onChange}></TextArea>
        </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width="4">
          <label className= "col-md-3">Tags</label>
          </Grid.Column>
          <Grid.Column width="10">
          {this.props.tags && this.props.tags.map((tag, index) => {
              return <div width="12" key={index}>
                <Input type="checkbox" name="tags" value={tag.id} onChange={this.handleOnChange}/>
                <span>{tag.name}</span>
              </div>
          })}
          </Grid.Column>
        </Grid>
        
          
      </Modal.Content>
      <Modal.Actions>
      <Button onClick={()=> this.props.closeModal(true)}>Close</Button>
        <Button
          content="Create"
          labelPosition='right'
          icon='checkmark'
          onClick={this.saveNote}
          positive
        />
      </Modal.Actions>
    </Modal>
    );
  }
}

export { AddNote as Unconnected };
export default connect(mapStateToProps)(AddNote);
