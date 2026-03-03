import { Request, Response } from 'express';
import { Patient } from '../models/Patient';
import { Doctor } from '../models/Doctor';
import { Appointment } from '../models/Appointment';

export const getDashboard = async (req: Request, res: Response) => {
  const totalPatients = await Patient.countDocuments();
  const totalDoctors = await Doctor.countDocuments();
  const today = new Date();
  const start = new Date(today.setHours(0, 0, 0, 0));
  const end = new Date(today.setHours(23, 59, 59, 999));
  const totalAppointmentsToday = await Appointment.countDocuments({ date: { $gte: start, $lte: end } });

  res.json({ totalPatients, totalDoctors, totalAppointmentsToday });
};