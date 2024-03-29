import { Icon, IconProps, forwardRef } from '@chakra-ui/react';

/* eslint-disable react/jsx-props-no-spreading */
const TelegramIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon viewBox="0 0 537 537" ref={ref} {...props}>
    <path d="m37 237c144-63 240-104 288-124 137-57 166-67 184-67 4.1-0.072 13 0.94 19 5.7 5 4.1 6.4 9.5 7 13 0.66 3.8 1.5 13 0.83 19-7.4 78-40 268-56 355-6.9 37-21 49-34 51-29 2.6-50-19-78-37-43-29-68-46-110-74-49-32-17-50 11-79 7.3-7.6 134-123 136-133 0.31-1.3 0.59-6.2-2.3-8.7-2.9-2.6-7.2-1.7-10-0.99-4.4 0.99-74 47-208 138-20 14-38 20-54 20-18-0.38-52-10-77-18-31-10-56-15-53-32 1.1-8.9 13-18 37-27z" />
  </Icon>
));

export default TelegramIcon;
