import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogInContext from '../../LogInContext';
import Button from './Button';
import { useTranslation, initReactI18next } from "react-i18next";

function loginReducer(state, action) {
    switch (action.type) {
      case 'field': {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case 'login': {
        return {
          ...state,
          error: '',
          isLoading: true,
        };
      }
      case 'success': {
        return {
          ...state,
          isLoggedIn: true,
          isLoading: false,
        };
      }
      case 'error': {
        return {
          ...state,
          error: 'Incorrect username or password!',
          isLoggedIn: false,
          isLoading: false,
          username: '',
          password: '',
        };
      }
      case 'logOut': {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
      default:
        return state;
    }
  }
  const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
};

export default function LogIn() {
    const {t} =useTranslation();

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error, isLoggedIn } = state;
    const {logedIn, setLogedIn} = useContext(LogInContext);

    useEffect(() => {
        setLogedIn(!logedIn)
    }, [state.isLoggedIn])
    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'login' });
        if (username === 'Linda' && password === 'password') {
            dispatch({type: 'success'})
          } else {
            dispatch({type: 'error'})
        }
    };

    return (
        <>
        {isLoggedIn ? (
        <>
        <div className='ProfileDiv'>
            <ul>
                <li className='ProfileDivSections'>
                    <FontAwesomeIcon icon={['far','user']} mask='far' className='userIcon headerMainIcon'/>
                    <Link to='Profile'>
                        {t('prof')}
                    </Link>
                </li>
                <li className='ProfileDivSections'>
                    <FontAwesomeIcon icon={['fas','box-open']} mask='far' className='userIcon headerMainIcon'/>
                    {t('order')}
                </li>
                <li className='ProfileDivSections'>
                    <FontAwesomeIcon icon={['fas','gift']} mask='far' className='userIcon headerMainIcon'/>
                    {t('card')}
                </li>
                <li className='ProfileDivSections'>
                    <FontAwesomeIcon icon={['far','bell']} mask='far' className='userIcon headerMainIcon'/>
                    {t('notific')}
                </li>
                <li className='ProfileDivSections' onClick={() => dispatch({ type: 'logOut' })}>
                    <FontAwesomeIcon icon={['fas','sign-out-alt']} mask='far' className='userIcon headerMainIcon'/>
                    {t('logOut')}
                </li>
            </ul>
        </div>
        </>
        )
        :
        (
            <form className='logIn' 
            onSubmit={onSubmit}
            >
            {error && <p className='error'>{error}</p>}
            <h3 className='logInTitle'>{t('authentic')}</h3>
            <div className='userInputDiv'>
                <input
                    type='text' 
                    name='logInEmail' 
                    id='logInEmail' 
                    className='userInput' 
                    value={username}
                    onChange={(e) =>
                        dispatch({
                        type: 'field',
                        fieldName: 'username',
                        payload: e.currentTarget.value,
                        })
                    }
                />
                <FontAwesomeIcon icon={['far','envelope']} className='logInIcons' mask={['fas']}/>
            </div>
            <div className='userInputDiv'>
                <input 
                    type='password' 
                    name='logInPassword' 
                    id='logInPassword' 
                    className='userInput' 
                    value={password}
                    onChange={(e) =>
                        dispatch({
                          type: 'field',
                          fieldName: 'password',
                          payload: e.currentTarget.value,
                        })
                    }
                />
                <FontAwesomeIcon icon='eye' className='logInIcons' />
            </div>
            <a className='passwordRecoveryLink' href='/'>{t('passRecovery')}</a>
            <div className='logInBtnsDiv'>
                <Button type='submit' content={isLoading ? 'Logging in...' : t('login')}/>
                <Button customClass='registerBtn' type='reset' content={t('signUp')} />                        
            </div>
            <Button customClass='fbBtn' content={t('fbBTN')}/>
            </form>
            )
        }
        </>
    )
}