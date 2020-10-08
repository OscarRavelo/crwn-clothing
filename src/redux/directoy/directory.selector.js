import {createSelector} from 'reselect';


  const selectSections = state => state.directory;

  export const SelectDirectorySections = createSelector([selectSections],
    directory => directory.sections
    );