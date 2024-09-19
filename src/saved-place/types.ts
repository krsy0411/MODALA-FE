export type PlacesStateTypes = 'text' | 'map';
export interface SharedPropsType {
  handler: React.Dispatch<React.SetStateAction<PlacesStateTypes>>;
}
