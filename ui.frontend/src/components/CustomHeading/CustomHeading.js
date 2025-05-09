import React, {Component} from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require('./CustomHeading.css');
const CustomHeadingEditConfig = {
    emptyLabel: 'Custom Heading',
    isEmpty: function(props){
return !props || props.heading.trim().length < 1;
}
};
export default class CustomHeading extends Component {
render(){
return(<div className="heading"> First Component </div>);
}
}
MapTo('honda/components/custom-heading')(CustomHeading, CustomHeadingEditConfig);