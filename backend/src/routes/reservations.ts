import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Reservations list', reservations: [], total: 0 });
});

router.post('/', (req: Request, res: Response) => {
  try {
    const { guestId, roomType, checkIn, checkOut } = req.body;
    res.status(201).json({
      message: 'Reservation created successfully',
      reservation: { id: 1, guestId, roomType, checkIn, checkOut, status: 'confirmed' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation' });
  }
});

export default router;
