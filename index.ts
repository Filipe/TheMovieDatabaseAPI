class Content {
  genres: Genre[];
  homepage: string;
  id: number;
  originalLanguage: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: ProductionCompany[];
  status: string;
  voteAverage: number;
  voteCount: number;
}

class Movie extends Content {
  adult: boolean;
  backdropPath: string;
  belongsToCollection: Collection;
  budget: number;
  imdbId: string;
  originalTitle: string;
  productionCountries: ProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  tagline: string;
  title: string;
  video: boolean;
}

class TVShow extends Content {
  backdropPath: string;
  createdBy: CreatedBy[];
  episodeRunTime: number[];
  firstAirDate: string;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: LastEpisodeToAir;
  name: string;
  networks: Network[];
  nextEpisodeToAir: NextEpisodeToAir;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalName: string;
  seasons: Season[];
  type: string;
}

class Collection {
  id: number;
  name: string;
  overview: string;
  posterPath: null;
  backdropPath: string;
  parts: Part[];
}

class Part {}

class Genre {
  id: number;
  name: string;
}

class ProductionCompany {
  name: string;
  id: string;
  logoPath: string;
  originCountry: string;
}

class ProductionCountry {
  iso3166_1: string;
  name: string;
}

class SpokenLanguage {
  iso639_1: string;
  name: string;
}

class CreatedBy {
  id: number;
  creditId: string;
  name: string;
  gender: number;
  profilePath: string;
}

class Episode {
  airDate: string;
  episodeNumber: number;
  id: number;
  name: string;
  overview: string;
  productionCode: string;
  seasonNumber: number;
  showId: number;
  stillPath: string;
}

class LastEpisodeToAir extends Episode {
  voteAverage: number;
  voteCount: number;
}

class NextEpisodeToAir extends Episode {}

class Network {
  name: string;
  id: number;
  logoPath: string;
  originCountry: string;
}

class Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
}
