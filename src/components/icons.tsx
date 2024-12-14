import React from 'react';
import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type iconsProp = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: iconsProp) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E"></Icon>;

      break;
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77"></Icon>;

      break;

    default:
      return <Icon name="pencil" size={38} color="#0D0D0D"></Icon>;
  }
};

export default Icons;
