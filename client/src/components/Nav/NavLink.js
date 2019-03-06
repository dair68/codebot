import React from "react";
import NavModal from "./NavModal";

const NavLink = props => {
    return (
        <div>
            <a className="nav-link" href="#" data-toggle="modal" data-target={"#" + props.id}>
                {props.linkTitle}
            </a>
            <NavModal id={props.id} title={props.modalTitle}>{props.children}</NavModal>
        </div>
    );
};

export default NavLink;