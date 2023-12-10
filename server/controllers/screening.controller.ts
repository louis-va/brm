import { Request, Response } from 'express';
import dotenv from 'dotenv';

import database from '../models';
const Screening = database.screening;
const Booking = database.booking;

// ENV variables
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get movie info from TMDB API
async function getMovieInfo(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch movie information');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

// Get a movie's casting from TMDB API
async function getCasting(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch casting information');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

// Get a movie's videos from TMDB API
async function getVideos(movieId: string): Promise<any> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=fr-FR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Failed to fetch videos');
    }
  } catch (err: any) {
    console.error('Error:', err);
    throw err;
  }
}

// Create a new screening
async function addScreening(req: Request, res: Response) {
  try {
    const movieId = req.body.movie_id

    // execute all promises at the same time
    const [movieInfo, casting, videos] = await Promise.all([
        getMovieInfo(movieId), 
        getCasting(movieId), 
        getVideos(movieId)
      ]);

    const screening = new Screening({
      movie: {
        title: movieInfo.title,
        director: casting.crew
          .filter((member: any) => member.job === "Director") // filter the array to have only directors
          .map((director: any) => director.name), // returns only the name of the crew member
        casting: casting.cast
          .slice(0, 5) // returns only the 5 first cast members
          .map((member: any) => member.name), // returns only the name of the cast member
        genres: movieInfo.genres.map((genre: any) => genre.name),
        synopsis: movieInfo.overview,
        poster: `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`,
        trailer: videos.results
          .filter((video: any) => video.type === "Trailer" && video.site === "YouTube") // filter the array to have only trailers from youtube
          .map((video: any) => `https://www.youtube.com/embed/${video.key}`) // returns only the url of the video
          .slice(0, 1).join(''), // returns only the first trailer
        score: movieInfo.vote_average,
        length: movieInfo.runtime,
        release: movieInfo.release_date
      },
      date: req.body.date
    });

    await screening.save();

    res.status(200).send({ message: "Screening was created successfully!" });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Get all screenings
async function getAllScreenings(req: Request, res: Response) {
  try {
    const screenings = await Screening.find()

    res.status(200).send({ screenings });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Get one screening
async function getOneScreening(req: Request, res: Response) {
  try {
    const screeningId = req.params.id
    const screening = await Screening.findById(screeningId)

    const bookings = await Booking.find({ screening_id: screeningId }, 'seats')
    
    if (bookings.length > 0) {
      screening!.seats = bookings.map(booking => booking.seats).flat(1);
      console.log(screening!.seats)
    } else {
      screening!.seats = []
    }

    res.status(200).send(screening);
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Get the genres of the upcoming movies
async function getGenres(req: Request, res: Response) {
  try {
    const genres = await Screening.distinct('movie.genres')

    res.status(200).send({ genres });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Get the dates of the upcoming movies
async function getDates(req: Request, res: Response) {
  try {
    const rawDates = await Screening.distinct('date')

    // filter the array of dates to have only unique dates without times 
    const dates = Array.from(new Set(rawDates.map(date => new Date(date).toISOString().split('T')[0])));

    res.status(200).send({ dates });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { addScreening, getAllScreenings, getOneScreening, getGenres, getDates }