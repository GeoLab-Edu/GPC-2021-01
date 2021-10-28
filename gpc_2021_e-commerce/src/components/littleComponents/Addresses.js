import { useState } from "react";
import './../../styles/Addresses.css';

export default function Addresses() {
    const[address, setAddress]=useState('ჭავჭავაძის გამზირი 23')
    return (
        <section className='AddressesSection'>
            <form  onSubmit={(e)=> e.preventDefault()}>
                <fieldset className='Delivery'>
                    <h5 className='addressSectionTitles'>მიწოდების მეთოდი</h5>
                    <label>
                        <input type='checkbox' />
                        ადგილზე მიტანა
                    </label>                    
                </fieldset>
                <fieldset className='Address'>
                    <label className='addressSectionTitles' for='address'>მისამართი</label>
                    <input type='text' id='address' value={address} onChange={(e)=> setAddress(e.target.value)} />
                </fieldset>
                <fieldset className='Payment'>
                    <h5 className='addressSectionTitles'>მიწოდების მეთოდი</h5>
                    <label>
                        <input type='checkbox' />
                        საბანკო ბარათით
                        <span className='paymentCard'>****7645</span>
                    </label>
                </fieldset>

            </form>
        </section>
    )
}