import { useState } from 'react';
import MapPlaces from './sub-pages/MapPlaces';
import TextPlaces from './sub-pages/TextPlaces';
import { PlacesStateTypes } from './types';

export default function SavedPlaces() {
  const [pageIndex, setPageIndex] = useState<PlacesStateTypes>('text');

  return (
    <div className="saved-places__container">
      {pageIndex === 'text' ? (
        <TextPlaces handler={setPageIndex} />
      ) : (
        <MapPlaces handler={setPageIndex} />
      )}
    </div>
  );
}
