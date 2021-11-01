import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import styles from './FilterMenu.module.scss';
import { Button } from '@react-md/button';
import { Divider } from '@react-md/divider';

import { fetchAllPlayersSorted, fetchAllPlayers } from '../appState/players';

const initActiveFilter = { sortBy: '', orderBy: '' };

export default function FilterMenu(props) {
  const { config, onClose } = props;
  const [activeFilter, setActiveFilter] = useState(initActiveFilter);
  const dispatch = useDispatch();

  const handleApply = async () => {
    dispatch(fetchAllPlayersSorted(activeFilter));
  };

  const handleDiscard = () => {
    setActiveFilter(initActiveFilter);
    dispatch(fetchAllPlayers());
  };

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.menu)}>
        <div className={cn(styles.top)}>
          <div className={cn(styles.menuTitle)}>
            {config.menuType} Apply Filters
          </div>
          <div className={cn(styles.closeBtn)} onClick={() => onClose?.()}>
            Close
          </div>
        </div>
        <Divider />
        <div className={cn(styles.content)}>
          <div className={cn(styles.itemTitle)}> Sort By: </div>
          <div className={cn(styles.wrapper)}>
            <Button
              onClick={() =>
                setActiveFilter({ ...activeFilter, sortBy: 'name' })
              }
              themeType={activeFilter.sortBy === 'name' ? 'outline' : 'flat'}
            >
              Name
            </Button>
            <Button
              onClick={() =>
                setActiveFilter({ ...activeFilter, sortBy: 'winnings' })
              }
              themeType={
                activeFilter.sortBy === 'winnings' ? 'outline' : 'flat'
              }
            >
              Winnings
            </Button>
            <Button
              onClick={() =>
                setActiveFilter({ ...activeFilter, sortBy: 'country' })
              }
              themeType={activeFilter.sortBy === 'country' ? 'outline' : 'flat'}
            >
              Country
            </Button>
          </div>
          <Divider />
          <div className={cn(styles.itemTitle)}> Order: </div>
          <div className={cn(styles.wrapper)}>
            <Button
              onClick={() =>
                setActiveFilter({ ...activeFilter, orderBy: 'asc' })
              }
              themeType={activeFilter.orderBy === 'asc' ? 'outline' : 'flat'}
            >
              Ascending
            </Button>
            <Button
              onClick={() =>
                setActiveFilter({ ...activeFilter, orderBy: 'desc' })
              }
              themeType={activeFilter.orderBy === 'desc' ? 'outline' : 'flat'}
            >
              Descending
            </Button>
          </div>
        </div>
        <Divider />
        <div className={cn(styles.bottom)}>
          <Button onClick={() => handleApply()}>Apply</Button>
          <Button theme="error" onClick={() => handleDiscard()}>
            Remove Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
