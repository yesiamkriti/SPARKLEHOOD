import { Request, Response, NextFunction } from 'express'
import { isValidSeverity } from '../utils/validateSeverity'
import Incident from '../models/incident.model'

// GET /incidents
export const getAllIncidents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const incidents = await Incident.find()
    res.status(200).json(incidents)
  } catch (error) {
    next(error)
  }
}

// GET /incidents/:id
export const getIncidentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const incident = await Incident.findById(req.params.id)
    if (!incident)
      return res.status(404).json({ message: 'Incident not found' })
    res.status(200).json(incident)
  } catch (error) {
    next(error)
  }
}

// POST /incidents
export const createIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const incidents = Array.isArray(data) ? data : [data];
    for (const incidentData of incidents) {
      const { title, description, severity } = incidentData

      if (!title || !description || !severity) {
        return res.status(400).json({ message: 'Missing required fields' })
      }

      if (!isValidSeverity(severity)) {
        return res.status(400).json({ message: `Invalid severity value ${severity}` })
      }
    }
    const savedIncident = await Incident.insertMany(incidents);
    res.status(201).json(savedIncident)
  } catch (error) {
    next(error)
  }
}

// DELETE /incidents/:id
export const deleteIncident = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleted = await Incident.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Incident not found' })
    res.status(204).send() // or res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error)
  }
}
