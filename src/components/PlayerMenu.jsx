import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { Divider } from '@react-md/divider';

import { fetchAllPlayers } from '../appState/players';
import styles from './PlayerMenu.module.scss';

export default function PlayerMenu(props) {
  const { config, onClose } = props;
  const { playerData } = config;

  const dispatch = useDispatch();

  const saveHandler = async () => {
    console.log('Inside of save handler');

    // TODO: If creating new player, perform and await create request
    // Then, to ensure our app is in sync, perform a fetch all players
    dispatch(fetchAllPlayers());
  };

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
          <Button onClick={() => saveHandler()}>Save</Button>
          {config.menuType === 'edit' && <Button theme="error">Delete</Button>}
        </div>
      </div>
    </div>
  );
}
