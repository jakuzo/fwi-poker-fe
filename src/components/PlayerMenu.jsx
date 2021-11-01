import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { Divider } from '@react-md/divider';

import Api from '../api';
import { fetchAllPlayers } from '../appState/players';
import styles from './PlayerMenu.module.scss';

export default function PlayerMenu(props) {
  const { config, onClose } = props;
  const { playerData } = config;

  const [newPlayerData, setNewPlayerData] = useState({
    name: '',
    winnings: '',
    country: '',
    ...playerData,
  });

  const dispatch = useDispatch();

  const handleCreate = async () => {
    if (
      !(newPlayerData.name && newPlayerData.winnings && newPlayerData.country)
    ) {
      console.warn('All fields required when creating player!');
      return { error: 'All fields required.' };
    }

    const newPlayerResp = await Api.Players.create(newPlayerData);
    return newPlayerResp;
  };

  const handleEdit = async () => {
    const editPlayerResp = await Api.Players.update(
      playerData.id,
      newPlayerData
    );
    return editPlayerResp;
  };

  const handleDelete = async () => {
    const deletePlayerResp = await Api.Players.destroy(playerData.id);
    if (deletePlayerResp.error) {
      return;
    }

    dispatch(fetchAllPlayers());
    onClose?.();
  };

  const saveHandler = async () => {
    if (config.menuType === 'create') {
      const createResp = await handleCreate();
      if (createResp.error) {
        return;
      }
    }
    if (config.menuType === 'edit') {
      const editResp = await handleEdit();
      if (editResp.error) {
        return;
      }
    }
    dispatch(fetchAllPlayers());
    onClose?.();
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
              id="player-name-input"
              label={playerData.name ? `Name: ${playerData.name}` : 'Name'}
              onChange={(e) =>
                setNewPlayerData({
                  ...newPlayerData,
                  name: e.currentTarget.value,
                })
              }
            />
          </div>
          <div className={cn(styles.input)}>
            <TextField
              id="player-winnings-input"
              label={
                playerData.winnings
                  ? `Winnings: ${playerData.winnings}`
                  : 'Winnings'
              }
              type="number"
              onChange={(e) =>
                setNewPlayerData({
                  ...newPlayerData,
                  winnings: e.currentTarget.value,
                })
              }
            />
          </div>
          <div className={cn(styles.input)}>
            <TextField
              id="player-country-input"
              label={
                playerData.country
                  ? `Country: ${playerData.country}`
                  : 'Country'
              }
              onChange={(e) =>
                setNewPlayerData({
                  ...newPlayerData,
                  country: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
        <Divider />
        <div className={cn(styles.bottom)}>
          <Button onClick={() => saveHandler()}>Save</Button>
          {config.menuType === 'edit' && (
            <Button onClick={() => handleDelete()} theme="error">
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
