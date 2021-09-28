export default function Button({content, type, customClass}) {
    return (
        <button className={'globalBtn ' + (customClass || '')} type={type}>{content}</button>
    )
}