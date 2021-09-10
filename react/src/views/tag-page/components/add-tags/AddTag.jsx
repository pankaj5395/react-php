import React from 'react';
import { connect } from 'react-redux';

import TagAction from '../../../../stores/app/TagsAction';
import { Button,  Input, Grid} from 'semantic-ui-react'
const mapStateToProps = (state, ownProps) => ({
  tags: state.tags.tags,
});

class AddTag extends React.Component {
  state={
    name: ''
  }
  componentDidMount() {
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  saveTag = () =>{
    const {name} = this.state
    this.props.dispatch(TagAction.requestAddTag({name}));
  }

  render() {
    const {name} = this.state
    return (
      
        <Grid>
          <Grid.Column width="4">
            <Input type="text" placeholder="Tag Name" name="name" value={name} onChange={this.onChange}></Input>
        </Grid.Column>
        <Grid.Column width="4">
            <Button
            onClick={this.saveTag}
            color="green"
            >Create</Button>
        </Grid.Column>
        </Grid>
        
    );
  }
}

export { AddTag as Unconnected };
export default connect(mapStateToProps)(AddTag);
