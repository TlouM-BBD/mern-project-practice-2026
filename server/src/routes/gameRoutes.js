import express from 'express';
// Ensure the path and .js extension are correct for ES Modules
import {
  getGames,
  createGame,
  deleteGame,
  updateGame,
} from "../controllers/gameController.js"; 

const router = express.Router();

router.get("/", getGames);
router.post("/", createGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

// Use 'export default' instead of 'module.exports'
export default router;