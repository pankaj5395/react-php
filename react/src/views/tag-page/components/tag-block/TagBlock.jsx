import React from 'react';
import { connect } from 'react-redux';

import TagAction from '../../../../stores/app/TagsAction';
import { Button, Grid} from 'semantic-ui-react'
const mapStateToProps = (state, ownProps) => ({
  tags: state.tags.tags,
});

class TagBlock extends React.Component {
  
    componentDidMount() {
    }
    deleteTag = () =>{
        this.props.dispatch(TagAction.requestDeleteTag(this.props.tag.id));
    }
    render() {
        const {name, id} = this.props.tag
        return (
        
            <Grid>
            <Grid.Column width="4">
                {name}
            </Grid.Column>
            
            <Grid.Column width="4">
                <Button
                onClick={this.deleteTag}
                color="red"
                >Delete</Button>
            </Grid.Column>
            </Grid>
            
        );
    }
}

export { TagBlock as Unconnected };
export default connect(mapStateToProps)(TagBlock);
