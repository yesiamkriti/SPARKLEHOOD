import { Router } from 'express';
import {
  getAllIncidents,
  getIncidentById,
  createIncident,
  deleteIncident,
} from '../controllers/incident.controller';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    await getAllIncidents(req, res, next);
  } catch (err) {
    next(err);
  }
});
router.post('/', async (req, res, next) => {
  try {
    await createIncident(req, res, next);
  } catch (err) {
    next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    await getIncidentById(req, res, next);
  } catch (err) {
    next(err);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteIncident(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default router;
