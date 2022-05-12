import React from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (<div style={{height:"2.5rem"}}>
   { props.alert && (<Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity={props.alert.type}><strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}!</Alert>
       </Stack>)}
    </div>
      
    //   <div
    //     className={
    //       "alert alert-" + props.alert.type + " alert-dismissible fade show"
    //     }
    //     role="alert"
    //   >
    //     <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
    //   </div>
  );
}
