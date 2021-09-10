import styles from './NotePage.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import AddNote from './components/add-note/AddNote';
import NoteBlock from './components/note-block/NoteBlock';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import { Button, Grid } from 'semantic-ui-react';
import NoteAction from '../../stores/app/note/NoteAction';
const mapStateToProps = (state, ownProps) => ({
  isRequesting: selectRequesting(state, [NoteAction.REQUEST_NOTE]),
  notes: state.notes.notes,
});

class HomePage extends React.Component {
  state = {
    add: false
  }

  componentDidMount() {
    this.props.dispatch(NoteAction.requestNote());
  }

  render() {
    const { isRequesting, notes } = this.props;
    console.log(isRequesting, notes)
    const {add} = this.state
    return (
      <div className={styles.wrapper}>
        <LoadingIndicator isActive={isRequesting}>
          <div>
            {add && <AddNote closeModal={() => {this.setState({add: false})}} />}
            <Button onClick={() =>{this.setState({add: true})}}>Add Note</Button>
            <Grid className={styles.noteData}> 
              <Grid.Column width="16">
              {notes.length === 0 && <span>No data available</span>}

              {notes && notes.length > 0 && notes.map((note, key) => {
              return <NoteBlock key={key} note={note} />
              })}
              </Grid.Column>
            </Grid>
          </div>
        </LoadingIndicator>
      </div>
    );
  }
}

export { HomePage as Unconnected };
export default connect(mapStateToProps)(HomePage);
