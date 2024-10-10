import { useContext, useEffect, useState } from 'react';
import MapPlaces from './sub-pages/MapPlaces';
import TextPlaces from './sub-pages/TextPlaces';
import { PlacesStateTypes } from './types';
import { TourContext, TourDataType } from '../context/Tour';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';
interface StateType {
  status: Status;
  data: TourDataType[];
  error: Error | null;
}
export default function SavedPlaces() {
  const [pageIndex, setPageIndex] = useState<PlacesStateTypes>('text');
  const [dataIndex, setDataIndex] = useState<number>(0);
  const [state, setState] = useState<StateType>({
    status: 'initial',
    data: [],
    error: null,
  });
  const { cachedData, isDataValid } = useContext(TourContext);

  useEffect(() => {
    let ignore = false;
    const cacheKey = 'representedTour';

    async function fetchData() {
      if (ignore) return;
      setState(state => ({ ...state, status: 'pending' }));

      try {
        const response = await fetch(`${import.meta.env.VITE_BE_URL}/tour?is_represent=1&page=1`);
        const data = await response.json();
        cachedData(cacheKey, data);
        setState(state => ({
          ...state,
          status: 'fulfilled',
          data: data
        }));
      } catch (error) {
        setState(state => ({
          ...state,
          status: 'rejected',
          error: error instanceof Error ? error : new Error(String(error))
        }))
      }
    }
    // 만약 상태가 초기인 경우, tour데이터가 있는지 체크해보고, 상태를 갱신
    if (state.status === 'initial') {
      if (isDataValid(cacheKey)) {
        setState(state => ({
          ...state,
          status: 'fulfilled',
          data: cachedData(cacheKey),
        }));
      } else {
        fetchData();
      }
    }

    return () => {
      ignore = true;
    }
  }, [cachedData, isDataValid, state.status]);

  return (
    <div className="saved-places__container" style={{
      width: '100%',
      height: '100%'
    }}>
      {pageIndex === 'text' ? (
        <TextPlaces pagehandler={setPageIndex} datahandler={setDataIndex} data={state.data} />
      ) : (
        <MapPlaces pagehandler={setPageIndex} data={state.data[dataIndex]} />
      )}
    </div>
  );
}
