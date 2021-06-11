import React from 'react';

//navigation drawer public reference
export const navigationRef = React.createRef();

//navigation drawer public navigate ref
export function navigate(name){
    navigationRef.current?.navigate(name);
}