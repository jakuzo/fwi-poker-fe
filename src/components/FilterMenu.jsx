import cn from 'classnames';
import styles from './FilterMenu.module.scss';
import { Button } from '@react-md/button';
import { Divider } from '@react-md/divider';

export default function FilterMenu(props) {
  const { config, onClose } = props;

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
            <Button>Winnings</Button>
            <Button>Country</Button>
            <Button>Name</Button>
          </div>
          <Divider />
          <div className={cn(styles.itemTitle)}> Order: </div>
          <div className={cn(styles.wrapper)}>
            <Button>Ascending</Button>
            <Button>Descending</Button>
          </div>
        </div>
        <Divider />
        <div className={cn(styles.bottom)}>
          <Button>Apply</Button>
          <Button theme="error">Remove Filters</Button>
        </div>
      </div>
    </div>
  );
}
