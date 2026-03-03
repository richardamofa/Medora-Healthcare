import { Request, Response } from 'express';
import { Patient } from '../models/Patient';

export const addPatient = async (req: Request, res: Response) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).json(patient);
};

export const getPatients = async (req: Request, res: Response) => {
  const patients = await Patient.find();
  res.json(patients);
};

export const updatePatient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const patient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
  if (!patient) return res.status(404).json({ msg: 'Patient not found' });
  res.json(patient);
};

export const deletePatient = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Patient.findByIdAndDelete(id);
  res.json({ msg: 'Deleted' });
};