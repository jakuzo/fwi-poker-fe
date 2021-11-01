import cn from 'classnames';
import { Button } from '@react-md/button';

import styles from './TableControls.module.scss';

export default function TableControls(props) {
  const { onCreatePlayer, onFilterOpen } = props;
  return (
    <div id="table-controls" className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <Button onClick={() => onFilterOpen?.()}>Filter</Button>
        <Button onClick={() => onCreatePlayer?.()}>Create Player</Button>
      </div>
    </div>
  );
}
