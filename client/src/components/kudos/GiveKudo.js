import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { FormInput } from '../utilities/FormInput';
import { FlexColumnCenter } from '../page_layout/FlexLayout.js';

const GiveKudoWrapper = FlexColumnCenter.extend`
  border: solid;
  border-width: 1px;
  padding: 10px;
`
const ButtonWrapper = styled.div``

export default class GiveKudo extends React.Component {
  state = {
    kudo: '',
  }

  handleUserInput = ({ target }) => {
    const { value } = target;
    this.setState({kudo: value});
  }

  handleCreate = () => {
    this.props.onSubmit(this.state.kudo);
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    return (
      <GiveKudoWrapper>
        Give a kudo!
        <FormInput inputName={'kudo'}
                    changeCb={this.handleUserInput.bind(this)}
                    inputValue={this.state.kudo} />
        <ButtonWrapper>
            <Button 
              variant="outlined" color="primary"  style={{marginRight: '10px'}} onClick={this.handleCreate.bind(this)}
            >
              Submit
            </Button>
            <Button 
              variant="outlined" color="secondary" onClick={this.handleCancel.bind(this)}
            >
              Cancel
            </Button>
        </ButtonWrapper>
      </GiveKudoWrapper>
    )
  }
}