import { Game } from "../models/Game.js";

//update "/http://localhost:3000/games/id"
export const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dateReleased, genre } = req.body;

    const gameToUpdate = await Game.findByIdAndUpdate(
      id,
      {
        title,
        description,
        dateReleased,
        genre,
      },
      { new: true },
    );

    res
      .status(200)
      .json({ gameToUpdate, message: "game updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

//delete "/http://localhost:3000/games/id"

export const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const gameToDelete = await Game.findByIdAndDelete(id);

    if (!gameToDelete) {
      return res.status(404).json({ message: "game not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//get games

export const getGames = async (req, res) => {
  try {
    const games = await Game.find({});

    if (!games) {
      return res.status(400).json({ message: "No games found" });
    }

    res.status(200).json(games);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "error fetching games", err: err.message });
  }
};

export const createGame = async (req, res) => {
  try {
    const { title, description, dateReleased, genre } = req.body;

    if (
      title !== "" ||
      description !== "" ||
      dateReleased !== "" ||
      genre !== ""
    ) {
      return res.status(400).json({ message: "some fields empty" });
    }

    const game = Game.create({ title, description, dateReleased, genre });

    return res.status(201).json({ game, message: "game created successfully" });
  } catch (error) {
    console.log(error);
  }
};
