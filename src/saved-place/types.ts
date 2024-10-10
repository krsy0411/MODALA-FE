import { TourDataType } from "../context/Tour";

export type PlacesStateTypes = "text" | "map";
export interface TextPlacesType {
	pagehandler: React.Dispatch<React.SetStateAction<PlacesStateTypes>>;
	datahandler: React.Dispatch<React.SetStateAction<number>>;
	data: TourDataType[];
}
export interface MapPlacesType {
	pagehandler: React.Dispatch<React.SetStateAction<PlacesStateTypes>>;
	data: TourDataType;
}
