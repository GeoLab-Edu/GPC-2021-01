import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BuyButton({customClass, type, content, btnClass, onClick}) {
    return (
        <div className={'globalBtn '+ (btnClass || '')}>
            <FontAwesomeIcon icon='shopping-bag' className='cartIcon'/>
            <button className={'ByeBtn ' + (customClass || '')} type={type} onClick={onClick || null}>{content}</button>
        </div>
    )
}