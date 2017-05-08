import OData from "react-odata";
import React, { Component } from "react";
import buildQuery from 'odata-query';


const base = 'http://172.30.3.201';
const entitybase = 'http://localhost/RETSAPI/BiEntity';
const widgetdatabase = 'http://localhost/RETSAPI/Growth';



class MLSOData extends Component {
  render() {
    const { collection, token,filter,select, ...rest } = this.props;
    //write logic to handle auth type
    const authHeader = { headers: { 'Accept': 'application/json'}};   
    var query='';
     query =buildQuery({ select, filter});


var actualcollection=collection.toLowerCase() ==='geography'? 'vGeographyByGeographyTypes':'';
    if (collection.toLowerCase() ==='geography'? 'vGeographyByGeographyTypes':''  ) {
      return <OData baseUrl={`${entitybase}/${actualcollection}${query}`} options={authHeader} {...rest} />  
   }

   if (collection.toLowerCase() === 'markettrends'?'markettrends': collection.toLowerCase() === 'KPI'?'markettrendslast90':(collection.toLowerCase() === 'member' ||collection.toLowerCase() === 'office')?'agentproduction':''  ) {
      return <OData baseUrl={`${widgetdatabase}/${collection}${query}`} options={authHeader} />
   }
 
   return <OData baseUrl={`${base}`} options={authHeader} />
  }

}





export default MLSOData;