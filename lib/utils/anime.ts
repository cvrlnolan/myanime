export function animeStatus(status: number): string {
  if (status === 0) {
    return "Finished";
  }
  if (status === 1) {
    return "Ongoing";
  }
  if (status === 2) {
    return "Not Yet Released";
  }
  if (status === 3) {
    return "Cancelled";
  }
  return "Unknown";
}

export function animeScore(score: number): string {
  if (0 < score && score < 49) {
    return "text-red-600";
  }
  if (49 < score && score < 59) {
    return "text-amber-600";
  }
  if (59 < score && score < 79) {
    return "text-lime-600";
  }
  if (79 < score && score <= 100) {
    return "text-emerald-600";
  }
  return "text-gray-600";
}

export function animeFormat(format: number): string {
  if (format === 0) {
    return "TV Show";
  }
  if (format === 1) {
    return "TV_SHORT";
  }
  if (format === 2) {
    return "Movie";
  }
  if (format === 3) {
    return "Special";
  }
  if (format === 4) {
    return "OVA";
  }
  if (format === 5) {
    return "ONA";
  }
  if (format === 6) {
    return "Music";
  }
  return "Unknown";
}

export function animeEpisodes(episodes: number): string {
  if (episodes === 1) {
    return "";
  }
  return episodes + " episodes";
}

export function animeGenres(genres: any[]): any[] {
  if (genres.length > 3) {
    let featuredGenres = genres.sort().splice(0, 3);
    return featuredGenres;
  }
  return genres.sort();
}

export function animeSeason(season: number): string {
  if (season === 0) {
    return "Winter";
  }
  if (season === 1) {
    return "Spring";
  }
  if (season === 2) {
    return "Summer";
  }
  if (season === 3) {
    return "Fall";
  }
  return "Unknown";
}

export function animeEpDuration(duration: number): string {
  return duration + "minutes";
}
