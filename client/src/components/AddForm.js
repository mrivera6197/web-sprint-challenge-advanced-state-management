import React, { useState } from 'react';
import { initialState } from '../reducers';
import { connect } from 'react-redux'

import styled from 'styled-components'

const StyledForm = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    form {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        padding: 0.5rem 3rem;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 4px;
        
    }

    label {
        margin: 0.7rem 0;
    }

    button {
        padding: 0.3rem;
        width: 50%;
        background-color: white;
        border: none;
        box-shadow: 1px 1px 4px;
        margin: 0.7rem 0;
    }

    button:hover{
        color: blue;
    }
`

const initialValues = {
    name: '',
    position: '',
    nickname: '',
    description: '',
}

const AddForm = (props) => {
    const [smurfInfo, setSmurfInfo] = useState(initialValues)

    const handleChange = (e) => {
        setSmurfInfo({
            ...smurfInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(smurfInfo)
    }

        return(<section>
            <StyledForm>
                <div className='container'>
                <h2>Join the Village</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label><br/>
                        <input
                        type='text'
                        value={smurfInfo.name} 
                        onChange={handleChange} 
                        name="name" 
                        id="name" 
                        />
                        <label htmlFor="position">Position:</label><br/>
                        <input
                        type='text'
                        value={smurfInfo.position} 
                        onChange={handleChange} 
                        name="position" 
                        id="position" 
                        />
                        <label htmlFor="nickname">Nickname:</label><br/>
                        <input
                        type='text'
                        value={smurfInfo.nickname} 
                        onChange={handleChange} 
                        name="nickname" 
                        id="nickname" 
                        />
                        <label htmlFor="description">Description:</label><br/>
                        <input
                        type='text'
                        value={smurfInfo.description} 
                        onChange={handleChange} 
                        name="description" 
                        id="description" 
                        />
                    </div>

                    <div data-testid="errorAlert" className={props.error === '' ? '' : "alert alert-danger"} role="alert">Error: </div>
                    <button>Submit Smurf</button>
                </form>
                </div>
            </StyledForm>
            
        </section>);
    }

    const mapStateToProps = state => {
        return {
            smurfs: state.smurfs,
            isLoading: state.isLoading,
            error: state.error,
        }
    }

export default connect(mapStateToProps, {})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.