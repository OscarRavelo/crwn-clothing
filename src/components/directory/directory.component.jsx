import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { SelectDirectorySections } from '../../redux/directoy/directory.selector';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
const mapStateToProps = state => ({
  sections: SelectDirectorySections(state)
})
export default connect(mapStateToProps)(Directory);
