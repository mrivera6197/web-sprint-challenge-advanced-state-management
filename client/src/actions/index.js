import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_FAIL = 'FETCHING_SMURFS_FAIL'
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'

export const fetchSmurfs = () => {

}

export const addSmurf = () => {
    
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.