import cn from 'classnames';
import { TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { Divider } from '@react-md/divider';

import styles from './PlayerMenu.module.scss';

export default function PlayerMenu(props) {
  const { config, onClose } = props;
  const { playerData } = config;

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.menu)}>
        <div className={cn(styles.top)}>
          <div className={cn(styles.menuTitle)}>{config.menuType} Player</div>
          <div className={cn(styles.closeBtn)} onClick={() => onClose?.()}>
            Close
          </div>
        </div>
        <div className={cn(styles.inputs)}>
          <div className={cn(styles.input)}>
            <TextField
              label={playerData.name ? `Name: ${playerData.name}` : 'Name'}
            />
          </div>
          <div className={cn(styles.input)}>
            <TextField
              label={
                playerData.winnings
                  ? `Winnings: ${playerData.winnings}`
                  : 'Winnings'
              }
              type="number"
            />
          </div>
          <div className={cn(styles.input)}>
            <TextField
              label={
                playerData.country
                  ? `Country: ${playerData.country}`
                  : 'Country'
              }
            />
          </div>
        </div>
        <Divider />
        <div className={cn(styles.bottom)}>
          <Button>Save</Button>
          {config.menuType === 'edit' && <Button theme="error">Delete</Button>}
        </div>
      </div>
    </div>
  );
}
