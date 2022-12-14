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

interface Reviewer {
  name: string;
  image: string;
}

export interface Home {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  note: string;
  reviewCount: number;
  features: object;
  pricePerNight: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: object;
  host: Host;
  _geoloc: Geoloc;
  type: string;
  location: Location;
  userId: number;
}

export interface Review {
  id: string;
  createdAt: Date;
  homeId: number;
  reviewer: Reviewer;
  rating: string;
  date: Date;
  comment: string;
}

export interface User {
  id: string;
  joined: Date;
  name: string;
  reviewCount: number;
  description: string;
  image: string;
}
