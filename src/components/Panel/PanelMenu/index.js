import React, {useState} from "react";

import Button from "../../Button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const PanelMenu = ({ colors }) => {
    const dragIcon = <FontAwesomeIcon icon={faArrowsAlt} style={{opacity: 0.3}}/>
    const menuIcon = <FontAwesomeIcon icon={faChevronRight} style={{opacity: 0.3}}/>

    const [selected, setSelected] = useState(false);

    const handleMenuExpand = () => {
        setSelected(!selected);
        console.log(selected)
    }

    
    return (
        <div className="panel-menu">
            <div className={`expanded-menu ${selected ? "selected" : ""}`}>
                    <p>something</p>
            </div>
            <Button text={menuIcon} action={handleMenuExpand} type="menu-btn" colors={colors}/>
            {dragIcon}
        </div>
    )
}

export default PanelMenu;