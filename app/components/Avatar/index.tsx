import React from 'react';
import Box, { BoxProps } from '../Box';
import Person from '../icons/Person';

const Img = Box.withComponent('img');

export interface AvatarProps extends BoxProps {
  srcUrl?: string;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ srcUrl, sx, ...rest }) => {
  return (
    <Box sx={{ borderRadius: 'full', height: '24px', width: '24px', ...sx }} {...rest}>
      {srcUrl && <Img src={srcUrl} sx={{ borderRadius: 'full', height: '24px', width: '24px' }} />}
      {!srcUrl && <Person />}
    </Box>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
