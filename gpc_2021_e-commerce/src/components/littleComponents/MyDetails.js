import { useState, useEffect, useReducer } from "react/cjs/react.development";

export default function MyDetails() {
    const [user, setUser] = useState({});
    
    useEffect (() => {
        fetch('https://lindagiorgadze.github.io/FakeServer/user.json')
            .then(response => response.json())
            .then(
                (result) => {
                    setUser(result.Users);
                },
                (error) => {
                    alert(error)
                }
            )
    }, []);
    var account 
    if (user.length > 0) {
        account = user
            .filter((eachUser) => {
                return eachUser.username === 'Linda'
            })
            .map((person)=> {
            return person
            })[0]
    } else {
        account = 'User not found'
    }

    const initialFormState = {
        username: account.username,
        surname: account.surname,
        address: account.address,
        phoneNumber: account.phoneNumber,
        email: account.email,
        birthday: account.birthday,
        image: account.image,
        interestField: account.interestField
    }

    const formReducer = (state, action) => {
        switch(action.type) {
            case 'changeText':
                return {
                    ...state,
                    [action.field]: action.payload,
                }
            default:
                return state;
        }
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    function inputTextChange (e) {
        dispatch({
            type: "changeText",
            field: e.target.id,
            payload: e.target.value
        });
    }

    function onFromSubmit(e) {
        e.preventDefault();
        alert (
            `Form is Submited Successfully, ${formState.username}`
        );
    }
    return(
        <form className='MyDetails' action='/submit' onSubmit={onFromSubmit} >
            <label>
                სახელი
                <input type='text' name='username' id='username' value={formState.username} onChange={inputTextChange} placeholder={initialFormState.username}/>                            
            </label>
            <label>
                გვარი
                <input type='text' id='surname' value={formState.surname} onChange={inputTextChange} placeholder={initialFormState.surname}/>                            
            </label>
            <label>
                მისამართი
                <input type='text' id='address' value={formState.address} onChange={inputTextChange} placeholder={initialFormState.address}/>                            
            </label>
            <label>
                ტელეფონი
                <input type='tel' id='mobileNumber' value={formState.phoneNumber} onChange={inputTextChange} placeholder={initialFormState.phoneNumber}/>                            
            </label>
            <label>
                ელ ფოსტა
                <input type='email' id='email' value={formState.email} onChange={inputTextChange} placeholder={initialFormState.email}/>                            
            </label>
            <label>
                დაბადების დღე
                <input type='date' id='bday' />                            
            </label>
            <img id='image' src={initialFormState.image}/>
            <div className='interestField'>
                <span>დაინტერესებული</span>
                <div className='interestFieldRow'>
                    <label>
                        <input type='checkbox' id='drugs' /> 
                        მედიკამენტები   
                    </label>
                    <label>
                        <input type='checkbox' id='food' /> 
                        საკვები   
                    </label>
                    <label>
                        <input type='checkbox' id='makeUp' /> 
                        კოსმეტიკა   
                    </label>
                    <label>
                        <input type='checkbox' id='hygiene' /> 
                        ჰიგიენური საშუალებები   
                    </label>
                    <label>
                        <input type='checkbox' id='medicalDevices' /> 
                        სამედიცინო მოწყობილობები   
                    </label>
                    <label>
                        <input type='checkbox' id='motherChild' /> 
                        დედა შვილი   
                    </label>
                </div>
            </div>

            <input className='formSubmitBtn' type='submit' value='დამახსოვრება' />
        </form>
    )
}