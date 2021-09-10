import styles from './TagPage.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import TagAction from '../../stores/app/TagsAction';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { Button, Header, Input, Grid} from 'semantic-ui-react'
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import TagBlock  from './components/tag-block/TagBlock';
import AddTag from './components/add-tags/AddTag';
const mapStateToProps = (state, ownProps) => ({
  tags: state.tags.tags,
  isRequesting: selectRequesting(state, [TagAction.REQUEST_TAG]),
});

class TagPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(TagAction.requestTag());
  }

  render() {
    const { isRequesting, tags } = this.props;
  
    return (
      <div className={styles.wrapper}>
        <Header as="h2">Tags</Header>
        <AddTag />
        <LoadingIndicator isActive={isRequesting}>
          <div>
            
            <Grid className={styles.noteData}> 
              <Grid.Column width="16">
              {tags.length === 0 && <span>No data available</span>}

              {tags && tags.length > 0 && tags.map((tag, key) => {
              return <TagBlock key={key} tag={tag} />
              })}
              </Grid.Column>
            </Grid>
          </div>
        </LoadingIndicator>
      </div>
    );
  }
}

export { TagPage as Unconnected };
export default connect(mapStateToProps)(TagPage);
