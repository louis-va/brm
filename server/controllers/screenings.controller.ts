import { Request, Response } from 'express';
import dotenv from 'dotenv';

import database from '../models';
const Screening = database.screening;

// ENV variables
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get movie info
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
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
}

// Get casting
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
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
}

// Create a new screening
async function addScreening(req: Request, res: Response) {
  try {
    const movieId = req.body.movie_id
    const movieInfo = await getMovieInfo(movieId)
    const casting = await getCasting(movieId)

    const screening = new Screening({
      movie: {
        title: movieInfo.title,
        director: casting.crew
          .filter((member: any) => member.job === "Director")
          .map((director: any) => director.name),
        casting: casting.cast
          .slice(0, 5)
          .map((member: any) => member.name),
        genres: movieInfo.genres.map((genre: any) => genre.name),
        synopsis: movieInfo.overview,
        poster: `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`,
        trailer: "",
        score: movieInfo.vote_average,
        length: movieInfo.runtime,
        release: movieInfo.release_date
      },
      date: req.body.date,
      seats: []
    });

    await screening.save();

    res.status(200).send({ message: "Screening was created successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

// Get all screenings
async function getAllScreenings(req: Request, res: Response) {
  try {
    const screenings = await Screening.find().exec()

    if (!screenings) {
      res.status(500).send({ message: "Screenings not found" });
      return;
    }

    res.status(200).send({ screenings });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

export default { addScreening, getAllScreenings }