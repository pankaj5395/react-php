import React from 'react';
import { connect } from 'react-redux';
import {  Grid, Divider} from 'semantic-ui-react'
import styles from './NoteBlock.module.scss';
class NoteBlock extends React.Component {
  componentDidMount() {
  }


  render() {

    const {title, description, tags, created_at} = this.props.note
    console.log(title, description, tags);

    return (<>
        <Grid>
          <Grid.Column width="10">
            <h3>{title}</h3>
          </Grid.Column>
          <Grid.Column width="6">
            <span>{created_at}</span>
          </Grid.Column>
          <Grid.Column width="16">
            <span>{description}</span>
          </Grid.Column>
          <Grid.Column width="16">
          <Grid>
            {tags && tags.map((tag,key)=>{
              return <Grid.Column key={key} width="2">
                <div className={styles.tagname}>
                  {tag.name}
                </div>
              </Grid.Column>
            })}
          </Grid>
          </Grid.Column>

        </Grid>
         <Divider inverted />
      </>
    );
  }
}

export { NoteBlock as Unconnected };
export default connect()(NoteBlock);
