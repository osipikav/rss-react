export interface ICard {
  inputName: string;
  inputDate: string;
  selectText: string;
  checkboxChecked: boolean;
  radioChecked: string;
  imageUrl?: string;
  imageUploaded?: string;
  isFormSubmitted?: boolean;
}

export interface IData {
  concent: boolean;
  date: string;
  gender: string;
  image: string;
  name: string;
  notificationPreference?: string;
}

export interface IProduct {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  state: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  // torrents
  // :
  // (2) [{…}, {…}]
  url: string;
  year: number;
  yt_trailer_code: string;
}
