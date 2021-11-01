import { useState } from 'react';
import { Portal } from '@react-md/portal';

import Header from './Header';
import TableControls from './TableControls';
import PlayerTable from './PlayerTable';
import PlayerMenu from './PlayerMenu';
import FilterMenu from './FilterMenu';

const initPlayerMenuConfig = {
  display: false,
  menuType: '',
  playerData: {},
};

const initFilterMenuConfig = {
  display: false,
  activeFilters: [],
};

export default function App() {
  const [playerMenu, setPlayerMenu] = useState(initPlayerMenuConfig);
  const [filterMenu, setFilterMenu] = useState(initPlayerMenuConfig);

  return (
    <>
      <Header />
      <TableControls
        onCreatePlayer={() =>
          setPlayerMenu({ ...playerMenu, display: true, menuType: 'create' })
        }
        onFilterOpen={() => setFilterMenu({ ...filterMenu, display: true })}
      />
      <PlayerTable
        onPlayerSelect={(playerData) =>
          setPlayerMenu({ display: true, menuType: 'edit', playerData })
        }
      />
      <Portal intoId="table-controls">
        {playerMenu.display && (
          <PlayerMenu
            config={playerMenu}
            onClose={() => setPlayerMenu(initPlayerMenuConfig)}
          />
        )}
        {filterMenu.display && (
          <FilterMenu
            config={filterMenu}
            onClose={() => setFilterMenu(initFilterMenuConfig)}
          />
        )}
      </Portal>
    </>
  );
}
