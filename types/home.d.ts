interface Host {
  name: string;
  note: string;
  image: string;
  joined: string;
  reviewCount: number;
  reviewValue: number;
}

interface Geoloc {
  lat: number;
  lng: number;
}

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
}
export interface Home {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  note: string;
  reviewCount: number;
  features: Object;
  pricePerNight: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: Object;
  host: Host;
  _geoloc: Geoloc;
  type: string;
  location: Location;
  userId: number;
}
