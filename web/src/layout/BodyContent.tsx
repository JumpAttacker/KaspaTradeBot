import {useOutlet} from "react-router-dom";

export const BodyContent = () => {
    const outlet = useOutlet();
    return <div className={'flex-grow container text-black'}>
        {outlet}
    </div>
}