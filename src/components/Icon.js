import type {IconMoonProps} from 'react-native-icomoon';
import IconMoon from 'react-native-icomoon';
import json from '../themes/selection.json';
import React from 'react';

type IconProps = Omit<IconMoonProps, "iconSet">

export default function Icon({name,color, size,  ...restProps }: IconProps){
    return <IconMoon iconSet={json} name={name}  color = {color} size = {size} {...restProps}/>
}
