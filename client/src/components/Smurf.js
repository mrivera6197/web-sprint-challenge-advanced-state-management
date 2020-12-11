import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledSmurf = styled.div`
        .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                margin: 2rem;
                padding: 2rem;
                width: 60%;
                line-height: 1.2rem;
                box-shadow: 3px 3px 6px #05b0ff;
        }

        .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

        }

`

const Smurf = (props) => {

        return(
        <StyledSmurf>
                <div className='container'>
                        <div data-testid="smurf" className="card">
                                <h3>{props.smurf.name}</h3>
                                <div className='info'>
                                        <p>position: {props.smurf.position}</p>
                                        <p>nickname: {props.smurf.nickname}</p>
                                        <p>bio: {props.smurf.description}</p>
                                </div>

                        </div>
                </div>
        </StyledSmurf>
        );
}

const mapStateToProps = state => {
        return {
            smurfs: state.smurfs,
            isLoading: state.isLoading,
            error: state.error,
        }
    }

export default connect(mapStateToProps, {})(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.